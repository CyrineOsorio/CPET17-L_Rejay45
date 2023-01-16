import styles from "./LoginPage.module.css"
import react from "react"
import Link from "next/link"
import Image from "next/image"

const LoginPage = () => {
    return (
        <div>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <div className={styles.body1_a}></div>
                    <div className={styles.body1_b}></div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;