import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";

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
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { MdWork } from "@react-icons/all-files/md/MdWork";

const LinkIn = (props) => {
  const router = useRouter();
  return (
    <Link href={props.href}>
      <div
        className={
          router.asPath.startsWith(props.href) ? "link link-selected" : "link"
        }
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

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="sidebar flex-shrink-0">
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

        <LinkIn href="/work" name="Work" icon={<MdWork size={16} />} />

        <LinkIn href="/writing" name="Writing" icon={<FaPenNib size={16} />} />

        <LinkIn href="/resume" name="Resume" icon={<FaFile size={16} />} />

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
  );
};

const HNavigation = () => {
  const router = useRouter();
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="p-2 bg-white shadow-sm w-screen">
      <Popover.Button ref={setReferenceElement}>
        <HiMenu size={32} />
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className="m-2"
      >
        {({ close }) => (
          <div className=" bg-white  rounded-xl shadow-lg border  p-2">
            <Link href="/">
              <div
                className={
                  router.asPath === "/" ? "link link-selected" : "link"
                }
                onClick={close}
              >
                <div className="link-icon">
                  <FaHome size={16} />
                </div>
                <div className="link-tag">Home</div>
              </div>
            </Link>
            <div onClick={close}>
              <LinkIn href="/work" name="Work" icon={<MdWork size={16} />} />
            </div>
            <div onClick={close}>
              <LinkIn
                href="/writing"
                name="Writing"
                icon={<FaPenNib size={16} />}
              />
            </div>
            <div onClick={close}>
              <LinkIn
                href="/figmaplugin"
                name="Figma Plugins"
                icon={<FaFigma size={16} />}
              />
            </div>
            <div onClick={close}>
              <LinkIn
                href="/design-bites"
                name="Design Bites"
                icon={<FaCookieBite size={16} />}
              />
            </div>
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
        )}
      </Popover.Panel>
    </Popover>
  );
};

const Layout = (props) => {
  return (
    <div className="md:flex md:h-screen md:overflow-hidden ">
      <div className="hidden md:block lg:block">
        <Navigation />
      </div>
      <header className="block sticky top-0 z-50  md:hidden">
        <HNavigation />
      </header>
      <div className="relative md:overflow-hidden md:h-screen flex-auto">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
