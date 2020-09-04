import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <main>
            <h1>Hello World</h1>
        </main>
      </Container>
    </div>
  )
}

export default Home
