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

  {/* 🔹 Background Video */}
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

  {/* 🔹 Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* 🔹 Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-0"></div>

  {/* 🔹 Glow Effects */}
  <div className="absolute top-[-100px] left-[-100px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-[#fed42a]/20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-[-100px] right-[-100px] w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

  {/* 🔹 Animated Circle */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
    className="hidden md:block absolute top-24 right-16 w-36 h-36 border border-[#fed42a]/20 rounded-full backdrop-blur-sm"
  />

  {/* 🔹 Hero Content */}
  <div
    data-aos="fade-up"
    className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 text-center"
  >

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
    >
      Premium Beauty <br className="hidden sm:block" />
      <span className="text-[#fed42a]">& Health Solutions</span>
    </motion.h1>

    {/* Subtitle */}
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

      {/* Explore Button */}
      <Link href="/products/productpage">
        <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#fed42a] text-black font-semibold text-sm sm:text-base hover:scale-105 hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_40px_rgba(254,212,42,0.45)]">
          Explore Products
        </button>
      </Link>

      {/* Contact Button */}
      <Link href="/contact/contactpage">
        <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-medium text-sm sm:text-base hover:border-[#fed42a] hover:text-[#fed42a] transition-all duration-300">
          Contact Us
        </button>
      </Link>
    </motion.div>

  </div>

  {/* 🔹 Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

</section>
      {/* ===================================================== */}
      {/* MAIN VIDEO SECTION */}
      {/* ===================================================== */}

      <section className="relative py-28 px-6 md:px-10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <div data-aos="fade-up" className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#fed42a]">
              Technology & Vision
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Explore the next generation of beauty and healthcare innovation.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            data-aos="zoom-in"
            className="relative overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_80px_rgba(254,212,42,0.15)]"
          >
            <video
              src="/videos/vedio1.mp4"
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

      <section className="relative py-28 px-6 md:px-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

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
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-[#111] to-black"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#fed42a]/20 to-transparent"></div>

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src="/home/salus-1.jpg"
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
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-b from-[#111] to-black"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#fed42a]/20 to-transparent"></div>

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src="/home/altms.jpg"
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

      <section className="relative py-28 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">

        <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

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
                className="relative p-8 rounded-[30px] border border-white/10 bg-gradient-to-b from-[#111] to-black overflow-hidden group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#fed42a]/10 transition duration-500"></div>

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
      {/* CTA SECTION */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/10 via-transparent to-[#fed42a]/10"></div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fed42a]/10 blur-[180px] rounded-full"
        />

        <div
          data-aos="zoom-in"
          className="relative z-10 max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111] to-black px-8 md:px-20 py-20 text-center shadow-[0_0_80px_rgba(254,212,42,0.15)]"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover the Future of <br />
            Beauty & Healthcare
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Connect with BH Connected and explore advanced solutions designed
            for the next generation of wellness innovation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact/contactpage">
              <button className="px-10 py-4 rounded-full bg-[#fed42a] text-black font-semibold hover:scale-105 hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_40px_rgba(254,212,42,0.5)]">
                Contact Us
              </button>
            </Link>

            <Link href="/products/productpage">
              <button className="px-10 py-4 rounded-full border border-white/20 hover:border-[#fed42a] hover:text-[#fed42a] transition-all duration-300">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}