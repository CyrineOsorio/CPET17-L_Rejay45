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
                        <Link href="#Home" className={styles.links1}>Home</Link>
                        <Link href="#About" className={styles.links2}>About</Link>
                        <Link href="#Services" className={styles.links3}>Services</Link>
                        <Link href="#Contact" className={styles.links4}>Contact</Link>
                        <button className={styles.button1} onClick={()=>setShow(!show)}><img src="/images/hamburger.png" alt="hamborgerButton" className={styles.hamborgerButton} /></button>
                    </div>
                    
                </div>
                
            </div>
            {show?<div className={styles.container2}>
                <div className={styles.container2a}>
                    <Link href="#Home" className={styles.links5}>Home</Link>
                    <Link href="#About" className={styles.links6}>About</Link>
                    <Link href="#Services" className={styles.links7}>Services</Link>
                    <Link href="#Contact" className={styles.links8}>Contact</Link>
                </div>
            </div>:null}
        </div>)
};

export default Navbar;