import "../styles/globals.css";
import {
  HomeIcon,
  RectangleStackIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";

export default function RootLayout({ children }) {
  return (
    <html>
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
