"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Aboutone
() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="bg-[#111111] text-white overflow-hidden">

      {/* 🔹 Section 1 */}
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* 🔹 Image */}
        <div data-aos="fade-right" className="relative group overflow-hidden rounded-2xl">

          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop"
            alt="Who We Are"
            className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500"></div>

          {/* Border Glow */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
        </div>

        {/* 🔹 Content */}
        <div data-aos="fade-left">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Who We Are
          </h2>

          {/* Divider */}
          <div className="w-12 sm:w-16 h-[2px] bg-[#888888] mb-6"></div>

          {/* Text */}
          <p className="text-[#cccccc] text-base sm:text-lg leading-relaxed mb-4">
            B&H Connected is a premier company dedicated to bringing Korea’s most refined beauty and health innovations to the United States.
          </p>

          <p className="text-[#888888] text-base sm:text-lg leading-relaxed">
            With deep insight into the Korean market, we carefully select only the most exceptional companies and products—those that meet the highest standards of quality, safety, and true effectiveness.
          </p>

        </div>

      </div>
    </section>

      {/* 🔹 Section 2 */}
      <section className="py-20 px-6 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-4xl font-semibold mb-6">
            People Come First
          </h2>
          <p data-aos="fade-up" className="text-[#cccccc]">
            At the heart of everything we do is a simple belief:
          </p>
          <p data-aos="fade-up" className="text-white text-xl my-4">
            people come first.
          </p>
          <p data-aos="fade-up" className="text-[#888888]">
            We partner exclusively with brands and solutions that genuinely enhance well-being and create meaningful value in people’s lives.
          </p>
        </div>
      </section>

      {/* 🔹 Section 3 */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-semibold mb-6">
              We Recommend Only What You Truly Need
            </h2>
            <p className="text-[#cccccc] mb-4">
              At BH Connected Wellness Medspa, we do not believe in unnecessary procedures.
            </p>
            <p className="text-[#888888] mb-4">
              Our philosophy is simple:
              to recommend and perform only the treatments that truly benefit your health, beauty, and overall well-being.
            </p>
            <p className="text-[#888888]">
              Every treatment begins with a professional consultation with licensed medical providers, ensuring that each patient receives care that is personalized, safe, and medically appropriate.
            </p>
          </div>
          <img
            data-aos="fade-left"
            src="/home/image1.jpeg"
            className="rounded-2xl h-[400px] w-full object-cover"
          />
        </div>
      </section>

      {/* 🔹 Section 4 */}
     <section className="relative py-24 px-6 md:px-16 bg-[#111111] text-white overflow-hidden">

  {/* Center Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

  <div className="max-w-5xl mx-auto relative z-10">

    {/* TITLE */}
    <h2
      data-aos="fade-up"
      className="text-3xl md:text-5xl font-semibold text-center mb-20"
    >
      Integrated Medical Wellness Approach
    </h2>

    {/* TIMELINE */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-white/10"></div>

      {[
        "Medical Aesthetics",
        "Regenerative Medicine",
        "Wellness Medicine",
        "Preventive Health Care",
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 150}
          className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
            i % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* DOT */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#111111] z-10"></div>

          {/* CARD */}
          <div className="ml-12 md:ml-0 md:w-1/2 p-6 rounded-2xl border border-[#222] bg-[#181818] 
          hover:border-white/30 transition duration-300 group">

            {/* Number */}
            <span className="text-[#888888] text-sm mb-2 block">
              0{i + 1}
            </span>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-medium group-hover:text-white transition">
              {item}
            </h3>

            {/* Hover Line */}
            <div className="mt-4 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>

          </div>

        </div>
      ))}

    </div>

    {/* DESCRIPTION */}
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      className="text-[#888888] mt-12 text-center max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
    >
      This integrated approach allows us to address not only external appearance, but also the underlying health factors that influence skin, aging, and vitality.
    </p>

  </div>
</section>

      {/* 🔹 Section 5 */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-semibold mb-6">
          Licensed Medical Oversight
        </h2>
        <p data-aos="fade-up" className="text-[#cccccc] max-w-3xl mx-auto">
          All treatments are supervised by licensed medical professionals, including Nurse Practitioners and Physicians, to ensure the highest standards of safety, quality, and medical oversight.
        </p>
      </section>

      {/* 🔹 Section 6 */}
      <section className="py-20 px-6 md:px-16 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 data-aos="fade-up" className="text-4xl font-semibold mb-6">
            BH Mental Wellness Center
          </h2>
          <p className="text-[#cccccc] mb-4">
            The Behavioral Health Center operates as an independent medical practice located within the same facility as our MedSpa.
          </p>
          <p className="text-[#888888] mb-4">
            The Behavioral Health Center functions as a separate and independently managed medical provider.
          </p>
          <p className="text-[#888888]">
            BH Mental Wellness Center is operated by a psychiatric specialist team.
          </p>
        </div>
      </section>
<section className="relative py-24 px-6 md:px-16 bg-[#111111] text-white overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#888888]/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

    {/* LEFT CARD */}
    <div
      data-aos="fade-right"
      className="group transform skew-x-[-6deg]"
    >
      <div className="relative p-[1px] rounded-2xl bg-white/10">

        {/* INNER */}
        <div className="bg-[#181818] p-8 rounded-2xl transform skew-x-[6deg] 
        border border-[#222] hover:border-white/30 transition duration-500">

          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Medical Services
          </h3>

          <ul className="space-y-3 text-[#888888] text-sm md:text-base">
            {[
              "Depression Treatment",
              "Anxiety Treatment",
              "Psychiatric Evaluation",
              "TMS Therapy",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Hover Line */}
          <div className="mt-6 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>

        </div>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div
      data-aos="fade-left"
      className="group transform skew-x-[6deg]"
    >
      <div className="relative p-[1px] rounded-2xl bg-white/10">

        {/* INNER */}
        <div className="bg-[#181818] p-8 rounded-2xl transform skew-x-[-6deg] 
        border border-[#222] hover:border-white/30 transition duration-500">

          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Clinical Services Include
          </h3>

          <ul className="space-y-3 text-[#888888] text-sm md:text-base">
            {[
              "PHQ-9 / GAD-7 Evaluation",
              "EEG Brain Testing",
              "Medication Management",
              "TMS Therapy",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* Hover Line */}
          <div className="mt-6 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500"></div>

        </div>
      </div>
    </div>

  </div>
</section>
      {/* 🔹 Section 9 */}
      <section className="py-20 px-6 md:px-16 bg-[#0d0d0d] text-center">
        <h2 data-aos="fade-up" className="text-4xl font-semibold mb-6">
          Mental Wellness Programs
        </h2>
        <p className="text-[#cccccc] mb-4 max-w-3xl mx-auto">
          We also offer Mental Wellness Care Programs designed to support emotional well-being and stress management.
        </p>
        <p className="text-[#888888] mb-6">
          These programs are wellness services and are not insurance-covered medical treatments.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Stress Management", "Mental Wellness Program", "Brain Wellness Program"].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Section 10 */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-semibold mb-6">
          Mental Wellness IV
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {["NAD+", "Magnesium", "B-Complex"].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-[#1a1a1a] px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}