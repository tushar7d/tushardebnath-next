import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaPenNib } from "@react-icons/all-files/fa/FaPenNib";
import { FaFile } from "@react-icons/all-files/fa/FaFile";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { MdWork } from "@react-icons/all-files/md/MdWork";

const Layout = (props) => {
  const router = useRouter()
  return (
    <div className="flex">
      <div className="sidebar">
        <section className="logo">Tushar Debnath</section>
        <div className=" flex flex-col p-4">
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
          <Link href="/work">
            <div className={router.asPath === "/work" ? "link link-selected" : "link"}>
              <div className="link-icon">
                <MdWork size={16} />
              </div>
              <div className="link-tag">Work</div>
            </div>
          </Link>
          <Link href="/writing">
            <div className={router.asPath === "/writing" ? "link link-selected" : "link"}>
              <div className="link-icon">
                <FaPenNib size={16} />
              </div>
              <div className="link-tag">Writing</div>
            </div>
          </Link>
          <Link href="/resume">
            <div className={router.asPath === "/resume" ? "link link-selected" : "link"}>
              <div className="link-icon">
                <FaFile size={16} />
              </div>
              <div className="link-tag">Resume</div>
            </div>
          </Link>

          <div className="sidebar-label">Side Projects</div>
          <Link href="/figmaplugin">
            <div className={router.asPath === "/figmaplugin" ? "link link-selected" : "link"}>
              <div className="link-icon">
                <FaFigma size={16} />
              </div>
              <div className="link-tag">Figma Plugins</div>
            </div>
          </Link>
          <div className="sidebar-label">Find me</div>
          <Link href="https://www.linkedin.com/in/tushardebnath/">
            <a target="_blank">
              <div className="link external">
                <div className="group">
                  <div className="link-icon">
                    <FaLinkedin size={16} />
                  </div>
                  <div className="link-tag">LinkedIn</div>
                </div>
                <div>
                  <div className="link-icon-sm">
                    <FaExternalLinkAlt size={10} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://www.figma.com/@tushar">
            <a target="_blank">
              <div className="link external">
                <div className="group">
                  <div className="link-icon">
                    <FaFigma size={16} />
                  </div>
                  <div className="link-tag">Figma</div>
                </div>
                <div>
                  <div className="link-icon-sm">
                    <FaExternalLinkAlt size={10} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://dribbble.com/tushardebnath">
            <a target="_blank">
              <div className="link external">
                <div className="group">
                  <div className="link-icon">
                    <FaDribbble size={16} />
                  </div>
                  <div className="link-tag">Dribbble</div>
                </div>
                <div>
                  <div className="link-icon-sm">
                    <FaExternalLinkAlt size={10} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="https://github.com/tushar7d">
            <a target="_blank">
              <div className="link external">
                <div className="group">
                  <div className="link-icon">
                    <FaGithub size={16} />
                  </div>
                  <div className="link-tag">Github</div>
                </div>
                <div>
                  <div className="link-icon-sm">
                    <FaExternalLinkAlt size={10} />
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
