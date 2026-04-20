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
      <section className="w-full bg-[#111111] text-white py-20 md:py-24 px-4 sm:px-6 md:px-16 font-[Poppins]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[#222]">
              <Image
                src="/home/inquiryform.jpg"
                alt="Medical Consultation"
                width={600}
                height={700}
                className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-[#181818]/90 backdrop-blur-md p-4 md:p-6 rounded-xl border border-[#333] max-w-xs">
              <h3 className="font-semibold text-white">
                Professional Support
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mt-2">
                Our team is ready to assist clinics, physicians, and healthcare
                providers with personalized solutions.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="bg-[#181818] shadow-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#222]">

              <div className="mb-6 md:mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white">
                  Contact / Inquiry
                </h1>
                <p className="mt-3 text-[#888888] text-sm sm:text-base">
                  Please complete the form and our team will respond promptly.
                </p>
              </div>

              {/* SUCCESS */}
              {submitted ? (
                <div className="bg-[#111111] border border-[#333] text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">
                    Thank you for your submission.
                  </h3>
                  <p className="text-[#888888]">
                    We have received your information successfully. A member of
                    our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

                  <div>
                    <label className="text-sm text-[#888888]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#888888]">
                      Clinic / Organization Name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#888888]">
                      Your Role
                    </label>
                    <select
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
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

                  <div>
                    <label className="text-sm text-[#888888]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#888888]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#888888]">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="mt-2 w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl text-white focus:ring-1 focus:ring-[#888888] outline-none"
                    ></textarea>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="relative w-full py-3 rounded-xl font-medium text-black bg-white overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-[#888888] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Submit Inquiry
                    </span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}