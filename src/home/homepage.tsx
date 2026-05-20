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
    "/home/home1.png",
    "/home/home2.png",
    "/home/home3.png",
    "/home/home4.png",
    "/home/home5.png",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
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
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImage]}
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-0"></div>

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-100px] left-[-100px] w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-[#fed42a]/20 blur-[120px] rounded-full z-0"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] bg-[#fed42a]/10 blur-[120px] rounded-full z-0"></div>

        {/* HERO CONTENT */}

<div
  data-aos="fade-up"
  className="
    relative
    z-10
    w-full
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    md:px-10
    text-center
    pt-24
    sm:pt-28
    md:pt-32
    lg:pt-36
    pb-20
    sm:pb-24
  "
>

  {/* TOP TAG */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      inline-flex
      items-center
      justify-center
      px-3
      sm:px-5
      py-2
      rounded-full
      border
      border-[#fed42a]/30
      bg-[#fed42a]/10
      text-[#fed42a]
      text-[9px]
      sm:text-xs
      md:text-sm
      tracking-[1px]
      sm:tracking-[2px]
      uppercase
      mb-5
      sm:mb-6
      backdrop-blur-md
    "
  >
    Advanced Korean Technology
  </motion.div>

  {/* TITLE */}

  <motion.h1
    initial={{ opacity: 0, y: 70 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      font-bold
      leading-[1.15]
      text-[32px]
      xs:text-[36px]
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      xl:text-[72px]
    "
  >
    Premium Beauty

    <br className="hidden sm:block" />

    <span className="text-[#fed42a]">
      {" "} & Health Solutions
    </span>
  </motion.h1>

  {/* DESCRIPTION */}

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="
      mt-5
      sm:mt-6
      text-[13px]
      sm:text-base
      md:text-lg
      lg:text-xl
      text-gray-300
      max-w-3xl
      mx-auto
      leading-relaxed
      px-2
      sm:px-0
    "
  >
    Innovative Korean Technology crafted for the future
    of beauty, wellness, and advanced healthcare experiences.
  </motion.p>

  {/* BUTTONS */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="
      mt-8
      sm:mt-10
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-3
      sm:gap-4
      w-full
      max-w-xl
      mx-auto
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
          min-w-[200px]
          sm:min-w-[220px]
          px-6
          sm:px-8
          py-3
          sm:py-3.5
          rounded-full
          bg-[#fed42a]
          text-black
          font-semibold
          text-sm
          sm:text-base
          hover:scale-105
          hover:bg-yellow-300
          transition-all
          duration-300
          shadow-lg max-sm:w-12
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
          min-w-[200px]
          sm:min-w-[220px]
          px-6
          sm:px-8
          py-3
          sm:py-3.5
          rounded-full
          border
          border-white/30
          bg-white/5
          backdrop-blur-md
          text-white
          font-medium
          text-sm
          sm:text-base
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

<div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-20">

  {heroImages.map((_, index) => (
    <div
      key={index}
      className={`transition-all duration-500 rounded-full ${
        currentImage === index
          ? "w-7 sm:w-10 h-2 bg-[#fed42a]"
          : "w-2 h-2 bg-white/50"
      }`}
    />
  ))}

</div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black to-transparent"></div>

      </section>

      {/* ===================================================== */}
      {/* PRODUCTS SECTION */}
      {/* ===================================================== */}

      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 overflow-hidden bg-black">

        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-14 sm:mb-20" data-aos="fade-up">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fed42a]">
              Our Products
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Innovative beauty and healthcare systems built with modern
              technology and premium design.
            </p>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* TMS CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              data-aos="fade-right"
              className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] border border-white/10 bg-[#111111]"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                <Image
                  src="/home/tmsproduct.jpeg"
                  alt="TMS"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-8 relative z-10">

                <div className="flex items-center justify-between gap-4 flex-wrap">

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#fed42a]">
                    TMS
                  </h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-xs sm:text-sm">
                    Innovation
                  </span>

                </div>

                <p className="text-gray-400 mt-4 sm:mt-5 leading-relaxed text-sm sm:text-base">
                  Advanced therapeutic and wellness technology designed to
                  support modern healthcare experiences.
                </p>

                <Link href="/democatalog/tmsproductpage">
                  <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>

              </div>

            </motion.div>

            {/* PMS CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              data-aos="fade-left"
              className="group relative overflow-hidden rounded-[28px] sm:rounded-[35px] border border-white/10 bg-[#111111]"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] sm:h-[320px] overflow-hidden">

                <Image
                  src="/home/pms.jpeg"
                  alt="PMS"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-8 relative z-10">

                <div className="flex items-center justify-between gap-4 flex-wrap">

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#fed42a]">
                    PMS
                  </h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-xs sm:text-sm">
                    Smart Tech
                  </span>

                </div>

                <p className="text-gray-400 mt-4 sm:mt-5 leading-relaxed text-sm sm:text-base">
                  Innovative performance-focused systems developed for enhanced
                  health and beauty applications.
                </p>

                <Link href="/democatalog/painmanagement">
                  <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300 text-sm sm:text-base">
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