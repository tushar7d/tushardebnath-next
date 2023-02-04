"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
let Card = (props) => {
  const path = usePathname();
 
  return (
    <Link href={props.link}>
    <li className={ `flex p-2 rounded-xl ${path == props.link?"bg-gray-50" :""}`}>
      <div className="min-w-[80px] min-h-[80px] bg-gray-100 rounded-xl" />
      <div className="pl-3 mt-1 text-gray-800">
      
        <h3 className="mb-1 ">{props.h}</h3>
        <p className="p-1 text-xs text-black bg-gray-100 w-fit ">{props.s}</p>
        
      </div>
    </li>
    </Link>
  );
};



export default function RootLayout({ children }) {
  return (
    <div className="flex w-[calc(100vw-80px)]  h-screen sticky top-0 overflow-hidden">
      <div className="w-[360px] min-w-[360px] border-r overflow-y-auto scrollbar-hide">
        <div className="sticky top-0 px-3 py-3 font-serif text-xl font-medium bg-white border-b ">Writing</div>
        <ul className="flex flex-col p-2 space-y-3 ">
          <Card h="Automating our design system migration" s="Automation" link="/blog/one" />
          <Card h="Using Figma shortcuts via a midi keyboard" s="Hacking" link="/blog/two" />
          
         
        </ul>
      </div>
      {children}
    </div>
  );
}
