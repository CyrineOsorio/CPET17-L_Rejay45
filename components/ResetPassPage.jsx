import styles from "./ResetPassPage.module.css"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const ResetPassPage = () => {
    // Handles the submit event on form submit.
  const ResetSubmit = async (event) => {

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
     // Get data from the form.

    const old_password = event.target.old_password.value
    const new_password = event.target.new_password.value
    const confirm_password = event.target.confirm_password.value

    if ( old_password == null || old_password == '' ) {
      alert("Enter your old password.");
      return
    }

    if ( new_password == null || new_password == '' ) {
        alert("Enter your new password.");
        return
    }

    if ( new_password != confirm_password ) {
      alert("Password don't match!");
      return
    }

    // Get data from the form.
    const data = {
        old_password: event.target.old_password.value,
        new_password: event.target.new_password.value
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'http://localhost:7000/resetpassword'

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

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()

    if ( result.error_code == 'ER_DUP_ENTRY' ) {
      alert(result.message)
    } else {
      alert(`Resetting password successful.`)
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
                            <h1 className={styles.loginword}>Reset Password</h1>
                            <div className={styles.linya}></div>
                            <form method="post" onSubmit={ResetSubmit}>
                                <input name="csrfToken" type="hidden"/>
                                <br />
                                <label>
                                    Old Password
                                    <input name="old_password" id="old_password" type="password" />
                                </label>
                                <label>
                                    New Password
                                    <input name="new_password" id="new_password" type="password" />
                                </label>
                                <label>
                                    Confirm Password
                                    <input name="confirm_password" id="confirm_password" type="password" />
                                </label>
                                <button type="submit" className={styles.signinbutton}>Change Password</button>
                                <p> Go back to <Link href="/MainLanding" className={styles.links5}>Main</Link> page.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResetPassPage;


export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://localhost:7000/reset');

    // Get the json response
    const data = await res.json();

    // If user was not logged in, go to login page
    if ( data.is_logged_in == false ) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
            props: {},
            };
        }
    // If user was logged in, redirect to this current page
    return { props: {} }
}