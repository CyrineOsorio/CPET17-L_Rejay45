import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


function Home({ data }) {
    
    // Render into HTML
    if ( data == null ) {
        return (
            <div className={styles.main}>
                <Head>
                <title>NextJS App: Render Motion Detection</title>
                </Head>

            
                <div className={styles.container}>   
                    <h1>No data records.</h1>
                </div>
            
            </div>
        )
    }
    return (
        <div className={styles.container}>
            
            <Head>
                <title>NextJS App: Render Motion Detection</title>
            </Head>
            
            <main className={styles.main}>

                {data.imgData.map(function(imgData) {
                    // Get the image data
                    let image = imgData['filename']['data'];
    
                    // Convert into blob into string with charset=utf-8
                    let base64Image = Buffer.from(image, 'base64').toString('utf-8');
    
                    // Configure the image tag attribute (src)
                    let imgSrc = "data:image/png;base64," + base64Image;
                    
                    // Get the date time
                    let dt = imgData['datetime'];
                    
                    return (
                        <div className={styles.container}>
                            <p>DateTime Taken: {dt}</p>
                            <img src={imgSrc}/>
                        </div>
                    )
                })}  
                
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