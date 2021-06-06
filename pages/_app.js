import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";

const Wrapper = (props) => <main className="prose max-w-prose" {...props} />;
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Header />
      <div className="page-container">
        <MDXProvider components={{ wrapper: Wrapper }}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
