import styles from "./LoginPage.module.css"
import react from "react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signIn, signOut} from 'next-auth/react'
import MainLandingPage from "./MainLandingPage"

const LoginPage = () => {
    const {data: session} = useSession()

    if (session) {
        return (<div>
            <MainLandingPage/>
            
        </div>
        )
    }

    else {
        return (
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                </div>
                <div className={styles.body}>
                    <div className={styles.body1}>
                        <div className={styles.body1_a}>
                        <Image src="/images/logingal.png" alt="logingal" className={styles.logingal} width={1000} height={100} />
                        </div>
                        <div className={styles.body1_b}>
                            <div className={styles.body1_bcont}>
                                <h1 className={styles.loginword}>LOGIN</h1>
                                <div className={styles.linya}></div>
                                <p>Sign in your account to take photos with your camera and save it to our app!
                                </p>
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
                                    <Link href="/ResetPass" className={styles.resetpasswordlink}>Reset Password</Link>
                                    <button type="submit" className={styles.signinbutton}>Login</button>
                                    <button type="submit" onClick={()=> signIn()} className={styles.ssogooglebutton}>Continue with Google</button>
                                    <p> Don’t have an account? <Link href="/Signup" className={styles.links5}>SIGN UP</Link> instead.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
};

export default LoginPage;