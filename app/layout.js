import localFont from '@next/font/local';
import "../styles/globals.css";
import Navigation from './components/Navigation';
import { AnalyticsWrapper } from './components/analytics';


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
       <Navigation />
        <main>{children}
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
