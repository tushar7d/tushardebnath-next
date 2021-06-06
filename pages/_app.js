import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      <div className="page-container hp-page-mod">
      <Component {...pageProps} />

      </div>
      
    </ThemeProvider>
  );
}

export default MyApp;
