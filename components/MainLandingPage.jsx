import styles from "./MainLandingPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const MainLandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                <div className={styles.menubars}>
                    <button type="submit" className={styles.logoutbutton}>Logout</button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <div className={styles.headbanner}>Welcome, USER123456@gmail.com.</div>
                    <div className={styles.filesfiles}>
                        <div className={styles.lagayan}>
                            <button type="submit" className={styles.PictureButton}>Take a Picture!</button>
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