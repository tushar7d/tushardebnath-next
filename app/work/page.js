"use client";
import { motion } from "framer-motion";
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
          <div className="col-span-2 p-6 bg-center bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-300 project-card" >
            <div>
            <div className="mt-32 mb-2 text-xl font-light text-white">
              CASE STUDY
            </div>
            <div className="w-4/6 font-serif text-5xl font-medium text-white rounded-l-xl">
             Designing the Zomato Order Tracking System
            </div>

            </div>
         
        
             
            
          </div>
          <div className="project-card ">Main content</div>
          <div className="project-card">Main content</div>
        </section>
      </motion.div>
    </div>
  );
}
