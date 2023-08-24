"use client";
import { motion, LayoutGroup } from "framer-motion";
import { useSpring, animated } from '@react-spring/web'
import Link from "next/link";

export default function Page() {


  
  return (
    <div className="home-content-container">


      <div
        
      >
        <section className=" max-w-[1200px] mx-auto mt-24 px-6">
          <div className="mb-12 font-serif text-6xl font-medium ">Featured</div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
             
              className="flex flex-col justify-between p-0 text-white cursor-pointer project-card bg-gradient-to-b from-violet-950 to-indigo-600 overflow-clip group "
            >
              <div className="mt-12 text-center h-[150px]">
                <div className="mb-2 text-xl ">Revolut</div>
                <div className="font-serif text-3xl font-semibold">
                  Expanding to India
                </div>
              </div>

              <div
                
                className="relative w-full h-full transition ease-in-out group-hover:-translate-y-6"
              >
                <div >
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0   group-hover:translate-x-8 right-0 top-12 group-hover:rotate-6 transition ease-out duration-300   " />
                </div>
                <div >
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute m-auto left-0 right-0 group-hover:-translate-x-8 top-12 group-hover:-rotate-6 transition ease-out duration-300  " />
                </div>
                <div >
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  m-auto left-0 right-0 top-4 transition ease-out duration-300" />
                </div>
              </div>
            </div>

            <div className="project-card bg-gradient-to-t from-fuchsia-700 to-cyan-950 ">
              Revolut Snap
            </div>
            <div className="bg-indigo-500 project-card ">Revolut APAC</div>
          </div>
          <div className="my-12 mt-16 font-serif text-6xl font-medium">
            Case studies
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="project-card bg-red-50 ">Zomato order tracker</div>
            <div className="project-card bg-red-50 ">Zomato Market</div>
            <div className="project-card bg-red-50 ">Expedia car rental</div>
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
