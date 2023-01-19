import styles from "./LoginPage.module.css"
import Link from "next/link"
import Image from "next/image"
import MainLandingPage from "./MainLandingPage"

// CommonJS
const Swal = require('sweetalert2')


const LoginPage = () => {
    // Handles the submit event on form submit.
  const login = async (event) => {

    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
     // Get data from the form.

     const username = event.target.username.value
     const password = event.target.password.value

    if ( password == null || password == '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your password!',
      });
      return
    }

    if ( username == null || username == '' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your username!',
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
    const endpoint = 'http://localhost:7000/login'

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
    console.log(result.message)

    if ( result.message == 'Success' ) {
      window.location.replace("http://localhost:3000/MainLanding")
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.message,
      });
      return
    }
} 
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/rejayselcam.png" alt="rejay45logo" className={styles.rejay45logo} width={1000} height={100} />
            </div>
            <div className={styles.body}>
                <div className={styles.body1}>
                    <div className={styles.body1_a}>
                    <Image src="/images/logingal.png" alt="logingal" className={styles.logingal} width={1000} height={100} />
                    </div>
                    <div className={styles.body1_b}>
                        <div className={styles.body1_bcont}>
                            <h1 className={styles.loginword}>LOGIN</h1>
                            <div className={styles.linya}></div>
                            <p>Sign in your account to take photos with your camera and save it to our app!
                            </p>
                            <form method="post" onSubmit={login}>
                                <input name="csrfToken" type="hidden"/>
                                <label>
                                    Username
                                    <input name="username" id="username" type="text" />
                                </label>
                                <label>
                                    Password
                                    <input name="password" id="password" type="password" />
                                </label>
                                <br />
                                <button type="submit" className={styles.signinbutton}>Login</button>
                                <p> Don’t have an account? <Link href="/Signup" className={styles.links5}>SIGN UP</Link> instead.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default LoginPage;


export async function getStaticProps() {
    // Fetch data from the server
    const res = await fetch('http://localhost:7000/Login');
  
    // Get the json response
    const data = await res.json();
    
    // If user was not logged in, redirect to home page
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