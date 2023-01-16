import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState} from 'react'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'

export default function Home() {

    return (
        <div style={{backgroundColor: '#1B1B1B', height: '100vh'}}>
            <Head>
                <title> Home: Rejay45 </title> 
                <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
            </Head> 
           
            <div>
               <LoginPage/>
            </div>
        </div>)
        
}