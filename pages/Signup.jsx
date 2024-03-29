import styles from "../components/SignupPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import axios from "axios";

// CommonJS
const Swal = require('sweetalert2')

const SignupPage = () => {

     // Handles the submit event on form submit.
  const SubmitForm = async (event) => {

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
     // Get data from the form.

    const username = event.target.username.value
    const password = event.target.password.value
    const confirm_password = event.target.confirm_password.value

    if ( username == null || username == '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Enter a username!",
      });
      return
    }

    if ( password == null || password == '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Enter a password!",
      });
      return
    }

    if ( password != confirm_password ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Password dosen't match!",
      });
      return
    }

    // Get data from the form.
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'http://192.168.1.12:7000/register'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
    console.log(response)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result.error_code)
    if ( result.error_code == 'ER_DUP_ENTRY' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Username has already existed",
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Great!',
        timer: 10000,
        text: `Sucessfully created the account ${result.username}. You will be redirected to login page.`,
      });
      window.location.replace("http://192.168.1.7:3000/Login")
      
    }
  }
    return ( 
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                <div className={styles.body1_b}>
                        <div className={styles.body1_bcont}>
                            <h1 className={styles.loginword}>Sign Up</h1>
                            <div className={styles.linya}></div>
                            <p>Create an account to try our camera app for free!</p>
                            <form method="post" onSubmit={SubmitForm}>
                                <input name="csrfToken" type="hidden"/>
                                <label>
                                    Username
                                    <input name="username" id="username" type="text"/>
                                </label>
                                <label>
                                    Password
                                    <input name="password" id="password" type="password"/>
                                </label>
                                <label>
                                    Confirm Password
                                    <input name="confirm_password" id="confirm_password" type="password"/>
                                </label>
                                <button type="submit" className={styles.signinbutton}>Register</button>
                                <p>  Already have an account? <Link href="/Login" className={styles.links5}>LOGIN </Link> here.</p>
                            </form>
                        </div>
                    </div>
                    <div className={styles.body1_a}>
                        <Image src="/images/signupcam.png" alt="logingal" className={styles.logingal} width={1000} height={100} />
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default SignupPage;


export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://192.168.1.12:7000/signup');
  
    // Get the json response
    const data = await res.json();
    
    // If user was not logged in, go to login page
    if ( data.is_logged_in == true ) {
      return {
        redirect: {
          destination: "/MainLanding",
          permanent: false,
        },
        props: {},
      };
    }
    // If user was logged in, redirect to this current page
    return { props: {} }
  }