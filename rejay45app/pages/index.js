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
                <div className="menubars">
                    <Link href="" className={styles.links}>Home</Link>
                    <Link href="" className={styles.links}>About</Link>
                    <Link href="" className={styles.links}>Services</Link>
                    <Link href="" className={styles.links}>Contact</Link>
                </div>
            </div>
        </div>)
        
}