import Head from 'next/head'

import { CountdownProvider } from '../hooks/useCountdown'

import { Countdown } from '../components/Countdown'
import { Footer } from '../components/Footer'

import { Container, CountdownContainer } from '../styles/home'

export default function Home() {

  return (
    <>
      <Head>
        <title>Launch countdown timer</title>
      </Head>

      <Container>
        <CountdownProvider>
          <CountdownContainer>
            <h1>We're launching soon</h1>

            <Countdown />
          </CountdownContainer>
        </CountdownProvider>

        <Footer />
      </Container>
    </>
  )
}
