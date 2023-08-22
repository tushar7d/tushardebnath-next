"use client";
import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const list = {
    visible: { y: 100 },
    hidden: { y: 0 },
  };

  const item = {
    visible: { rotate: 0, x: 80,y:5 },
    hidden: { rotate: 0, x: 80,y:5 },
  };

  const itel = {
    visible: { rotate: 0, x: 80, y:40, rotate:0},
    hidden: { rotate: 0, x: 20,y:40, rotate:-6 },
  };
  const iter = {
    visible: { rotate: 0, x: 80,y:40 ,rotate:0},
    hidden: { rotate: 0, x: 140,y:40,rotate:6 },
  };
  return (
    <div className="home-content-container">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <section className=" max-w-[1200px] mx-auto mt-24 px-6">
          <div className="mb-12 font-serif text-6xl font-medium ">Featured</div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-between p-0 text-white project-card bg-gradient-to-b from-violet-950 to-indigo-600 overflow-clip ">
              <div className="mt-12 text-center h-[150px]">
                <div className="mb-2 text-xl ">Revolut</div>
                <div className="font-serif text-3xl font-semibold">
                  Expanding to India
                </div>
              </div>

              <motion.ul
                whileHover="hidden"
                animate="visible"
                variants={list}
                className="static h-full mx-auto w-fit md:ml-3"
              >
                <motion.div variants={itel}>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute   " />
                </motion.div>
                <motion.div variants={iter}>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  " />
                </motion.div>
                <motion.div variants={item}>
                  <div className="bg-[url('/images/inlaunch1.png')] w-[200px] mx-auto h-[500px] bg-contain bg-no-repeat absolute  " />
                </motion.div>
              </motion.ul>
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
      </motion.div>
    </div>
  );
}
