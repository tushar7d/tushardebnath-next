import { useRouter } from "next/router";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaCookieBite } from "@react-icons/all-files/fa/FaCookieBite";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaPenNib } from "@react-icons/all-files/fa/FaPenNib";

import { HiMenu } from "@react-icons/all-files/hi/HiMenu";

import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { MdWork } from "@react-icons/all-files/md/MdWork";

import LinkIn from "./LinkIn";
import LinkOut from "./LinkOut";
import Link from "next/link";

const HNavigation = () => {
  const router = useRouter();
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="p-2 flex align-middle bg-white shadow-sm w-screen">
      <Popover.Button ref={setReferenceElement}>
        <HiMenu size={32} />
      </Popover.Button>
      <div className=" pt-1 ml-4 font-medium capitalize ">
        {router.asPath.slice(1).split("/").join(": ")}
      </div>

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
              <LinkIn
                href="/projects"
                name="Projects"
                icon={<MdWork size={16} />}
              />
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

export default HNavigation;
