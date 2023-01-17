import '../styles/globals.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
        weight: [
            '100',
            '300',
            '400',
            '700'
        ]
    }

)

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp