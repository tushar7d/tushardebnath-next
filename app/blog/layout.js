"use client";
import { usePathname } from "next/navigation";
import CardList from "./CardLayout";
import Link from "next/link";

import data from "./data";

export default async function RootLayout({ children }) {
  const path = usePathname();

  console.log(path);
  return (
    <div className="flex w-screen md:w-[calc(100vw-80px)] h-screen sticky top-0 overflow-hidden ">
      <div
        className={`${path.endsWith("/blog") ? "block" : "hidden md:block"}`}
      >
        <CardList list={data} />
      </div>

      <div className="mx-auto  overflow-scroll scrollbar-hide  ">
        <div
          className={`  cursor-pointer fixed bg-gray-50 p-4  w-full ${
            path.endsWith("/blog") ? "hidden" : "block md:hidden "
          }`}
        >
          <Link
            href={"/blog"}
            className="p-2 rounded-xl hover:bg-gray-300 bg-gray-300 sm:bg-gray-50"
          >
            Back{" "}
          </Link>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
