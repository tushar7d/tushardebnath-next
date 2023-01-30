"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

let Bttn = (props) => {
  const path = usePathname();

  return (
    <Link href={props.link}>
      <div
        className={` hover:scale-110 transition-transform duration-200 ease-out w-[48px] h-[48px] p-2  rounded-xl flex   items-center  justify-center ${
          path == props.link
            ? "text-white bg-blue-500"
            : "text-blue-600 bg-blue-50"
        } `}
      >
        {props.children}
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="font-serif text-3xl font-medium ">T</div>
      <div className="flex flex-col space-y-3 ">
        <Bttn link="/">
          <HomeIcon className="w-6 h-6 " />
        </Bttn>

        <Bttn link="/work">
          <RectangleStackIcon className="w-6 h-6" />
        </Bttn>

        <Bttn link="/blog">
          <BookOpenIcon className="w-6 h-6 " />
        </Bttn>
      </div>
      <div className="space-y-6 text-gray-800">
        <AiFillLinkedin className="w-6 h-6 " />
        <FiFigma className="w-6 h-6 " />
        <AiFillGithub className="w-6 h-6 " />
      </div>
    </nav>
  );
};

export default Navigation;
