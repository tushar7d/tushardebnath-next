"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Tooltip } from "flowbite-react";
import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub, AiOutlineCamera, AiOutlineUser } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

let Bttn = (props) => {
  const path = useSelectedLayoutSegment();

  return (
    
    <Link href={props.link}>
      <Tooltip content={props.name} placement="right">
      <div
        className={` hover:scale-110 transition-transform duration-200 ease-out w-[48px] h-[48px] p-2  rounded-xl flex   items-center  justify-center ${
          path == (props.link == "/" ? null : props.link.substring(1))
            ? "text-white bg-black"
            : "text-black bg-gray-50"
        } `}
      >
        {props.children}
      </div>
      </Tooltip>
    </Link>
   
  );
};


let Bttnsm = (props) => {
  const path = useSelectedLayoutSegment();

  return (
    
    <Link href={props.link}>
      <Tooltip content={props.name} placement="top">
      <div
        className={` hover:scale-110 transition-transform duration-200 ease-out w-[48px] h-[48px] p-2  rounded-full flex   items-center  justify-center ${
          path == (props.link == "/" ? null : props.link.substring(1))
            ? "text-white bg-black"
            : "text-black bg-white"
        } `}
      >
        {props.children}
      </div>
      </Tooltip>
    </Link>
   
  );
};
const Navigation = () => {
  return (
    <>
    <nav className="z-50 nav-container  hidden  md:flex">
      <div className="font-serif text-4xl font-medium ">T</div>
      <div className="flex flex-col space-y-3 ">
        <Bttn link="/" name="Home">
          <HomeIcon className="w-6 h-6 " />
        </Bttn>

        

        <Bttn link="/blog" name="Blog">
          <BookOpenIcon className="w-6 h-6 " />
        </Bttn>
       
        <Bttn link="/about" name="About">
          <AiOutlineUser className="w-6 h-6 " />
        </Bttn>
      </div>
      <div className="space-y-6 text-gray-800 pb-4">
        <AiFillLinkedin className="w-6 h-6 " />
        <FiFigma className="w-6 h-6 " />
        <AiFillGithub className="w-6 h-6 " />
      </div>
    </nav>
    <nav className=" z-50  border space-x-4 p-4 w-fit mx-auto mb-12 bg-white rounded-full fixed bottom-0  left-0 right-0  justify-center  flex  md:hidden">
      
      
        <Bttnsm link="/" name="Home">
          <HomeIcon className="w-6 h-6 " />
        </Bttnsm>

        
        <Bttnsm link="/blog" name="Blog">
          <BookOpenIcon className="w-6 h-6 " />
        </Bttnsm>
        
        <Bttnsm link="/about" name="About">
          <AiOutlineUser className="w-6 h-6 " />
        </Bttnsm>
      
      
    </nav>
    </>
  );
};

export default Navigation;
