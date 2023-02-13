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
        <section className="grid grid-cols-2 gap-6 home-content-section">
          <div className="col-span-2 mb-12 font-serif text-6xl font-medium">
            Featured Work
          </div>
          <Link
            href="/work/zomato-order-tracking-system"
            className="flex flex-col items-center justify-center col-span-2 p-6 bg-center bg-gradient-to-tr from-blue-300 via-cyan-500 to-purple-500 project-card "
          >
            <div className="w-2/3 font-serif text-5xl font-medium text-center text-white ">
              Zomato Order Tracking System
            </div>
            <div className="mt-3 text-4xl font-light text-white">
              A case study
            </div>
          </Link>
          <div className="project-card ">Main content</div>
          <div className="project-card">Main content</div>
        </section>
      </motion.div>
    </div>
  );
}
