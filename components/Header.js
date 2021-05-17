import { useTheme } from "next-themes";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Header(props) {
  let MenuIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  let LightSwitchIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    );
  };

  let MyMenu = () => {
    return (
      <Menu as="div" className="relative inline-block text-left sm:hidden ">
        <Menu.Button>
          {" "}
          <MenuIcon />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white  dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item as="div" className="p-4 dark:text-white">
              <Link href="/">Home</Link>
            </Menu.Item>
            
            <Menu.Item as="div" className="p-4 dark:text-white">
              <Link href="about">About</Link>
            </Menu.Item>
            <Menu.Item as="div" className="p-4 dark:text-white">
              <Link href="work">Work</Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  const { theme, setTheme } = useTheme();

  return (
    <div className=" sticky top-0 bg-white dark:bg-page-black  border-b border-solid dark:border-transparent">
      <div className=" flex justify-between items-center max-w-prose mx-auto">
        <div className="flex pl-2 md:pl-0">
         {/* <MyMenu/> */ }
          <h3 className="text-l hidden sm:block   ml-4 dark:text-white">
            <Link href="/">Home</Link>
          </h3>
          
        </div>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="p-3 h-12 w-12 order-2 md:order-3 dark:text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <LightSwitchIcon />
        </button>
      </div>
    </div>
  );
}
