import localFont from '@next/font/local';
import "../styles/globals.css";
import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";


const recoleta = localFont({
  src: [
    {
      path: './fonts/Recoleta-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Recoleta-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Recoleta-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Recoleta-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Recoleta-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Recoleta-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    
   
  ],
  variable:'--font-recoleta',
  weight:['300','400','500','600','700','900']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${recoleta.variable} `}>
      <head />
      <body className="top-container">
        <nav className="nav-container">
          <div className="text-3xl font-bold">TD</div>
          <div className="w-6 h-6 space-y-6 text-blue-600">
            <HomeIcon  />
            <RectangleStackIcon  />
            <BookOpenIcon  />
          </div>
          <div className="space-y-6 text-gray-800">
            <AiFillLinkedin className="w-6 h-6 " />
            <FiFigma className="w-6 h-6 " />
            <AiFillGithub className="w-6 h-6 " />
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
