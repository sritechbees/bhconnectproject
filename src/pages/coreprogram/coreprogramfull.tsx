"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/layout/app_layout";

export default function CoreProgramsFull() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const programs = [
    {
      title: "1. TL Program",
      subtitle: "Tightening & Lifting",
      content: [
        "Ulthera 400 Shots + MRF Full Treatment",
        "Price: $900",
        "Recommended twice per year",
        "40 minutes topical anesthesia",
        "1 hour treatment procedure",
        "Performed by Registered Nurse",
        "Skin tightening",
        "Facial lifting",
        "Collagen stimulation",
        "Structural skin rejuvenation",
      ],
    },
    {
      title: "2. SR Program",
      subtitle: "Skin Regeneration Program",
      content: [
        "MTS + Exosome + PDRN + Whole Face PRP",
        "Price: $590",
        "Recommended every 4 months",
        "30 minutes topical anesthesia",
        "40 minutes procedure",
        "Skin regeneration",
        "Improved skin texture and tone",
        "Natural collagen production",
      ],
    },
    {
      title: "3. BH Signature Skin Care System",
      subtitle: "",
      content: [
        "90 minutes premium professional skincare service",
        "Price: $180",
        "Deep Hydro Cleansing & Soft Facial Peeling",
        "Korean Meridian Facial Massage",
        "LED Regeneration Therapy",
        "Collagen Mask",
        "Calming Mask",
        "Brightening Mask",
        "Peptide Mask",
      ],
    },
    {
      title: "4. MEDICAL AESTHETICS",
      subtitle: "",
      content: [
        "Botox Treatment",
        "Forehead",
        "Glabella",
        "Crow's Feet",
        "Jaw Slimming",
        "Neck Lines",
        "Regenerative Beauty Program",
        "PLLA collagen stimulation",
        "Nano Fat Injection",
      ],
    },
    {
      title: "5. BODY CONTOURING",
      subtitle: "",
      content: [
        "Small Volume Liposuction",
        "Double Chin Fat Reduction",
        "Small Liposuction",
        "Nano Fat Injection",
      ],
    },
    {
      title: "6. WEIGHT LOSS PROGRAM",
      subtitle: "",
      content: [
        "$400 / month",
        "Semaglutide",
        "Tirzepatide",
        "Laboratory evaluation",
        "Metabolic analysis",
        "Medication management",
        "Nutritional IV therapy",
      ],
    },
    {
      title: "7. WOMEN'S HEALTH PROGRAM",
      subtitle: "",
      content: [
        "Annual Evaluation - $390",
        "CBC, CMP, Lipid Panel",
        "Hemoglobin A1C",
        "Estrogen, Progesterone",
        "TSH, Free T3, Free T4",
        "Pap Smear, HPV Testing",
        "Breast Exam",
        "Pelvic Ultrasound",
      ],
    },
    {
      title: "8. HORMONE THERAPY PROGRAM",
      subtitle: "",
      content: [
        "Initial Evaluation - $250",
        "Medical consultation",
        "Hormone testing",
        "Hormone Pellet Therapy",
        "Hormone Cream Therapy",
        "Female: 3–4 months",
        "Male: 4–5 months",
      ],
    },
    {
      title: "9. SPORTS RECOVERY PROGRAM",
      subtitle: "",
      content: [
        "Tennis Elbow",
        "Golfer's Elbow",
        "Shoulder Pain",
        "Knee Pain",
        "Lower Back Pain",
        "Sports Injuries",
        "PMS Therapy + PRP Injection",
        "Price: $1,400",
      ],
    },
    {
      title: "10. IV THERAPY PROGRAM",
      subtitle: "",
      content: [
        "Beauty IV",
        "Energy IV",
        "Immunity IV",
        "Brain & Wellness IV",
        "Vitamin C",
        "Glutathione",
        "B-Complex",
        "Magnesium",
      ],
    },
    {
      title: "11. COSMECEUTICAL PRODUCTS",
      subtitle: "",
      content: [
        "Exosome Toner",
        "EGF Peptide Serum",
        "Stem Cell Ampoule",
        "Moisturizing Cream",
        "Sunscreen",
        "Mask Packs",
        "BOGO Promotions",
      ],
    },
    {
      title: "12. SURGICAL PROGRAM",
      subtitle: "",
      content: [
        "Eye Bag Surgery",
        "Small Liposuction",
        "Nano Fat Injection",
        "Gynecomastia Surgery",
        "Double Chin Liposuction",
      ],
    },
  ];

  return (
    <App_layout>
    <section className="bg-[#111111] text-white py-20 mt-16 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-semibold"
          >
            CORE PROGRAMS
          </h2>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group border border-[#222] rounded-2xl p-6 hover:border-white/40 transition"
            >

              {/* MAIN TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              {item.subtitle && (
                <p className="text-[#888888] text-sm mb-4">
                  {item.subtitle}
                </p>
              )}

              {/* CONTENT */}
              <ul className="space-y-2 text-sm text-[#888888]">
                {item.content.map((line, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-white">•</span>
                    {line}
                  </li>
                ))}
              </ul>

              {/* HOVER LINE */}
              <div className="mt-6 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
    </App_layout>
  );
}