"use client";

import { useState } from "react";
import App_layout from "@/layout/app_layout";
import Image from "next/image";
import Link from "next/link";
import Downloadcatalog from "./downloadcatalog";
import {
  PlayCircle,
  Download,
} from "lucide-react";

export default function DemoCatalogPage() {

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const demoVideos = [
    {
      title: "TMS Therapy Demo",
      desc: "Advanced Transcranial Magnetic Stimulation technology demonstration.",
      thumbnail: "/home/tms treatment-3.jpg",
      video: "/videos/tmsfull.mp4",
    },

    {
      title: "PMS Therapy Demo",
      desc: "Premium electromagnetic stimulation system demonstration.",
      thumbnail: "/home/tms treatment-3.jpg",
      video: "/videos/painmanagementfull.mp4",
    },
  ];

  return (

    <App_layout>

      <div className="bg-black text-white overflow-hidden">

        {/* ===================================================== */}
        {/* HEADER SECTION */}
        {/* ===================================================== */}

        <section className="relative min-h-[90vh] flex items-center justify-center text-center mt-16 px-6 overflow-hidden">

  {/* ===================================================== */}
  {/* Background Video */}
  {/* ===================================================== */}

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

  {/* ===================================================== */}
  {/* Dark Overlay */}
  {/* ===================================================== */}

  <div className="absolute inset-0 bg-black/60"></div>

  {/* ===================================================== */}
  {/* Gold Gradient Overlay */}
  {/* ===================================================== */}

  <div className="absolute inset-0 bg-gradient-to-r from-black via-[#fed42a]/10 to-black"></div>

  {/* ===================================================== */}
  {/* Glow Effects */}
  {/* ===================================================== */}

  <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

  {/* ===================================================== */}
  {/* Floating Circle */}
  {/* ===================================================== */}

  <div className="hidden md:block absolute top-24 right-20 w-40 h-40 border border-[#fed42a]/20 rounded-full backdrop-blur-sm animate-pulse"></div>

  {/* ===================================================== */}
  {/* Content */}
  {/* ===================================================== */}

  <div
    className="relative z-10 max-w-4xl mx-auto"
    data-aos="fade-up"
  >

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Product Demo & <span className="text-[#fed42a]">Catalog</span>
    </h1>

    <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
      Explore detailed product demonstrations and download advanced
      healthcare & beauty technology catalogs.
    </p>

    {/* ===================================================== */}
    {/* Buttons */}
    {/* ===================================================== */}

    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

      {/* Watch Demo Button */}
      <button
        onClick={() => {
          document
            .getElementById("demo-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group relative overflow-hidden px-8 py-4 rounded-full border border-[#fed42a]/40 bg-[#fed42a]/10 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
      >

        {/* Overlay */}
        <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

        {/* Text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition duration-500">
          <PlayCircle className="w-5 h-5" />
          Watch Demo
        </span>

      </button>

      {/* Download Catalog Button */}
      <button
        onClick={() => {
          document
            .getElementById("catalog-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
      >

        {/* Overlay */}
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

        {/* Text */}
        <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition duration-500">
          <Download className="w-5 h-5" />
          Download Catalog
        </span>

      </button>

    </div>

  </div>

  {/* ===================================================== */}
  {/* Bottom Fade */}
  {/* ===================================================== */}

  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

</section>

        {/* ===================================================== */}
        {/* DEMO SECTION */}
        {/* ===================================================== */}

        <section
          id="demo-section"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24 overflow-hidden"
        >

          {/* Heading */}
          <div className="text-center mb-16">

            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold"
            >
              Product <span className="text-[#fed42a]">Demonstrations</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              Watch how our advanced medical and wellness technologies work
              in real-world environments.
            </p>

          </div>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {demoVideos.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111111] to-black"
              >

                {/* Video / Image */}
                <div className="relative h-[260px] sm:h-[350px] overflow-hidden">

                  {selectedVideo === item.video ? (

                    <video
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>

                  ) : (

                    <>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40"></div>

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">

                        <button
                          onClick={() => setSelectedVideo(item.video)}
                          className="w-20 h-20 rounded-full bg-[#fed42a] text-black text-2xl flex items-center justify-center hover:scale-110 transition duration-300 shadow-[0_0_40px_rgba(254,212,42,0.4)]"
                        >
                          ▶
                        </button>

                      </div>
                    </>
                  )}

                </div>

                {/* Content */}
                <div className="p-8">

                  <h3 className="text-2xl font-semibold text-[#fed42a]">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Demo Button */}
                  <button
                    onClick={() => setSelectedVideo(item.video)}
                    className="mt-6 group/button relative overflow-hidden px-6 py-3 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-white font-medium transition-all duration-500 hover:scale-105"
                  >

                    {/* Overlay */}
                    <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover/button:translate-y-0 transition-transform duration-500"></span>

                    {/* Text */}
                    <span className="relative z-10 group-hover/button:text-black transition duration-500">
                      Watch Demo
                    </span>

                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ===================================================== */}
        {/* DOWNLOAD CATALOG */}
        {/* ===================================================== */}

        <div id="catalog-section">
          <Downloadcatalog />
        </div>

        {/* ===================================================== */}
        {/* CTA SECTION */}
        {/* ===================================================== */}

        <section className="relative px-6 overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/5 via-transparent to-[#fed42a]/5"></div>

          <div
            data-aos="fade-up"
            className="relative z-10 max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111111] to-black px-8 md:px-20 py-20 text-center"
          >

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Need More Information?
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Contact us for product inquiries, demonstrations,
              and detailed healthcare technology information.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

              <Link href="/contact/contactsection">

                <button className="px-10 py-4 rounded-full bg-[#fed42a] text-black font-semibold hover:bg-yellow-300 transition duration-300">
                  Contact Us
                </button>

              </Link>

              <button className="px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:border-[#fed42a] hover:text-[#fed42a] transition duration-300">
                Explore Gallary
              </button>

            </div>

          </div>

        </section>

      </div>

    </App_layout>
  );
}