"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

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

      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        
        {/* IMAGE SLIDER */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
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
                className="object-fill max-sm:object-contain object-center"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* HERO CONTENT */}

        <div
          data-aos="fade-up"
          className="
            relative
            z-10
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            md:px-10
            text-center
            pt-24
            sm:pt-28
            md:pt-32
            pb-16
            sm:pb-20
          "
        >
          {/* TOP TAG */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              inline-flex
              items-center
              justify-center
              px-3
              sm:px-4
              py-1.5
              rounded-full
              border
              border-[#fed42a]/40
              bg-black/40
              backdrop-blur-sm
              text-[#fed42a]
              text-[9px]
              sm:text-[10px]
              md:text-xs
              uppercase
              tracking-[1.5px]
              mb-4
              sm:mb-5
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
              text-[24px]
              xs:text-[28px]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Premium Beauty

            <br className="hidden sm:block" />

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
              sm:mt-5
              text-[12px]
              sm:text-sm
              md:text-base
              lg:text-lg
              text-gray-200
              max-w-2xl
              mx-auto
              leading-relaxed
              px-2
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
              sm:mt-8
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-3
              sm:gap-4
              w-full
            "
          >
            {/* BUTTON 1 */}

            <Link
              href="/products/productpage"
              className="w-full sm:w-auto"
            >
              <button
                className="
                  w-full
                  sm:w-auto
                  min-w-[180px]
                  px-5
                  sm:px-7
                  py-2.5
                  sm:py-3
                  rounded-full
                  bg-[#fed42a]
                  text-black
                  font-semibold
                  text-xs
                  sm:text-sm
                  hover:scale-105
                  hover:bg-yellow-300
                  transition-all
                  duration-300 max-sm:w-12
                "
              >
                Explore Products
              </button>
            </Link>

            {/* BUTTON 2 */}

            <Link
              href="/contact/contactsection"
              className="w-full sm:w-auto"
            >
              <button
                className="
                  w-full
                  sm:w-auto
                  min-w-[180px]
                  px-5
                  sm:px-7
                  py-2.5
                  sm:py-3
                  rounded-full
                  border
                  border-white/40
                  bg-black/30
                  backdrop-blur-sm
                  text-white
                  font-medium
                  text-xs
                  sm:text-sm
                  hover:border-[#fed42a]
                  hover:text-[#fed42a]
                  transition-all
                  duration-300 max-sm:w-12
                "
              >
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* SLIDER DOTS */}

        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full ${
                currentImage === index
                  ? "w-6 sm:w-8 h-2 bg-[#fed42a]"
                  : "w-2 h-2 bg-white/60"
              }`}
            />
          ))}
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
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
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
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111111]"
            >
              {/* IMAGE */}

              <div className="relative h-[240px] sm:h-[300px] overflow-hidden">
                <Image
                  src="/home/tmsproduct.jpeg"
                  alt="TMS"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
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
                  <button className="mt-6 px-5 py-2.5 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300 text-sm">
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
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#111111]"
            >
              {/* IMAGE */}

              <div className="relative h-[240px] sm:h-[300px] overflow-hidden">
                <Image
                  src="/home/pms.jpeg"
                  alt="PMS"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
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
                  <button className="mt-6 px-5 py-2.5 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300 text-sm">
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