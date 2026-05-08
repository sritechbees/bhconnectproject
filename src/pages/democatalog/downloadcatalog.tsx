"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/layout/app_layout";


export default function Downloadcatalog() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const brochures = [
    {
      title: "TMS Device Brochure",
      desc: "Learn more about Transcranial Magnetic Stimulation technology and its role in modern brain and mental wellness programs.",
      file: "/home/tms_brochure.jpg",
    },
    {
      title: "Electromagnetic Stimulation",
      desc: "Explore how electromagnetic stimulation devices support pain management and therapeutic recovery.",
      file: "/home/ems_brochure.jpg",
    },
    {
      title: "Product Catalog",
      desc: "Download the complete iMESUSA product catalog including device details and technical specifications.",
      file: "/home/product_catalog.png",
    },
  ];

  return (
   <App_layout>
      <section className="relative bg-[#111111] py-24 mt-4 px-4 sm:px-6 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#888888]/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title */}
          <div className="text-center mb-16">

            <p
              data-aos="fade-up"
              className="text-[#888888] uppercase tracking-widest text-sm mb-3"
            >
              Resources
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl md:text-4xl font-semibold text-white mb-6"
            >
              Catalog & Brochures
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-3xl mx-auto text-[#888888]"
            >
              Access detailed brochures and product catalogs to learn more about
              our medical technologies and solutions.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {brochures.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="bg-[#181818] border border-[#222] rounded-2xl p-6 hover:border-white/40 transition"
              >

                <h3 className="text-lg font-medium text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-[#888888] text-sm mb-6">
                  {item.desc}
                </p>

                <a
                  href={item.file}
                  download
                  className="inline-block px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-[#dddddd] transition"
                >
                  Download
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>
   </App_layout>
  );
}