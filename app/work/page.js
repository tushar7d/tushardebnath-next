"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="home-content-container">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 200, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <section className=" max-w-[1200px] mx-auto mt-24 px-6">
          <div className=" mb-12 font-serif text-6xl font-medium">
            Featured
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="project-card bg-red-50 ">Revolut India launch</div>
            <div className="project-card bg-red-50 ">Revolut Snap</div>
            <div className="project-card bg-red-50 ">Revolut APAC</div>
           
          </div>
          <div className="my-12 mt-16 font-serif text-6xl font-medium">
            Case studies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           
          <div className="project-card bg-red-50 ">Zomato order tracker</div>
            <div className="project-card bg-red-50 ">Zomato Market</div>
            <div className="project-card bg-red-50 ">Expedia car rental</div>
          </div>
          <div className="my-12 mt-16 font-serif text-6xl font-medium">
            Side projects
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="project-card bg-red-50 ">Expedia design ops</div>
            <div className="project-card bg-red-50 ">Figma comunity plugins</div>
            <div className="project-card bg-red-50 ">Figma course</div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
