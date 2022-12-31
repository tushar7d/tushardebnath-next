import "../styles/globals.css";

import { Open_Sans } from "@next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${opensans.variable} font-sans`} >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
