"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/home/Banner-1.png",
    "/home/home2.png",
    "/home/Banner-3.png",
    "/home/Banner-4.png",
    "/home/Banner-5.png",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    
      
    
    <div className="bg-black text-white overflow-hidden w-full">
      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative w-full overflow-hidden bg-black">

        {/* ===================================================== */}
        {/* DESKTOP + TABLET VIEW */}
        {/* ===================================================== */}

        <div className="hidden md:flex relative min-h-screen  items-center justify-center overflow-hidden">

          {/* IMAGE SLIDER */}

          <div className="absolute inset-0 w-full h-full  mt-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentImage]}
                  alt="Hero Background"
                  fill
                  priority
                  className="object-fill object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* OVERLAY */}

            <div className="absolute inset-0 z-[1]" />
          </div>

          {/* CONTENT */}

          <div
            data-aos="fade-up"
            className="
              relative
              z-10
              max-w-6xl
              mx-auto
              px-6
              lg:px-10
              text-center
            "
          >
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-1.5
                rounded-full
                border
                border-[#fed42a]/40
                bg-black/40
                backdrop-blur-sm
                text-[#fed42a]
                text-xs
                uppercase
                tracking-[1.5px]
                mb-5
              "
            >
              Advanced Korean Technology
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                font-bold
                leading-[1.2]
                text-5xl
                lg:text-6xl
              "
            >
              Premium Beauty

              <br />

              <span className="text-[#fed42a]">
                & Health Solutions
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-5
                text-base
                lg:text-lg
                text-gray-200
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Innovative Korean Technology crafted for beauty,
              wellness, and advanced healthcare solutions.
            </motion.p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

  {/* Explore Products Button */}
  <Link href="/products/productpage">
    <button
      className="group relative overflow-hidden px-8 py-4 rounded-full border border-[#fed42a]/40 bg-[#fed42a] text-black font-semibold transition-all duration-500 hover:scale-105"
    >
      {/* Overlay */}
      <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

      {/* Text */}
      <span className="relative z-10 transition duration-500 group-hover:text-[#fed42a]">
        Explore Products
      </span>
    </button>
  </Link>

  {/* Contact Us Button */}
  <Link href="/contact/contactsection">
    <button
      className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
    >
      {/* Overlay */}
      <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

      {/* Text */}
      <span className="relative z-10 transition duration-500 group-hover:text-black">
        Contact Us
      </span>
    </button>
  </Link>

</div>
          </div>

          {/* DOTS */}

          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 rounded-full ${
                  currentImage === index
                    ? "w-8 h-2 bg-[#fed42a]"
                    : "w-2 h-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* MOBILE VIEW */}
        {/* ===================================================== */}

        <div className="md:hidden relative w-full bg-black">

          {/* IMAGE SECTION */}

          <div className="relative w-full h-[320px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentImage]}
                  alt="Hero Mobile"
                  fill
                  priority
                  className="object-cover max-sm:mt-16 object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-black/30 z-[1]" />
          </div>

          {/* CONTENT BELOW IMAGE */}

          <div
            data-aos="fade-up"
            className="
              relative
              z-10
              px-5
              pt-8
              pb-12
              text-center
            "
          >
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                inline-flex
                items-center
                justify-center
                px-3
                py-1.5
                rounded-full
                border
                border-[#fed42a]/40
                bg-[#111111]
                text-[#fed42a]
                text-[10px]
                uppercase
                tracking-[1.5px]
                mb-4
              "
            >
              Advanced Korean Technology
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                font-bold
                leading-[1.3]
                text-[30px]
              "
            >
              Premium Beauty

              <br />

              <span className="text-[#fed42a]">
                & Health Solutions
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-4
                text-[14px]
                text-gray-300
                leading-relaxed
              "
            >
              Innovative Korean Technology crafted for beauty,
              wellness, and advanced healthcare solutions.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-7
                flex
                flex-col
                items-center
                gap-3
              "
            >
              {/* BUTTON 1 */}

              <Link
                href="/products/productpage"
                className="w-auto"
              >
                <button
                  className="
                    px-6
                    py-2.5
                    rounded-full  
                    bg-[#fed42a]
                    text-black
                    font-semibold
                    text-[13px]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Explore Products
                </button>
              </Link>

              {/* BUTTON 2 */}

              <Link
                href="/contact/contactsection"
                className="w-auto"
              >
                <button
                  className="
                    px-6
                    py-2.5
                    rounded-full
                    border
                    border-white/30
                    bg-[#111111]
                    text-white
                    font-medium
                    text-[13px]
                    transition-all
                    duration-300
                    hover:border-[#fed42a]
                    hover:text-[#fed42a]
                  "
                >
                  Contact Us
                </button>
              </Link>
            </motion.div>

            {/* DOTS */}

            <div className="mt-8 flex justify-center items-center gap-2">
              {heroImages.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 rounded-full ${
                    currentImage === index
                      ? "w-6 h-2 bg-[#fed42a]"
                      : "w-2 h-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PRODUCTS SECTION */}
      {/* ===================================================== */}

      <section className="relative py-14 sm:py-20 px-4 sm:px-6 md:px-10 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}

          <div
            className="text-center mb-12 sm:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
              Our Products
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Innovative beauty and healthcare systems with
              premium modern technology.
            </p>
          </div>

          {/* PRODUCT GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* TMS CARD */}

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-right"
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#111111]
              "
            >
              {/* IMAGE */}

              <div className="relative h-[240px] sm:h-[300px] overflow-hidden">
                <Image
                  src="/home/tmsproduct.jpeg"
                  alt="TMS"
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* CONTENT */}

              <div className="p-5 sm:p-7 relative z-10">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fed42a]">
                    TMS
                  </h3>

                  <span className="px-3 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-[10px] sm:text-xs">
                    Innovation
                  </span>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                  Advanced therapeutic technology designed for
                  modern healthcare and wellness experiences.
                </p>

                <Link href="/democatalog/tmsproductpage">
                  <button
                    className="
                      mt-6
                      px-5
                      py-2.5
                      rounded-full
                      border
                      border-[#fed42a]/40
                      hover:bg-[#fed42a]
                      hover:text-black
                      transition-all
                      duration-300
                      text-sm
                    "
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* PMS CARD */}

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-left"
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#111111]
              "
            >
              {/* IMAGE */}

              <div className="relative h-[240px] sm:h-[300px] overflow-hidden">
                <Image
                  src="/home/pmsimage.jpg"
                  alt="PMS"
                  fill
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-700
                  "
                />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* CONTENT */}

              <div className="p-5 sm:p-7 relative z-10">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#fed42a]">
                    PMS
                  </h3>

                  <span className="px-3 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-[10px] sm:text-xs">
                    Smart Tech
                  </span>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                  Performance-focused systems developed for
                  advanced health and beauty applications.
                </p>

                <Link href="/democatalog/painmanagement">
                  <button
                    className="
                      mt-6
                      px-5
                      py-2.5
                      rounded-full
                      border
                      border-[#fed42a]/40
                      hover:bg-[#fed42a]
                      hover:text-black
                      transition-all
                      duration-300
                      text-sm
                    "
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}