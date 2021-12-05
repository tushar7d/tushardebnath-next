import Link from "next/link";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaFigma} from "@react-icons/all-files/fa/FaFigma";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaDribbble} from"@react-icons/all-files/fa/FaDribbble";
import {MdWork} from"@react-icons/all-files/md/MdWork";

const Layout = (props) => {
  return (
    <div className="flex">
      <div className="sidebar">
        <section className=" text-base w-full font-medium border-b  p-2">Tushar Debnath</section>
        <div className=" flex flex-col p-4">
        
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaHome /></div>
              <div className="link-tag">Home</div>
            </div>
          </Link>
          <Link href="/work">
            <div className="link">
              <div className="link-icon"><MdWork /></div>
              <div className="link-tag">Work</div>
            </div>
          </Link>

          <div className="sidebar-label">Side Projects</div>
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaFigma /></div>
              <div className="link-tag">Figma Plugins</div>
            </div>
          </Link>
          <div className="sidebar-label">Find me</div>
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaLinkedin /></div>
              <div className="link-tag">LinkedIn</div>
            </div>
          </Link>
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaFigma /></div>
              <div className="link-tag">Figma</div>
            </div>
          </Link>
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaDribbble /></div>
              <div className="link-tag">Dribbble</div>
            </div>
          </Link>
          <Link href="/">
            <div className="link">
              <div className="link-icon"><FaGithub /></div>
              <div className="link-tag">Github</div>
            </div>
          </Link>
          

        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
