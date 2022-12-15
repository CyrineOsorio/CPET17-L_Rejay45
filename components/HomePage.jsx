import styles from "./HomePage.module.css"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from "next/image";

const HomePage = () => {
    const [show,setShow]=useState(true)
    return (
        // NAVBAR
        <div>
            <div className={styles.container}>
                <Image src="/images/logo.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
                <div className={styles.menubars}>
                    <div className={styles.container1}>
                        <Link href="http://localhost:3000/Home" className={styles.links1}>HOME</Link>
                        <Link href="http://localhost:3000/About" className={styles.links2}>ABOUT</Link>
                        <Link href="http://localhost:3000/Services" className={styles.links3}>SERVICES</Link>
                        <Link href="http://localhost:3000/Contact" className={styles.links4}>CONTACT</Link>
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

            {/* BODY */}
            <div className={styles.body}>
                <div className={styles.containerhome}>
                    <div className={styles.contleft}>
                        <Image className={styles.image1} src="/images/1.png" alt="" width={1000} height={100} />
                    </div>
                        <div className={styles.labelbox}>
                            <div className={styles.label}>
                                <h2>WE LEAD IN</h2>
                                <h1>Creativity</h1>
                                <div className={styles.linya}></div>
                                <p>as we design your way into Business Prosper based on your marketing strategy, 
                                business needs, and target audience.
                                </p>
                                <div className={styles.button}>  
                                    <button> <a href="https://www.canva.com/design/DAEw_tgTQ0Q/SFzGJ-Ids6t5Xd2FLD3oFg/view?utm_content=DAEw_tgTQ0Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer"> View my CV</a></button>
                                </div>      
                            </div>
                    </div>
                </div>
                
            </div>
        </div>)
};

export default HomePage;