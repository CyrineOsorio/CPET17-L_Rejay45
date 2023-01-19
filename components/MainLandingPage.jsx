import styles from "./MainLandingPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signOut} from 'next-auth/react'
import LoginPage from "../components/LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function MainLandingPage({ data }) {

     // Render into HTML
     if ( data == null ) {
        return (
            <div className={styles.container}>
            <ToastContainer />
                <div className={styles.logo}>
                    <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                    <div className={styles.menubars}>
                        <a href="http://localhost:4000/logout" className={styles.logoutbutton}>Logout</a>
                    </div>
                </div>
                
                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div className={styles.usercont}>
                            <div className={styles.headbanner}>Welcome, !</div>
                        </div>
                        <div className={styles.filesfiles}>
                            <div className={styles.lagayan}>
                                <div className={styles.photocontainer}>
                                    <h1>No data records.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
    
    return (
    <div className={styles.container}>
    <ToastContainer />
        <div className={styles.logo}>
            <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            <div className={styles.menubars}>
                <a href="http://localhost:4000/logout" className={styles.logoutbutton}>Logout</a>
            </div>
        </div>
        
        <div className={styles.body}>
            <div className={styles.body1}>
                <div className={styles.usercont}>
                    <div className={styles.headbanner}>Welcome, !</div>
                </div>
                <div className={styles.filesfiles}>
                    <div className={styles.lagayan}>
                        <div className={styles.photocontainer}>
                            {data.imgData.map(function(imgData) {
                            // Get the image data
                            let image = imgData['filename']['data'];
            
                            // Convert into blob into string with charset=utf-8
                            let base64Image = Buffer.from(image, 'base64').toString('utf-8');
            
                            // Configure the image tag attribute (src)
                            let imgSrc = "data:image/png;base64," + base64Image;
                            
                            // Get the date time
                            let dt = imgData['datetime'];
                            
                            return (
                                <div className={styles.container}>
                                    <p>DateTime Taken: {dt}</p>
                                    <img src={imgSrc}/>
                                </div>
                            )
                        })}  
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
 );
}

export default MainLandingPage;


export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://localhost:4000/MainLanding');

    // Get the json response
    const data = await res.json();

    // If user was not logged in, redirect to login page
    if ( data.is_logged_in == false ) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
        props: {},
      };
    }

    // If user was logged in, redirect to this current page
    return { props: { data } }
  }