import styles from "./ResetPassPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const ResetPassPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                <div className={styles.body1_b}>
                        <div className={styles.body1_bcont}>
                            <h1 className={styles.loginword}>Reset Password</h1>
                            <div className={styles.linya}></div>
                            <p>For you to receive a one-time link via email to reset your password, you should be registered in our system first. <Link href="/Signup" className={styles.links5}>REGISTER </Link> here, if you are not yet a member.</p>
                            <form method="post">
                                <input name="csrfToken" type="hidden"/>
                                <label>
                                    Email
                                    <input name="username" type="text" />
                                </label>
                                <button type="submit" className={styles.signinbutton}>Send Email</button>
                                <p> Go back to <Link href="/Login" className={styles.links5}>LOGIN </Link> page.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResetPassPage;