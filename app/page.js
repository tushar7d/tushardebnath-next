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
        <p className="mx-auto mb-12 font-serif text-2xl text-center md:w-2/4 md:text-5xl ">
          I am <em className="text-orange-400 ">Tushar Debnath</em> a product
          designer and developer from New Delhi.
        </p>

        <section className="mt-48 home-content-section ">
          <div className="flex justify-between p-6 mb-4 ">
            <h2 className="mb-2 font-serif text-3xl font-medium ">
              About my work
            </h2>
            <div className="w-3/4 text-2xl font-light text-left text-gray-500 ">
              I am currently a Senior product designer at Revolut a Global
              Fintech Giant, where I work with the Expansion department to bring
              revolut to the world. Apart fromt he expansion department I am
              also a part of the design operations team where we build internal
              products to optimise internal workflows.
              <br />
              <br />
              Before Revolut, I was at Zomato an Indian Food tech unicorn where
              I worked on scaling multiple products lines and implementing an
              ecosystem for Gig worker to work and earn with zomato.
              <br />
              <br />
              Before that, I was at Expedia (worlds larget online travel
              company) helping scale the Car rental product. I was also a part
              of the Expedia design systems team building internal tools and
              frameworks.
              <br />
              <br />I got my first real taste of product design at MakeMyTrip
              followed by Hike Messenger where I worked on a multiple product
              lines building features.
            </div>
          </div>

          <div className="flex justify-between p-6 mb-4 ">
            <h2 className="mb-2 font-serif text-3xl font-medium ">
              About my life
            </h2>
            <div className="w-3/4 text-2xl font-light text-left text-gray-500 ">
              I live in the beautiful city of new delhi, which is the capital of
              India. Life in delhi is chaotic and beautiful at the same time.
              <br /> <br />
              I spend most of my free time with my wife listening to music from
              the 90's, reading fantasy books or mangas and watching old movies.
              <br />
              <br />I also enjoy travelling and taking pictures you can see them
              here.
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
