"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BsArrowRightShort } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/home/home1.png",
  },
  {
    image: "/home/home2.png",
  },
  {
    image: "/home/home3.png",
  },
  {
    image: "/home/home4.png",
  },
];

export default function Herosection() {
  return (
    <section className="w-full h-[550px] bg-black mt-20 py-8  px-4 sm:px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-gray-300 border border-white/10 rounded-[28px] overflow-hidden shadow-2xl">
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
                
                {/* LEFT SIDE CONTENT */}
                <div className="px-5 sm:px-10 lg:px-14 py-14 lg:py-0 text-white order-2 lg:order-1">
                  
                  <p className="inline-block bg-yellow-400 text-black font-medium px-4 py-2 rounded-full text-[11px] sm:text-xs mb-5">
                    Advanced Korean Technology
                  </p>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-950 font-bold leading-[1.2] mb-5">
                    Premium Beauty
                    <br />
                    <span className="text-yellow-400">
                      & Health Solutions
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base text-gray-950 leading-7 mb-8 max-w-lg">
                    Innovative Korean technology crafted for beauty,
                    wellness, and advanced healthcare solutions with
                    premium quality products and modern equipment.
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                    <button className="group bg-yellow-400 hover:bg-white text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                      Explore Products
                      <BsArrowRightShort className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button className="group border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                      Contact Us
                      <BsArrowRightShort className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                  </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[620px] w-full order-1 lg:order-2 overflow-hidden">
                  
                  {/* Background Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-yellow-400/20 blur-3xl rounded-full"></div>
                  </div>

                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority
                    className="object-fill object-center"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}