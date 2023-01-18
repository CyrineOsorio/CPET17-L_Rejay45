import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Home({ data }) {
    // Get the image data
    const image = data.imgData.data;

    // Convert into blob into string with charset=utf-8
    const base64Image = Buffer.from(image, 'base64').toString('utf-8');

    // Configure the image tag attribute (src)
    const imgSrc = "data:image/png;base64," + base64Image;
    
    // Render into HTML
    return (
        <div className={styles.container}>
            
            <Head>
                <title>My First NextJS App</title>
            </Head>
            
            <main className={styles.main}>
                <div className={styles.grid}>
                    <h2>Last Image Display Here:</h2>
                    <img src={imgSrc} />
                </div>
                
            </main>
            
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from the server
    const response = await fetch('http://127.0.0.1:4000/display');

    // Get the json response
    const data = await response.json();
    return {
        props: { data },
    }
 
    
}

export default Home