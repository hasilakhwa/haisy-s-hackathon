import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { initErrorMonitoring } from '../utils/errorMonitoring'
import { captureWebVitals } from '../utils/performance'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initErrorMonitoring()
    captureWebVitals()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
