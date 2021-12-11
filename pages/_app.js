import "../styles/globals.css";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" overflow-hidden h-screen w-screen">
      <Head>
        <title>Tushar</title>
      </Head>
      <Layout>
       <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
