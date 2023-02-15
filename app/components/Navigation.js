"use client";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
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
    <div>
      
        <div className="fixed flex justify-between w-full px-12 mt-4 ">
          <div className="font-serif text-4xl font-medium ">T</div>
          <div className="flex space-x-6 text-gray-800">
            <AiFillLinkedin className="w-6 h-6 " />
            <FiFigma className="w-6 h-6 " />
            <AiFillGithub className="w-6 h-6 " />
          </div>
        </div>
      
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
    </div>
  );
};

export default Navigation;
