"use client";
import { motion } from "framer-motion";
export default function Page() {
  return (
    <div className="home-content-container">
      <motion.div
        animate={{ y: -10 }}
        initial={{ y: 300 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="w-full px-3 mx-auto mt-[25vh] mb-8 font-serif text-5xl font-medium text-center md:text-8xl">
          Hello Everyone!
        </div>
        <p className="mx-auto mb-12 font-serif text-2xl leading-loose text-center md:w-2/4 md:text-5xl ">
                I am <em className="text-orange-400 ">Tushar Debnath</em> a
                product designer, developer, & writer from New Delhi. 
              </p>
            

        <section className="home-content-section ">
         
            
           
          
          <div className="flex items-center justify-between p-6 mb-4 bg-green-100 rounded-2xl ">
            <div>
              <h2 className="mb-2 font-serif text-3xl ">I specialize in</h2>
              <div className="w-3/4 text-xl font-light text-left ">
                working with the product and tech teams to translate ideas into
                compelling products and systems used by millions of people
                around the globe.
              </div>
            </div>

            <img src="./images/td.png" className="w-[180px]" />
          </div>

          <div className="p-6 bg-yellow-100 rounded-2xl h-[250px] mb-4">
            I currently work for Revolut and I have previously worked at
            Expedia, Zomato(Indian Unicorn), MakeMyTrip, Hike and more{" "}
          </div>
          <div className="p-6 bg-green-100 rounded-2xl h-[250px] mb-4">
            I Live in New Delhi with my wife priya
          </div>
          <div className="p-6 bg-blue-100 rounded-2xl h-[250px] mb-4">
            When I am not working
          </div>
        </section>
      </motion.div>
    </div>
  );
}
