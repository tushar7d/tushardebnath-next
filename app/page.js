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
          <div className="justify-between p-6 mb-12 md:flex ">
            <h2 className="mb-2 font-serif text-3xl font-medium ">
              About my work
            </h2>
            <div className="text-2xl font-light text-left text-gray-500 md:w-3/4 ">
              I am currently a Senior product designer at{" "}
              <a href="https://www.revolut.com/" target={"_blank"} className="text-orange-500">Revolut</a> a Global Fintech
              Giant, where I work with the Expansion department to bring revolut
              to the world. Apart fromt he expansion department I am also a part
              of the design operations team where we build internal products to
              optimise internal workflows.
              <br />
              <br />
              Recently I also have been contributing back to the community by
              building <a href="https://www.figma.com/@tushar" target={"_blank"} className="text-orange-500">Figma plugins</a>,
              design resources and speaking at{" "}
              <a href="https://www.youtube.com/watch?v=FhXXEM1_aP4&t=55s&ab_channel=Figma" target={"_blank"} className="text-orange-500">design conferences</a>
              <br />
              <br />
              Before Revolut, I was at <a href="https://www.zomato.com/" target={"_blank"} className="text-orange-500">Zomato</a> an Indian Food tech unicorn where
              I worked on scaling multiple products lines and implementing an
              ecosystem for Gig worker to work and earn with zomato.
              <br />
              <br />
              Before that, I was at <a href="https://www.expedia.com/" target={"_blank"} className="text-orange-500">Expedia</a> (worlds larget online travel
              company) helping build the Car rental product. I was also a part
              of the Expedia design systems team building internal tools and
              frameworks.
              <br />
              <br />I got my first real taste of product design at <a href="https://www.makemytrip.com/" target={"_blank"} className="text-orange-500">MakeMyTrip</a>
              followed by <a href="https://en.wikipedia.org/wiki/Hike_Messenger" target={"_blank"} className="text-orange-500">Hike Messenger</a> where I worked on a multiple product
              lines building features.
            </div>
          </div>

          <div className="justify-between p-6 mb-12 md:flex ">
            <h2 className="mb-2 font-serif text-3xl font-medium ">My skills</h2>
            <div className="text-2xl font-light text-left text-gray-500 md:w-3/4 ">
              <em>Design:</em> I have over a decade of experience in building
              high quality and scalable products for few of the largest product
              companies in the world.
              <br /> <br />
              <em>Development:</em> I have a background in engineering and I
              specialize in building websites, internal tools, figma plugins,
              and high fidelity prototypes.
            </div>
          </div>

          <div className="justify-between p-6 mb-12 md:flex ">
            <h2 className="mb-2 font-serif text-3xl font-medium ">
              About my life
            </h2>
            <div className="text-2xl font-light text-left text-gray-500 md:w-3/4 ">
              I currently Live in New Delhi with my family, but I spent most of
              my school life on the hills of Mussorie.
              <br /> <br />I like the music from the 90's, fantasy books,
              mangas, Tarantino movies, Anime and photography.
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
