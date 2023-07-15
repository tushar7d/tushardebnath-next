"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <div className="home-content-container">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        
        <div className="w-full px-3 mx-auto mt-[25vh] mb-3 md:mb-8 font-serif text-5xl sm:text-6xl font-medium text-center md:text-8xl">
          Hello Everyone!
        </div>

        <p className="w-full mx-auto mb-12 font-serif text-2xl text-center sm:text-3xl md:text-5xl">
          I am <em className="text-orange-400 ">Tushar Debnath,</em> product
          designer <br className="hidden lg:inline" /> and developer from New
          Delhi.
        </p>
        

   
      </motion.div>
    </div>
  );
}
