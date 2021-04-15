import Head from 'next/head'

import { Footer } from '../components/Footer'

import { Container, CountdownContainer, Countdown } from './home'

export default function Home() {

  return (
    <>
      <Head>
        <title>Launch countdown timer</title>
      </Head>

      <Container>
        <CountdownContainer>
          <h1>We're launching soon</h1>
          <Countdown>
            <div>
              <span>08</span>
              <p>Days</p>
            </div>
            <div>
              <span>23</span>
              <p>Hours</p>
            </div>
            <div>
              <span>55</span>
              <p>Minutes</p>
            </div>
            <div>
              <span>41</span>
              <p>Seconds</p>
            </div>
          </Countdown>
        </CountdownContainer>

        <Footer />
      </Container>
    </>
  )
}
