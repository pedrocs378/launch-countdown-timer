import Head from 'next/head'

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
        <CountdownContainer>
          <h1>We're launching soon</h1>

          <Countdown />
        </CountdownContainer>

        <Footer />
      </Container>
    </>
  )
}
