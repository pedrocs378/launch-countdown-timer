import { AppProps } from "next/dist/next-server/lib/router/router"

import { CountdownProvider } from '../hooks/useCountdown'

import { GlobalStyles } from "../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountdownProvider>
      <Component {...pageProps} />

      <GlobalStyles />
    </CountdownProvider>
  )
}

export default MyApp
