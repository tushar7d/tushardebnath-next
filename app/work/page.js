"use client";
import { motion, LayoutGroup } from "framer-motion";

let CardHeader = (props) => {
  return (
    <div className="mt-12 text-center h-[150px]">
      <div className="mb-2 text-xl ">{props.t}</div>
      <div className="font-serif text-3xl font-semibold">{props.b}</div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="home-content-container">
      <div>
        <section className=" max-w-[1200px] mx-auto mt-24 px-6">
          <div className="mb-12 font-serif text-6xl font-medium ">Featured</div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-b from-violet-950 to-indigo-600 overflow-clip group ">
              <CardHeader t="Revolut" b="Expanding to India" />

              <div className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6">
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-t from-fuchsia-700 to-cyan-950 group">
              <CardHeader t="Revolut" b="Building Snap" />
              <div className="bg-[url('/images/snapcov.png')]  w-[500px]  h-full md:h-full ml-24 md:ml-16  mb-4  bg-contain bg-no-repeat group-hover:-translate-x-8 transition ease-out duration-300" />
            </div>

            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-t from-green-500 to-green-900 group hover">
              <CardHeader t="Zomato" b="Order Tracking" />
              <div className="relative w-full h-full ">
                <div>
                  <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-12    top-20  transition ease-out duration-300   " />
                </div>
                <div>
                  <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto   left-0 right-0 group-hover:translate-x-2 top-12  transition ease-out duration-300  " />
                </div>
                <div>
                  <div className="bg-[url('/images/track.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto group-hover:-translate-x-12  left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 mt-24 font-serif text-6xl font-medium">
            Case studies
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-t from-green-400 to-cyan-700 ">
            <CardHeader t="Expedia" b="Car rental experience" />
              <div className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6 group">
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-t from-green-400 to-cyan-700 ">
            <CardHeader t="Zomato" b="Market place" />
              <div className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6 group">
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0  group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-t from-green-400 to-cyan-700 ">
            <CardHeader t="Revolut" b="Asia pacific" />
              <div className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6 group">
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
                </div>
                <div>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-12 mt-16 font-serif text-6xl font-medium">
            Small wins
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="project-card bg-red-50 ">
              Revolut Singapore eGiro
            </div>
            <div className="project-card bg-red-50 ">Revolut Lite App</div>
            <div className="project-card bg-red-50 ">
              Revolut Australi openbanking
            </div>
          </div>

          <div className="my-12 mt-16 font-serif text-6xl font-medium">
            Side projects
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="project-card bg-red-50 ">Expedia design ops</div>
            <div className="project-card bg-red-50 ">
              Figma comunity plugins
            </div>
            <div className="project-card bg-red-50 ">Figma course</div>
          </div>
        </section>
      </div>
    </div>
  );
}
