"use client";

import { useState } from "react";
import Image from "next/image";
import App_layout from "@/layout/app_layout";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <App_layout>
      <div className="bg-black text-white overflow-hidden font-[Poppins]">

        {/* ========================================= */}
        {/* HERO SECTION */}
        {/* ========================================= */}

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/home/tms treatment-3.jpg"
              alt="Inquiry Banner"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div>

          {/* Glow Effects */}
          <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#fed42a]/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-[#fed42a]/10 blur-[120px] rounded-full"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="inline-block px-5 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-sm mb-5">
              BH Connected
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Contact & Inquiry
            </h1>

            <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with our team for advanced healthcare and wellness
              solutions tailored to your organization.
            </p>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111111] to-transparent"></div>
        </section>

        {/* ========================================= */}
        {/* CONTACT FORM SECTION */}
        {/* ========================================= */}

        <section className="w-full bg-gradient-to-b from-[#111111] via-black to-[#111111] py-20 md:py-28 px-4 sm:px-6 md:px-16">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* ========================================= */}
            {/* LEFT IMAGE */}
            {/* ========================================= */}

            <div className="relative">

              <div className="relative overflow-hidden rounded-[30px] border border-[#fed42a]/10 shadow-[0_0_50px_rgba(254,212,42,0.08)] group">

                <Image
                  src="/home/tms treatment-3.jpg"
                  alt="Medical Consultation"
                  width={700}
                  height={800}
                  className="object-cover w-full h-[350px] sm:h-[450px] lg:h-[650px] transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl border border-[#fed42a]/20 p-6 rounded-3xl">

                  <h3 className="font-semibold text-xl text-[#fed42a]">
                    Professional Support
                  </h3>

                  <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                    Our team is ready to assist clinics, physicians, and
                    healthcare providers with personalized healthcare
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* RIGHT FORM */}
            {/* ========================================= */}

            <div>

              <div className="bg-[#161616] border border-[#fed42a]/10 shadow-[0_0_50px_rgba(254,212,42,0.08)] rounded-[35px] p-6 sm:p-8 md:p-10">

                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#fed42a]/10 border border-[#fed42a]/20 text-[#fed42a] text-sm">
                    Inquiry Form
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold mt-5">
                    Contact Our Team
                  </h2>

                  <p className="mt-3 text-gray-400">
                    Fill in the details below and our team will connect with
                    you shortly.
                  </p>
                </div>

                {/* SUCCESS MESSAGE */}
                {submitted ? (
                  <div className="bg-[#111] border border-[#fed42a]/20 rounded-3xl p-8 text-center">

                    <div className="w-16 h-16 bg-[#fed42a]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      ✅
                    </div>

                    <h3 className="text-2xl font-semibold text-[#fed42a]">
                      Thank You!
                    </h3>

                    <p className="text-gray-400 mt-3 leading-relaxed">
                      Your inquiry has been submitted successfully.
                      Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* Name */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Full Name
                      </label>

                      <input
                        type="text"
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      />
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Clinic / Organization Name
                      </label>

                      <input
                        type="text"
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Your Role
                      </label>

                      <select
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      >
                        <option value="">Select Role</option>
                        <option>Physician (MD / DO)</option>
                        <option>Nurse Practitioner / PA</option>
                        <option>Clinic Administrator</option>
                        <option>MedSpa Owner</option>
                        <option>IPA / Health Planner</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Email Address
                      </label>

                      <input
                        type="email"
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm text-gray-400">
                        Message
                      </label>

                      <textarea
                        rows={5}
                        required
                        className="mt-2 w-full px-5 py-4 bg-[#111111] border border-[#878c8c] rounded-2xl text-white outline-none resize-none focus:ring-2 focus:ring-[#fed42a] focus:border-[#fed42a] transition-all duration-300"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl font-semibold text-black bg-[#fed42a] hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(254,212,42,0.35)]"
                    >
                      Submit Inquiry
                    </button>

                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </App_layout>
  );
}