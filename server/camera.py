# importing OpenCV, time and Pandas library
import cv2, time, pandas, base64
# importing datetime class from datetime library
from datetime import datetime
import pytz

import requests
import os
# Assigning our static_back to None
static_back = None

# List when any moving object appear
motion_list = [ None, None ]

# Time of movement
time = []

# Initializing DataFrame, one column is start
# time and other column is end time
df = pandas.DataFrame(columns = ["Start", "End"])

# Capturing video
video = cv2.VideoCapture(0)

def convertToBinaryData(filename):
    # Convert digital data to binary format
    with open(filename, 'rb') as file:
        imageBase64 = base64.b64encode(file.read())
    return imageBase64.decode('utf-8')

# Infinite while loop to treat stack of image as video
while True:
    # Reading frame(image) from video
    check, frame = video.read()

    # Initializing motion = 0(no motion)
    motion = 0

    # Converting color image to gray_scale image
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Converting gray scale image to GaussianBlur
    # so that change can be find easily
    gray = cv2.GaussianBlur(gray, (21, 21), 0)

    # In first iteration we assign the value
    # of static_back to our first frame
    if static_back is None:
        static_back = gray
        continue

    # Difference between static background
    # and current frame(which is GaussianBlur)
    diff_frame = cv2.absdiff(static_back, gray)

    # If change in between static background and
    # current frame is greater than 30 it will show white color(255)
    thresh_frame = cv2.threshold(diff_frame, 150, 255, cv2.THRESH_BINARY)[1]
    thresh_frame = cv2.dilate(thresh_frame, None, iterations = 1)

    # Finding contour of moving object
    cnts,_ = cv2.findContours(thresh_frame.copy(),
                    cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    for contour in cnts:
        if cv2.contourArea(contour) < 10000:
            continue
        motion = 1

        (x, y, w, h) = cv2.boundingRect(contour)
        # making green rectangle around the moving object
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 3)

    # Appending status of motion
    motion_list.append(motion)

    motion_list = motion_list[-2:]


    # Displaying image in gray_scale
    cv2.imshow("Gray Frame", gray)

    # Displaying the difference in currentframe to
    # the staticframe(very first_frame)
    cv2.imshow("Difference Frame", diff_frame)

    # Displaying the black and white image in which if
    # intensity difference greater than 30 it will appear white
    cv2.imshow("Threshold Frame", thresh_frame)

    # Displaying color frame with contour of motion of object
    cv2.imshow("Color Frame", frame)

    key = cv2.waitKey(1)

    ##### PART I #####
    # if motion == True:
    #     var_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    #     filename = var_time + '.jpg'
        
    #     # Save the captured frame
    #     cv2.imwrite(filename, frame)
       
    #     # Get the absolute path of saved image (frame)
    #     file_path = os.path.abspath(filename)

    #     # Data that we will send in post request.
    #     data = {"var_time": var_time, "file_path": file_path}
    #     # The POST request to our node server
    #     res = requests.post('http://localhost:3000/upload', json=data)
    #     # Display the json response
    #     # print(res.json())


    ##### PART II #####
    # Appending End time of motion
    if motion_list[-1] == 0 and motion_list[-2] == 1:
        time.append(datetime.now())

    # Appending Start time of motion
    if motion_list[-1] == 1 and motion_list[-2] == 0:
        try:
            # eme = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            manilatz = pytz.timezone("Asia/Shanghai")
            var_time =  datetime.now(manilatz).strftime("%Y-%m-%d_%H-%M-%S")

            filename = var_time + '.jpg'
            
            # Save the captured frame
            cv2.imwrite(filename, frame)
        
            # Get the absolute path of saved image (frame)
            file_path = os.path.abspath(filename)

            base64img = convertToBinaryData(file_path)

            # Data that we will send in post request.
            data = {"var_time": str(var_time), "file_path": str(base64img), "file": str(file_path) }
            # The POST request to our node server
            res = requests.post('http://192.168.1.12:7000/upload', json=data)
            # Display the json response
            # print(res.json())

        except requests.exceptions.ConnectionError as e:
            print("Couldn't connect to the server!")


    # if q entered whole process will stop   
    if key == ord('q'):
        break

    
video.release()

# Destroying all the windows
cv2.destroyAllWindows()