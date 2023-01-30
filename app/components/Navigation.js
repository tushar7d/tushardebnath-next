"use client";
import Link from "next/link";
import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

export default Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="font-serif text-3xl font-medium ">T</div>
      <div className="flex flex-col space-y-3 ">
        <Link href="/">
          <div className="w-[48px] h-[48px] p-2 bg-blue-50 rounded-xl flex   items-center  justify-center">
            <HomeIcon className="w-6 h-6 space-y-6 text-blue-600" />
          </div>
        </Link>
        <Link href="/blog">
          <div className="w-[48px] h-[48px] p-2 bg-blue-50 rounded-xl flex   items-center  justify-center">
            <RectangleStackIcon className="w-6 h-6 space-y-6 text-blue-600" />
          </div>
        </Link>
        <Link href="/blog">
          <div className="w-[48px] h-[48px] p-2 bg-blue-50 rounded-xl flex   items-center  justify-center">
            <BookOpenIcon className="w-6 h-6 space-y-6 text-blue-600" />
          </div>
        </Link>
      </div>
      <div className="space-y-6 text-gray-800">
        <AiFillLinkedin className="w-6 h-6 " />
        <FiFigma className="w-6 h-6 " />
        <AiFillGithub className="w-6 h-6 " />
      </div>
    </nav>
  );
};
