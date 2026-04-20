"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


import App_layout from "@/layout/app_layout";
import ProductVideos from "./productvideos";

export default function ResourcesHeroSection() {
  return (
    
     <App_layout>
      <section className="relative h-[80vh] min-h-[600px] mt-16 flex items-center justify-center overflow-hidden bg-[#111111]">

        {/* Background Image */}
        <Image
          src="/images/resources-bg.jpg"
          alt="Medical Technology"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Subtle Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-400/10 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-[#888888] text-sm mb-4"
          >
            Medical Technology Resources
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Explore Our Medical <br />
            Innovation Resources
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-[#CCCCCC] max-w-2xl mx-auto"
          >
            Access product catalogs, clinical documentation, and demonstration
            videos related to our advanced medical technologies and solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/resources/productvideos">
              <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                View Resources
              </button>
            </Link>

            <Link href="/resources/downloadcatalog">
              <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
                Download Catalog
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
<ProductVideos/>
     </App_layout>
  
  );
}