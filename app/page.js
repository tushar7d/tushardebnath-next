"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export default function Page() {
  return (
    <div className="home-content-container">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <section className="">
        <img src="./images/td.png" className="w-[300px] h-[300px] mx-auto  mt-[100px] mb-12" />{" "}
          <div className="w-full px-3 mx-auto mb-3 md:mb-8 font-serif text-6xl  font-medium text-center md:text-8xl">
            Hello Everyone!
          </div>

          <p className="w-full mx-auto mb-12 font-serif text-3xl text-center md:text-5xl">
            I am <em className="text-blue-500 ">Tushar Debnath,</em> product
            designer <br className="hidden lg:inline" /> and developer from New
            Delhi.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-2 lg:grid-cols-3 md:p-12 max-w-7xl">
            <div className=" p-6 rounded-3xl  flex col-span-1  bg-gray-50 h-[450px]  justify-center">
              
              <div>
                <div className="w-[60px] h-[60px] bg-black rounded-full mb-12" /> 
                <h3 className="mt-2 mb-4 font-serif text-3xl font-bold  ">
                  A bit about me
                </h3>
                <p className="text-xl text-gray-600">
                  Product designer and design technologist from India. I am currently working at Revolut as a
                  Senior product designer.
                </p>
              </div>
            </div>
            
            <div className=" p-6 rounded-3xl col-span-1 bg-gray-50 h-[450px] flex flex-col justify-between">
              <div>
                <h3 className="mt-2 mb-4 font-serif text-3xl font-bold  ">
                  Experience
                </h3>
                <h3 className="mt-4 font-bold text-6xl ">
                  10<sup>+</sup>
                </h3>
                <p className="text-2xl text-gray-600">
                  Years of building digital products for some of the biggest
                  brands in the industry
                </p>
              </div>
              <div>
                <img src="./images/brands.png" />
              </div>
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              <img src="./images/flume.jpeg"  className="w-[300px] mx-auto mt-3   rounded-2xl"/>
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-purple-50 h-[450px]">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
                loop={true}
              >
                <SwiperSlide>
                  <div className="h-full p-4 font-serif text-3xl font-medium text-purple-400 ">
                    Featured Work
                  </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              Fun facts{" "}
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-red-50 h-[450px]">
              {" "}
              Tools and Skills
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              {" "}
              Writing
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              {" "}
              Photography
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              Resume{" "}
            </div>
            <div className=" p-6 rounded-3xl col-span-1 bg-orange-50 h-[450px]">
              {" "}
              Testimonials
            </div>
            <div className=" p-6 rounded-3xl col-span-1 md:col-span-2 bg-orange-50 h-[450px]">
              {" "}
              Interests
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
