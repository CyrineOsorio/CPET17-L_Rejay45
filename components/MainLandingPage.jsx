import styles from "./MainLandingPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signOut} from 'next-auth/react'

const MainLandingPage = () => {
    const {data: session} = useSession()
    console.log(session)
    return (
        <div className={styles.container}>
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
    )
};

export default MainLandingPage;