"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Innovation",
      desc: "Advanced next-generation technology built for modern wellness.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Trusted Quality",
      desc: "Reliable systems developed with safety and performance in mind.",
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Human Focused",
      desc: "Created to improve comfort, care, and daily experiences.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Future Ready",
      desc: "Smart beauty and healthcare solutions for tomorrow.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/fullvideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-0"></div>

        {/* Hero Content */}
        <div
          data-aos="fade-up"
          className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center"
        >

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
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
            className="mt-6 text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Innovative Korean Technology crafted for the future of beauty,
            wellness, and advanced healthcare experiences.
          </motion.p>

          {/* Buttons */}
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

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* ===================================================== */}
      {/* MAIN VIDEO SECTION */}
      {/* ===================================================== */}

      <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-[#0a0a0a]">

        <div className="max-w-7xl mx-auto">

          <div data-aos="fade-up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fed42a]">
              Technology & Vision
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore the next generation of beauty and healthcare innovation.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            data-aos="zoom-in"
            className="relative overflow-hidden rounded-[30px] border border-white/10"
          >
            <video
              src="/videos/tmsvedio2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
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
                  <h3 className="text-3xl font-bold text-[#fed42a]">TMS</h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-sm">
                    Innovation
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Advanced therapeutic and wellness technology designed to
                  support modern healthcare experiences.
                </p>

                <button className="mt-8 px-6 py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300">
                  Learn More
                </button>
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
                  <h3 className="text-3xl font-bold text-[#fed42a]">PMS</h3>

                  <span className="px-4 py-1 rounded-full bg-[#fed42a]/20 text-[#fed42a] text-sm">
                    Smart Tech
                  </span>
                </div>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Innovative performance-focused systems developed for enhanced
                  health and beauty applications.
                </p>

                <button className="mt-8 px-6 py-3 rounded-full border border-[#fed42a]/40 hover:bg-[#fed42a] hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* WHY CHOOSE US */}
      {/* ===================================================== */}

      <section className="relative py-24 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fed42a]">
              Why Choose BH Connected
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative p-8 rounded-[30px] border border-white/10 bg-[#111111] overflow-hidden"
              >

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#fed42a]/20 text-[#fed42a] flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* NEW CTA SECTION */}
      {/* ===================================================== */}

      <section className="relative py-28 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">

        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto"
        >

          <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#111111]">

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/home/ctaimage.jpg"
                alt="CTA"
                fill
                className="object-cover opacity-30"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-10 md:px-20 py-20 md:py-28 text-center">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-sm font-medium mb-8">
                Premium Korean Innovation
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
                Experience the Future of
                <span className="text-[#fed42a]">
                  {" "}Beauty & Healthcare
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
                BH Connected delivers advanced beauty and healthcare technologies
                designed to redefine wellness experiences with innovation,
                performance, and trusted quality.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

                <Link href="/contact/contactsection">
                  <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#fed42a] text-black font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
                    Contact Us
                  </button>
                </Link>

                <Link href="/products/productpage">
                  <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:border-[#fed42a] hover:text-[#fed42a] transition-all duration-300">
                    View Products
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}