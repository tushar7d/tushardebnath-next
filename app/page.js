"use client"
import { motion } from "framer-motion"
export default function Page() {

  return (
    <div className="home-content-container">
      <motion.div animate={{y:-10}} initial={{y:300}}  transition={{ duration: 1, delay:0.1 }}>
      <div className="w-full px-3 mx-auto mt-24 font-serif text-center text-8xl">
        Hello Everyone!
      </div>
      
      <section className="home-content-section ">
        <div className="flex items-center justify-between p-6 mb-4 bg-blue-100 rounded-2xl ">
          <div>
            <h2 className="mb-2 font-serif text-3xl ">I am Tushar Debnath</h2>
            <div className="w-3/4 text-xl font-light text-left ">
              a product designer, developer, and writer from New Delhi. I am currently working with <a>Revolut</a> as part of the Expansion team.  
            </div>
          </div>

          <img src="./images/td.png" className="w-[180px]" />
        </div>
        <div className="flex items-center justify-between p-6 mb-4 bg-green-100 rounded-2xl ">
          <div>
            <h2 className="mb-2 font-serif text-3xl ">I have experience in</h2>
            <div className="w-3/4 text-xl font-light text-left ">
              building highly scalable products and systems, working with the product and tech teams to develop ideas into compelling products used by millions of people around the globe.
            </div>
          </div>

          <img src="./images/td.png" className="w-[180px]" />
        </div>
       
        <div className="p-6 bg-yellow-100 rounded-2xl h-[250px] mb-4">
          I currently work for Revolut and I have previously worked at Expedia,
          Zomato(Indian Unicorn), MakeMyTrip, Hike and more{" "}
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
