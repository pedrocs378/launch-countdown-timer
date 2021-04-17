import { AppProps } from "next/dist/next-server/lib/router/router"

import { GlobalStyles } from "../styles/global"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyles />
    </>
  )
}

export default MyApp
