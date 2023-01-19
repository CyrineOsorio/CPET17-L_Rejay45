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
                            <form method="post">
                                <input name="csrfToken" type="hidden"/>
                                <br />
                                <label>
                                    Old Password
                                    <input name="old_password" id="old_password" type="password" />
                                </label>
                                <label>
                                    New Password
                                    <input name="password" id="password" type="password" />
                                </label>
                                <label>
                                    Confirm Password
                                    <input name="confirm_password" id="confirm_password" type="password" />
                                </label>
                                <button type="submit" className={styles.signinbutton}>Change Password</button>
                                <p> Go back to <Link href="/MainLanding" className={styles.links5}>Motion Detector </Link> page.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResetPassPage;