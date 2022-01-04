import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from 'next-themes'

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
 
  return (
    <ThemeProvider attribute="class">
    <div className=" md:overflow-hidden md:h-screen md:w-screen">
      <Head>
        <title>Tushar</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    </ThemeProvider>
  );
}





export default MyApp;
