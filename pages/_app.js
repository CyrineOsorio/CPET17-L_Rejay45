import '../styles/globals.css'
import { Roboto } from '@next/font/google'
import {SessionProvider} from 'next-auth/react'

const roboto = Roboto({
        weight: [
            '100',
            '300',
            '400',
            '700'
        ]
    }

)

function MyApp({ Component, pageProps, session }) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps } />
        </SessionProvider>
    )
}

export default MyApp