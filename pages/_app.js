import "../styles/globals.css";

import { Open_Sans } from "@next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${opensans.variable} font-sans pb-24`}>
      <div className="fixed inset-x-0 bottom-0 mx-auto mb-8 w-fit md:relative md:mt-4 md:w-full md:max-w-[1100px] md:mb-4 px-3">
        <div className="flex items-center content-center justify-between p-3 mx-auto mt-0 space-x-4 rounded-full shadow md:p-3 sm:col-span-2 md:col-span-3 lg:col-span-4 card min-h-fit md:rounded-xl md:shadow-none">
          <img src="./td.png" className="w-8" />
          <div>
            <ul className="flex space-x-4 ">
              
              <li className="px-2 cursor-pointer hover:text-yellow-500">Work</li>
              <li className="px-2 cursor-pointer hover:text-yellow-500">Blog</li>
              <li className="px-2 cursor-pointer hover:text-yellow-500">About</li>
            </ul>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
