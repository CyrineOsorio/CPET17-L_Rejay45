import styles from "./SignupPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const SignupPage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                <div className={styles.body1_b}>
                        <div className={styles.body1_bcont}>
                            <h1 className={styles.loginword}>Sign Up</h1>
                            <div className={styles.linya}></div>
                            <p>Create an account to try our camera app for free!</p>
                            <form method="post">
                                <input name="csrfToken" type="hidden"/>
                                <label>
                                    Email
                                    <input name="username" type="text" />
                                </label>
                                <label>
                                    Password
                                    <input name="password" type="password" />
                                </label>
                                <label>
                                    Confirm Password
                                    <input name="password" type="password" />
                                </label>
                                <Link href="/ResetPass" className={styles.resetpasswordlink}>Reset Password</Link>
                                <button type="submit" className={styles.signinbutton}>Login</button>
                                <button type="submit" className={styles.ssogooglebutton}>Continue with Google</button>
                                <p>  Already have an account? <Link href="/Login" className={styles.links5}>LOGIN </Link> here.</p>
                            </form>
                        </div>
                    </div>
                    <div className={styles.body1_a}>
                        <Image src="/images/signupcam.png" alt="logingal" className={styles.logingal} width={1000} height={100} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default SignupPage;