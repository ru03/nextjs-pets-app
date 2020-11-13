import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '../components';
import '../styles/globals.css';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar />
    <div className="container mx-auto">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  </>
);

export default MyApp
