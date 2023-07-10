import Head from 'next/head';
import '../styles/tailwind.css';
import '../styles/slick.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.tailwindcss.com"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-slick/0.29.0/react-slick.min.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
