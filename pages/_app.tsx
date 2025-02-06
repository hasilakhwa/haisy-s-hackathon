import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { initErrorMonitoring } from '../utils/errorMonitoring'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initErrorMonitoring()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
