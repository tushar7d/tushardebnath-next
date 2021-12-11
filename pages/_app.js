import "../styles/globals.css";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" overflow-hidden h-screen w-screen">
      <Head>
        <title>Tushar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Pacifico&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
