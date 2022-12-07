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
                <Navbar/>
            </div>
            <div className={styles.body}>
                <div className={styles.containerServices}>
                    <div className={styles.labelbox}>
                        <div className={styles.label}>
                            <h1>What We <span style={{color:'#1B1B1B'}}>DO.</span></h1>
                            <div className={styles.linya}></div>
                          
                        </div>
                    </div>
                    <div className={styles.contleft}>
                        <div className={styles.pic1}>
                            <img src="/images/11.png" alt="" className={styles.img1} />
                            <h3>Digital Marketing</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/12.png" alt="" className={styles.img1} />
                            <h3>Brand Labeling</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/13.png" alt="" className={styles.img1} />
                            <h3>Web Development</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <img src="/images/14.png" alt="" className={styles.img1} />
                            <h3>UI/UX Designing</h3> 
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>)
        
}