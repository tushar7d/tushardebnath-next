
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
