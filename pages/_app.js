import Head from 'next/head';
import '../styles/globals.scss';
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        <Header />
        <Container className="mt-5">
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Container>
      </main>
    </>
  )
}
