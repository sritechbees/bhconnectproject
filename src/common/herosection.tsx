"use client";

import Image from "next/image";
import Link from "next/link";

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
  {
    image: "/home/home5.png",
  },
];

export default function Herosection() {
  return (
    <section className="w-full bg-black mt-4 pt-24 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* MAIN CONTAINER */}

      <div
        className="
          max-w-6xl
          mx-auto
          rounded-[24px]
          sm:rounded-[30px]
          overflow-hidden
          border
          border-white/10
          bg-gray-300
          shadow-[0_10px_50px_rgba(0,0,0,0.4)]
        "
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3500,
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
              
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

                {/* ================================================= */}
                {/* LEFT SIDE CONTENT */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    h-full
                    px-5
                    sm:px-8
                    md:px-10
                    lg:px-12
                    py-12
                    sm:py-14
                    lg:py-16
                    order-2
                    lg:order-1
                  "
                >
                  {/* TAG */}

                  <div>
                    <p
                      className="
                        inline-flex
                        items-center
                        bg-yellow-400
                        text-black
                        font-medium
                        px-4
                        py-2
                        rounded-full
                        text-[10px]
                        sm:text-xs
                        tracking-wide
                        mb-4
                      "
                    >
                      Advanced Korean Technology
                    </p>
                  </div>

                  {/* TITLE */}

                  <h1
                    className="
                      text-[28px]
                      sm:text-[36px]
                      md:text-[42px]
                      lg:text-[48px]
                      font-bold
                      leading-[1.15]
                      text-gray-950
                      mb-4
                    "
                  >
                    Premium Beauty

                    <br />

                    <span className="text-yellow-400">
                      & Health Solutions
                    </span>
                  </h1>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      text-sm
                      sm:text-[15px]
                      md:text-base
                      text-gray-950
                      leading-7
                      max-w-xl
                      mb-7
                    "
                  >
                    Innovative Korean technology crafted for beauty,
                    wellness, and advanced healthcare solutions with
                    premium quality products and modern equipment.
                  </p>

                  {/* BUTTONS */}

                  <div className="flex flex-col sm:flex-row gap-4">
                    
                    {/* BUTTON 1 */}

                    <Link href="/products/productpage">
                      <button
                        className="
                          group
                          bg-yellow-400
                          hover:bg-white
                          text-black
                          px-6
                          py-3
                          rounded-full
                          text-sm
                          font-semibold
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition-all
                          duration-300
                          hover:scale-105
                        "
                      >
                        Explore Products

                        <BsArrowRightShort
                          className="
                            text-2xl
                            group-hover:translate-x-1
                            transition-transform
                            duration-300
                          "
                        />
                      </button>
                    </Link>

                    {/* BUTTON 2 */}

                    <Link href="/contact/contactsection">
                      <button
                        className="
                          group
                          bg-white
                          hover:bg-yellow-400
                          text-black
                          px-6
                          py-3
                          rounded-full
                          text-sm
                          font-semibold
                          flex
                          items-center
                          justify-center
                          gap-2
                          transition-all
                          duration-300
                        "
                      >
                        Contact Us

                        <BsArrowRightShort
                          className="
                            text-2xl
                            group-hover:translate-x-1
                            transition-transform
                            duration-300
                          "
                        />
                      </button>
                    </Link>

                  </div>
                </div>

                {/* ================================================= */}
                {/* RIGHT SIDE IMAGE */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    h-[260px]
                    sm:h-[350px]
                    md:h-[420px]
                    lg:h-[520px]
                    w-full
                    order-1
                    lg:order-2
                    overflow-hidden
                  "
                >
                  {/* IMAGE */}

                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority
                    className="
                      object-cover
                      object-center
                    "
                  />

                  {/* DARK OVERLAY */}

                  <div className="absolute inset-0"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}