import styles from "./Navbar.module.css"
import React, {useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [show,setShow]=useState(true)
    return (
        <div>
            <div className={styles.container}>
                <img src="/images/logo.png" alt="rejay45logo" className={styles.rejay45logo} />
                <div className={styles.menubars}>
                    <div className={styles.container1}>
                        <Link href="#Home" className={styles.links1}>HOME</Link>
                        <Link href="#About" className={styles.links2}>ABOUT</Link>
                        <Link href="#Services" className={styles.links3}>SERVICES</Link>
                        <Link href="#Contact" className={styles.links4}>CONTACT</Link>
                        <button className={styles.button1} onClick={()=>setShow(!show)}><img src="/images/hamburger.png" alt="hamborgerButton" className={styles.hamborgerButton} /></button>
                    </div>
                    
                </div>
                
            </div>
            {show?<div className={styles.container2}>
                <div className={styles.container2a}>
                    <Link href="#Home" className={styles.links5}>HOME</Link>
                    <Link href="#About" className={styles.links6}>ABOUT</Link>
                    <Link href="#Services" className={styles.links7}>SERVICES</Link>
                    <Link href="#Contact" className={styles.links8}>CONTACT</Link>
                </div>
            </div>:null}
        </div>)
};

export default Navbar;