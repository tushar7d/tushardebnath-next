import "../styles/globals.css";

import { Open_Sans } from "@next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${opensans.variable} font-sans`}  >
      <div className="md:px-3 mt-0  md:mt-2 md:max-w-[1100px] mx-auto sticky top-0  z-50 bg-gray-100  ">
      <div className="flex items-center content-center justify-between p-4 mx-auto mt-0 rounded-none sm:col-span-2 md:col-span-3 lg:col-span-4 card min-h-fit md:rounded-xl backdrop-blur-sm sm:bg-white">
      <img src="./td.png" className="w-8" />
      
      
      </div>
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
