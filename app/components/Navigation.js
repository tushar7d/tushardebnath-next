"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Tooltip } from "flowbite-react";
import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";


let Bttn = (props) => {
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
    <nav className="z-50 nav-container ">
     
      
        <Bttn link="/" name="Home">
          <HomeIcon className="w-6 h-6 " />
        </Bttn>

        <Bttn link="/work" name="Work">
          <RectangleStackIcon className="w-6 h-6" />
        </Bttn>

        <Bttn link="/blog" name="Blog">
          <BookOpenIcon className="w-6 h-6 " />
        </Bttn>
      
      
    </nav>
  );
};

export default Navigation;
