import "../styles/globals.css";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
