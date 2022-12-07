import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import ServicesPage from '../components/ServicesPage'
import ContactPage from '../components/ContactPage'

export default function Home() {

    return (
        <div style={{backgroundColor: '#1B1B1B', height: '100vh'}}>
            <Head>
                <title> Home: Rejay45 </title> 
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
            </Head> 
           
            <div className={styles.cont}>
                <HomePage/>
            </div>
            {/* <div className={styles.body}>
                <div className={styles.containerabout}>
                    <div className={styles.labelbox}>
                        <div className={styles.label}>
                            <h1>About Us</h1>
                            <div className={styles.linya}></div>
                            <p>Our team of excellent and experts at marketing, web creation, and digital designs are all here to help you with your business.
                            </p>  
                            <h3>Our Team</h3>
                        </div>
                    </div>
                    <div className={styles.contleft}>
                        <div className={styles.pic1}>
                            <img src="/images/8.png" alt="" className={styles.img1} />
                            <h3>Renshi</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/3.png" alt="" className={styles.img1} />
                            <h3>Rey</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/4.png" alt="" className={styles.img1} />
                            <h3>Cyrine</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/7.png" alt="" className={styles.img1} />
                            <h3>Rejay</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/6.png" alt="" className={styles.img1} />
                            <h3>Aspher</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/5.png" alt="" className={styles.img1} />
                            <h3>Mark</h3> 
                        </div>
                    </div>
                    
                </div>
                
            </div> */}
        </div>)
        
}