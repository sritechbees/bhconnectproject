"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    "/home/home1.png",
    "/home/home2.png",
    "/home/home3.png",
    "/home/home4.png",
    "/home/home5.png",
  ];

  

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

        {/* IMAGE SLIDER */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.08 }}
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
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-0"></div>

        {/* GLOW EFFECT */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#fed42a]/20 blur-[120px] rounded-full z-0"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#fed42a]/10 blur-[120px] rounded-full z-0"></div>

        {/* HERO CONTENT */}
        <div
          data-aos="fade-up"
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center"
        >

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-md sm:text-sm tracking-[2px] uppercase mb-6"
          >
            Advanced Korean Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1]"
          >
            Premium Beauty <br className="hidden sm:block" />

            <span className="text-[#fed42a]">
              & Health Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Innovative Korean Technology crafted for the future of beauty,
            wellness, and advanced healthcare experiences.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >

            <Link href="/products/productpage">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#fed42a] text-black font-semibold text-sm sm:text-base hover:scale-105 hover:bg-yellow-300 transition-all duration-300">
                Explore Products
              </button>
            </Link>

            <Link href="/contact/contactsection">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-medium text-sm sm:text-base hover:border-[#fed42a] hover:text-[#fed42a] transition-all duration-300">
                Contact Us
              </button>
            </Link>

          </motion.div>

        </div>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">

          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full ${
                currentImage === index
                  ? "w-10 h-2 bg-[#fed42a]"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}

        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

      </section>

     
     

      {/* ===================================================== */}
      {/* PRODUCTS SECTION */}
      {/* ===================================================== */}

      <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fed42a]">
              Our Products
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Innovative beauty and healthcare systems built with modern
              technology and premium design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* TMS CARD */}

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              data-aos="fade-right"
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-[#111111]"
            >

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src="/home/tmsproduct.jpeg"
                  alt="TMS"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-[#fed42a]">
                    TMS
                  </h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-sm">
                    Innovation
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Advanced therapeutic and wellness technology designed to
                  support modern healthcare experiences.
                </p>

                <Link href="/democatalog/tmsproductpage">
                  <button className="mt-8 px-6 py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300">
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
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-[#111111]"
            >

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src="/home/pms.jpeg"
                  alt="PMS"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              </div>

              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-[#fed42a]">
                    PMS
                  </h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-sm">
                    Smart Tech
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Innovative performance-focused systems developed for enhanced
                  health and beauty applications.
                </p>

                <Link href="/democatalog/painmanagement">
                  <button className="mt-8 px-6 py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300">
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