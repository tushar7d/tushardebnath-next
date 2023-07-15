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
        <section className=" ">
          <div className="w-full px-3 mx-auto mt-[25vh] mb-3 md:mb-8 font-serif text-5xl sm:text-6xl font-medium text-center md:text-8xl">
            Hello Everyone!
          </div>

          <p className="w-full mx-auto mb-12 font-serif text-2xl text-center sm:text-3xl md:text-5xl">
            I am <em className="text-orange-400 ">Tushar Debnath,</em> product
            designer <br className="hidden lg:inline" /> and developer from New
            Delhi.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-12 gap-4 max-w-7xl mx-auto">
            <div className=" p-6 rounded-3xl col-span-1 md:col-span-2 bg-red-100 h-[450px]" >About me </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" >Experience </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" > Featured work</div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" >Fun facts </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" > Tools and Skills</div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" > Writing</div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" > Photography</div>   
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" >Resume </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-100 h-[450px]" > Testimonials</div>
            <div className=" p-6 rounded-3xl col-span-1 md:col-span-2 bg-red-100 h-[450px]" > Interests</div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
