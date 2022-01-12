import { useRouter } from "next/router";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaPenNib } from "@react-icons/all-files/fa/FaPenNib";

import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { MdWork } from "@react-icons/all-files/md/MdWork";
import LinkIn from "./LinkIn";
import LinkOut from "./LinkOut";
import Link from "next/link";



const Navigation = () => {
    const router = useRouter();
    return (
      <div className="flex-shrink-0 sidebar scrollbar-hide">
        <section className="logo">TUSHAR DEBNATH</section>
        <div className="flex flex-col p-4 ">
          <Link href="/">
            <div
              className={router.asPath === "/" ? "link link-selected" : "link"}
            >
              <div className="link-icon">
                <FaHome size={16} />
              </div>
              <div className="link-tag">Home</div>
            </div>
          </Link>
  
          <LinkIn href="/projects" name="Projects" icon={<MdWork size={16} />} />
  
          <LinkIn href="/writing" name="Writing" icon={<FaPenNib size={16} />} />
  
          
  
          
  
          <div className="sidebar-label">Find me</div>
  
          <LinkOut
            href="https://www.linkedin.com/in/tushardebnath/"
            name="LinkedIn"
            icon={<FaLinkedin size={16} />}
          />
          <LinkOut
            href="https://www.figma.com/@tushar"
            name="Figma"
            icon={<FaFigma size={16} />}
          />
          <LinkOut
            href="https://dribbble.com/tushardebnath"
            name="Dribbble"
            icon={<FaDribbble size={16} />}
          />
          <LinkOut
            href="https://github.com/tushar7d"
            name="GitHub"
            icon={<FaGithub size={16} />}
          />
        </div>
      </div>
    );
  };


  export default Navigation;