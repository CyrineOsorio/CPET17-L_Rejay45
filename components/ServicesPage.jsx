import styles from "./ServicesPage.module.css"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from "next/image";

const ServicesPage = () => {
    const [show,setShow]=useState(true)
    return (
        <div>
            {/* navbar */}
            <div className={styles.container}>
                <Image src="/images/logo.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                <div className={styles.menubars}>
                    <div className={styles.container1}>
                        <Link href="/Home" className={styles.links1}>HOME</Link>
                        <Link href="/About" className={styles.links2}>ABOUT</Link>
                        <Link href="/Services" className={styles.links3}>SERVICES</Link>
                        <Link href="/Contact" className={styles.links4}>CONTACT</Link>
                        <button className={styles.button1} onClick={()=>setShow(!show)}><Image src="/images/hamburger.png" alt="hamborgerButton" className={styles.hamborgerButton} width={1000} height={100} /></button>
                    </div>
                    
                </div>
                
            </div>
            {show?<div className={styles.container2}>
                <div className={styles.container2a}>
                <Link href="http://localhost:3000/Home" className={styles.links5}>HOME</Link>
                    <Link href="http://localhost:3000/About" className={styles.links6}>ABOUT</Link>
                    <Link href="http://localhost:3000/Services" className={styles.links7}>SERVICES</Link>
                    <Link href="http://localhost:3000/Contact" className={styles.links8}>CONTACT</Link>
                </div>
            </div>:null}

            {/* body */}
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
                            <Image src="/images/11.png" alt="" className={styles.img1} width={1000} height={100} />
                            <h3>Digital Marketing</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <Image src="/images/12.png" alt="" className={styles.img1} width={1000} height={100} />
                            <h3>Brand Labeling</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <Image src="/images/13.png" alt="" className={styles.img1} width={1000} height={100} />
                            <h3>Web Development</h3> 
                        </div>
                        <div className={styles.pic1}>
                            <Image src="/images/14.png" alt="" className={styles.img1} width={1000} height={100} />
                            <h3>UI/UX Designing</h3> 
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>)
};

export default ServicesPage;