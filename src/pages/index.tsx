import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Cookies from 'cookies'

import { CountdownProvider } from '../hooks/useCountdown'

import { Countdown } from '../components/Countdown'
import { Footer } from '../components/Footer'

import { Container, CountdownContainer } from '../styles/home'

interface HomeProps {
  time: number
}

export default function Home({ time }: HomeProps) {

  return (
    <>
      <Head>
        <title>Launch countdown timer</title>
      </Head>

      <Container>
        <CountdownProvider initialTime={time ?? 60 * 60 * 336}>
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res)
  const timeStoraged = cookies.get('@CountdownApp:countdown')

  return {
    props: { time: timeStoraged }
  }
}
