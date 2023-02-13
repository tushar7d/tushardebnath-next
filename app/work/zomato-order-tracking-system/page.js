"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <div className="pt-0 home-content-container">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="h-[80vh] bg-blue-50">Cover</div>
        <div className="h-[20vh] p-12 flex justify-between">
          <div>Hello</div>
          <div>Hello</div>
          
        </div>
      </motion.div>
    </div>
  );
}
