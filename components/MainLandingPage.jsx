import styles from "./MainLandingPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signOut} from 'next-auth/react'
import LoginPage from "../components/LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function MainLanding() {
    
    return (
    <div className={styles.container}>
    <ToastContainer />
        <div className={styles.logo}>
            <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            <div className={styles.menubars}>
                <a href="http://localhost:3000/display" className={styles.logoutbutton}>Motion</a>
                <a href="http://localhost:7000/logout" className={styles.logoutbutton}>Logout</a>
            </div>
        </div>
        
        <div className={styles.body}>
            <div className={styles.body1}>
                <div className={styles.usercont}>
                    <div className={styles.headbanner}>
                        <p>Welcome!</p>
                        <a href="/ResetPass" className={styles.resetpasswordlink}>Reset Password</a>
                    </div>
                </div>


                <div className={styles.filesfiles}>
                    <div className={styles.lagayan}>
                        <div className={styles.photocontainer}>
                            <div className={styles.container}>
                                <div className={styles.body1_a}>
                                    <Image src="/images/logingal.png" alt="logingal" className={styles.logingal} width={800} height={500} />
                                    <div>
                                        <p>
                                             WebCam Motion Detector in Python
                                        </p>
                                        <p>
                                            This python program will allow you to detect motion and also store the date & time detected.
                                        </p> 
                                        <p>
                                            <a href="http://localhost:3000/display" className={styles.tryme_btn}>Motion</a>
                                        </p>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
 );
}

export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://localhost:7000/MainLanding');
  
    // Get the json response
    const data = await res.json();
    
    // If user was not logged in, go to login page
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
    return { props: {} }
  }