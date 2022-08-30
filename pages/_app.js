import 'nextra-theme-docs/style.css'
import "../styles/globals.css";
import "react-medium-image-zoom/dist/styles.css";


export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}