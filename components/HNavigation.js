import { useRouter } from "next/router";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaPenNib } from "@react-icons/all-files/fa/FaPenNib";
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { useState } from "react";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";
import { MdWork } from "@react-icons/all-files/md/MdWork";
import LinkIn from "./LinkIn";
import Link from "next/link";

const HNavigation = () => {
  const router = useRouter();
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Popover className="flex w-screen p-2 space-x-2 bg-white shadow-sm">
      {router.asPath === "/" ? (
        <div className="flex justify-around w-full">
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
          <LinkIn
            href="/projects"
            name="Projects"
            icon={<MdWork size={16} />}
          />
          <LinkIn
            href="/writing"
            name="Writing"
            icon={<FaPenNib size={16} />}
          />
        </div>
      ) : null}

      {router.asPath === "/" ? null : (
        <>
          <Popover.Button ref={setReferenceElement}>
            <HiMenu size={32} />
          </Popover.Button>
          <div className="pt-1 font-medium capitalize ">
            {router.asPath.slice(1).split("/").join(": ")}
          </div>
        </>
      )}

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className="m-2"
      >
        {({ close }) => (
          <div className="p-2 bg-white border shadow-lg rounded-xl">
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
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default HNavigation;
