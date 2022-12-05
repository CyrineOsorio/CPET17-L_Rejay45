import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
    return ( 
        <div>
            <Head>
                <title> Home: Rejay45 </title> 
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
            </Head> 
            <div className={styles.container}>
                <img src="/images/logo.png" alt="rejay45logo" className={styles.rejay45logo} />
                <div className={styles.menubars}>
                    <div className={styles.container1}>
                        <Link href="#Home" className={styles.links1}>Home</Link>
                        <Link href="#About" className={styles.links2}>About</Link>
                        <Link href="#Services" className={styles.links3}>Services</Link>
                        <Link href="#Contact" className={styles.links4}>Contact</Link>
                        <img src="/images/hamburger.png" alt="hamborgerButton" className={styles.hamborgerButton} />
                    </div>
                    
                </div>
                
            </div>
            <div className={styles.container2}>
                <div className={styles.container2a}>
                    <Link href="#Home" className={styles.links5}>Home</Link>
                    <Link href="#About" className={styles.links6}>About</Link>
                    <Link href="#Services" className={styles.links7}>Services</Link>
                    <Link href="#Contact" className={styles.links8}>Contact</Link>
                </div>
            </div>
        </div>)
        
}