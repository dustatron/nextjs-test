import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bitz Price</title>
        <link
          rel='stylesheet'
          href='https://bootswatch.com/4/darkly/bootstrap.min.css'
        />
      </Head>
      <Navbar />
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
