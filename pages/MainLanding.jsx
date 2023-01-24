import styles from "../components/MainLandingPage.module.css"
import React from "react"
import Image from "next/image"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function MainLanding( {data} ) {
        
    let user = data.session.username;
    
    return (
    <div className={styles.container}>
    <ToastContainer />
        <div className={styles.logo}>
            <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            <div className={styles.menubars}>
                <a href="http://192.168.1.12:7000/logout" className={styles.logoutbutton}>Logout</a>
            </div>
        </div>
        
        <div className={styles.body}>
            <div className={styles.body1}>
                <div className={styles.usercont}>
                    <div className={styles.headbanner}>
                        <p>Welcome {user}!</p>
                        <a href="http://192.168.1.7:3000/ResetPass" className={styles.resetpasswordlink}>Change Password</a>
                    </div>
                </div>


                <div className={styles.filesfiles}>
                    <div className={styles.lagayan}>
                        <p>Click the button below to try our application and display the pictures. Press q key to close the camera. </p>
                        <a href="http://192.168.1.7:3000/display" className={styles.tryme_btn}>Motion</a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
 );
}

export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://192.168.1.12:7000/MainLanding');
  
    // Get the json response
    const data = await res.json();
    
    // If user was not logged in, go to login page
    if ( data.is_logged_in == false ) {
      return {
        redirect: {
          destination: "/Login",
          permanent: false,
        },
        props: {},
      };
    }
    // If user was logged in, redirect to this current page
    return { props: {data} }
  }