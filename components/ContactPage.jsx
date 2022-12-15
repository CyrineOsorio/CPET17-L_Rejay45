import styles from "./ContactPage.module.css"
import React, {useState} from 'react'
import Link from 'next/link'

const ContactPage = () => {
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

            {/* body */}
            <div className={styles.body}>
                <div className={styles.containerServices}>
                    <div className={styles.labelbox}>
                        <div className={styles.label}>
                            <h1>Contact Us</h1>
                            <div className={styles.linya}></div>
                          
                        </div>
                    </div>
                    <div className={styles.contleft}>
                        <div className={styles.pic1}>
                            <a href="https://www.facebook.com/osoriocyrine/" target="_blank" rel="noreferrer">
                                <img src="/images/16.png" alt="" className={styles.img1} />
                                <h3>Facebook</h3> 
                            </a>
                        </div>
                        <div className={styles.pic1}>
                            <a href="mailto:cyrine.osorio@gsfe.tupcavite.edu.ph?subject=Project Inquiry&body=We want to have an inquiry about web design" target="_blank" rel="noreferrer">
                                <img src="/images/18.png" alt="" className={styles.img1} />
                                <h3>Gmail</h3> 
                            </a>
                        </div>
                        <div className={styles.pic1}>
                            <a href="https://github.com/CyrineOsorio/CPET17-L_Rejay45.git" target="_blank" rel="noreferrer">
                                <img src="/images/20.png" alt="" className={styles.img1} />
                                <h3>Github</h3> 
                            </a>
                        </div>
                        <div className={styles.pic1}>
                            <a href="https://www.linkedin.com/in/cyrineosorio/" target="_blank" rel="noreferrer">
                                <img src="/images/19.png" alt="" className={styles.img1} />
                                <h3>LinkedIn</h3> 
                            </a>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>)
};

export default ContactPage;