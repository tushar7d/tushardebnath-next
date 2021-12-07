import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaCookieBite } from "@react-icons/all-files/fa/FaCookieBite";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaPenNib } from "@react-icons/all-files/fa/FaPenNib";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { MdWork } from "@react-icons/all-files/md/MdWork";

const LinkIn = (props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <div
        className={router.asPath === props.href ? "link link-selected" : "link"}
      >
        <div className="link-icon">{props.icon}</div>
        <div className="link-tag">{props.name}</div>
      </div>
    </Link>
  );
};

const LinkOut = (props) => {
  return (
    <Link href={props.href}>
      <a target="_blank">
        <div className="link external">
          <div className="group">
            <div className="link-icon">{props.icon}</div>
            <div className="link-tag">{props.name}</div>
          </div>
          <div>
            <div className="link-icon-sm">
              <FaExternalLinkAlt size={10} />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const Layout = (props) => {

  return (
    <div className="flex">
      <div className="sidebar flex-shrink-0">
        <section className="logo">Tushar Debnath</section>
        <div className=" flex flex-col p-4">
          <LinkIn
            href="/"
            name="Home"
            icon={<FaHome size={16} />}
          />

          <LinkIn 
            href="/work"
            name="Work"
            icon={<MdWork size={16} />}
          />
          

          <LinkIn
            href="/writing"
            name="Writing"
            icon={<FaPenNib size={16} />}
          />
          
          <LinkIn
            href="/resume"
            name="Resume"
            icon={<FaFile size={16} />}
          />
          

          <div className="sidebar-label">Side Projects</div>

          <LinkIn
            href="/figmaplugin"
            name="Figma Plugins"
            icon={<FaFigma size={16} />}
          />
          <LinkIn
            href="/design-bites"
            name="Design Bites"
            icon={<FaCookieBite size={16} />}
          />

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
      {props.children}
    </div>
  );
};

export default Layout;
