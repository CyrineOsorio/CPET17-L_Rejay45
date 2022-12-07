import styles from "./AboutPage.module.css"
import React, {useState} from 'react'
import Link from 'next/link'

const AboutPage = () => {
    const [show,setShow]=useState(true)
    return (
        <div>
            {/* navbar */}
            <div className={styles.container}>
                <img src="/images/logo.png" alt="rejay45logo" className={styles.rejay45logo} />
                <div className={styles.menubars}>
                    <div className={styles.container1}>
                        <Link href="http://localhost:3000/Home" className={styles.links1}>HOME</Link>
                        <Link href="http://localhost:3000/About" className={styles.links2}>ABOUT</Link>
                        <Link href="http://localhost:3000/Services" className={styles.links3}>SERVICES</Link>
                        <Link href="http://localhost:3000/Contact" className={styles.links4}>CONTACT</Link>
                        <button className={styles.button1} onClick={()=>setShow(!show)}><img src="/images/hamburger.png" alt="hamborgerButton" className={styles.hamborgerButton} /></button>
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

            {/* body*/}
            <div className={styles.body}>
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
                
            </div>
        </div>)
};

export default AboutPage;