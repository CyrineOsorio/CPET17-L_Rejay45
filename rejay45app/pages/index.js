import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useState} from 'react'

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
                <div className={styles.container}>
                    
                </div>
            </div>
        </div>)
        
}