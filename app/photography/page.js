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
            Photography
          </div>
          
        </section>
      </motion.div>
    </div>
  );
}
