import styles from "./MainLandingPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signOut} from 'next-auth/react'
import LoginPage from "../components/LoginPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success('Successfully logged in!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const noAccount = () => toast.error('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const MainLandingPage = () => {
    const {data: session, status} = useSession({required: true});

    if (status === 'authenticated'){
    return (
        <div className={styles.container} onLoad={notify}>
        <ToastContainer />
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                <div className={styles.menubars}>
                    <button type="submit" onClick={()=> signOut()} className={styles.logoutbutton}>Logout</button>
                </div>
            </div>
            
            <div className={styles.body}>
                <div className={styles.body1}>
                    <div className={styles.usercont}>
                        <img src={session.user.image} alt="" />
                        <div className={styles.headbanner}>Welcome, {session.user.name}!</div>
                    </div>
                    <div className={styles.filesfiles}>
                        <div className={styles.lagayan}>
                            <div className={styles.photocontainer}>
                               
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    )}

    else {
        return(
            <div>
                <LoginPage/>
            </div>
        )
    }
};

export default MainLandingPage;