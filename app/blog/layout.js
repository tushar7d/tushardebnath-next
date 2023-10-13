"use client";
import { usePathname } from "next/navigation";
import CardList from "./CardLayout";


import data from './data'



export default async function RootLayout({ children }) {
  const path = usePathname();

console.log(path)
  return (
    <div className="flex w-screen sm:w-[calc(100vw-80px)] h-screen sticky top-0 overflow-hidden ">
      <div className={`${path.endsWith("/blog")?"block":"hidden md:block"}`}>
      <CardList  list={data}/>
      </div>
      
      <div className="mx-auto">
      <div className={`${path.endsWith("/blog")?"block":"hidden"}`}>
      <div>Back</div>
      </div>
      {children}
      </div>
    </div>
  );
}
