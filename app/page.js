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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4  md:p-12 gap-4 max-w-7xl mx-auto">
            <div className=" p-6 rounded-3xl col-span-1 md:col-span-2 bg-orange-100 h-[450px]">
              <h3 className="text-6xl font-medium mb-4 mt-12 text-orange-400">
                About me
              </h3>
              <p className="text-xl">
                Product designer and design technologist with 8+ years of
                experience building products loved by millions of people across
                the globe. I am currently working at Revolut as a Senior product
                designer.
              </p>
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              <h3 className="text-8xl font-black text-orange-400">10</h3>
              <p className="text-4xl">
                Plus years of building High Quality products
              </p>
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              {" "}
              Featured work
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              Fun facts{" "}
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              {" "}
              Tools and Skills
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              {" "}
              Writing
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              {" "}
              Photography
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              Resume{" "}
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-100 h-[450px]">
              {" "}
              Testimonials
            </div>
            <div className=" p-6 rounded-3xl col-span-1 md:col-span-2 bg-orange-100 h-[450px]">
              {" "}
              Interests
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
