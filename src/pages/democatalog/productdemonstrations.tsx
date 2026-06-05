"use client";

import { useState } from "react";
import Image from "next/image";
import App_layout from "@/layout/app_layout";
import DemoCatalogPage from "./democatalogpage";

export default function ProductDemonstrations() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const demoVideos = [
    {
      title: "TMS Therapy Demo",
      desc: "Advanced Transcranial Magnetic Stimulation technology demonstration.",
      thumbnail: "/tms product/videoimage.jpg",
      video: "/videos/tmsfull.mp4",
    },
    {
      title: "PMS Therapy Demo",
      desc: "Premium electromagnetic stimulation system demonstration.",
      thumbnail: "/tms product/videoimage.jpg",
      video: "/videos/pmsnew_version.mp4",
    },
  ];

  return (
    <div>
   
  <section className="relative min-h-screen bg-black text-white overflow-hidden py-16 md:py-16">
    
    {/* Glow Effects */}
    <div className="absolute top-20 left-0 w-[250px] h-[250px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-20 right-0 w-[250px] h-[250px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div
        data-aos="fade-up"
        className="text-center mb-14 md:mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Product{" "}
          <span className="text-[#fed42a]">
            Demonstrations
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Watch how our advanced medical and wellness technologies
          work in real-world environments.
        </p>
      </div>

      {/* Demo Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">

        {demoVideos.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-b
              from-[#111111]
              to-black
              shadow-[0_0_30px_rgba(255,255,255,0.03)]
              hover:border-[#fed42a]/30
              transition-all
              duration-500
            "
          >

            {/* Video / Thumbnail */}
            <div className="relative h-[240px] sm:h-[300px] md:h-[350px] overflow-hidden">

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
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 "></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(item.video)}
                      className="
                        w-16 h-16
                        sm:w-20 sm:h-20
                        rounded-full
                        bg-[#fed42a]
                        text-black
                        text-xl
                        sm:text-2xl
                        flex
                        items-center
                        justify-center
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-[0_0_40px_rgba(254,212,42,0.4)]
                      "
                    >
                      ▶
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">

              <h3 className="text-xl sm:text-2xl font-semibold text-[#fed42a]">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>

              <button
                onClick={() => setSelectedVideo(item.video)}
                className="
                  mt-6
                  group/button
                  relative
                  overflow-hidden
                  px-6
                  py-3
                  rounded-full
                  border
                  border-[#fed42a]/30
                  bg-[#fed42a]/10
                  text-white
                  font-medium
                  transition-all
                  duration-500
                  hover:scale-105
                "
              >
                <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover/button:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10 group-hover/button:text-black transition duration-500">
                  Watch Demo
                </span>
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  </section>



    </div>
  );
}