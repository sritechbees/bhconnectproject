"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App_layout from "@/layout/app_layout";

type FormType = {
  name: string;
  clinic: string;
  role: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactSection() {
  const [showToast, setShowToast] = useState(false);

  const initialForm: FormType = {
    name: "",
    clinic: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormType>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowToast(true);
    setFormData(initialForm);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <App_layout>
      <Head>
        <title>International Medical Equipment Solution | Contact</title>
      </Head>

      <section className="relative py-20 mt-16 md:py-28 bg-[#111111] text-white overflow-hidden font-[Poppins]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >

            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#888888] mb-2 md:mb-3 font-semibold">
                Contact Us
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Let’s <span className="text-[#888888]">Connect</span>
              </h2>

              <p className="mt-4 md:mt-6 text-[#CCCCCC] text-sm sm:text-base md:text-lg leading-relaxed">
                We welcome inquiries from physicians, clinics, MedSpas,
                and healthcare organizations seeking advanced,
                meaningful medical technologies.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                "Professional consultation tailored to your practice",
                "Fast response from our expert team",
                "Advanced medical technology guidance",
                "Support for partnerships and distribution",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-white rounded-full"></span>
                  <p className="text-[#CCCCCC] text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[#222]">
              <Image
                src="/home/contact.jpg"
                alt="Medical Consultation"
                width={600}
                height={400}
                className="object-cover w-full h-[220px] sm:h-[280px] md:h-[320px]"
                priority
              />
            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#181818] shadow-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#222]">

              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Contact
              </h3>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                />

                <input
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  required
                  placeholder="Clinic / Organization"
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                >
                  <option value="">Select Role</option>
                  <option>Physician (MD / DO)</option>
                  <option>Nurse Practitioner / PA</option>
                  <option>Clinic Administrator</option>
                  <option>MedSpa Owner</option>
                  <option>IPA / Health Planner</option>
                  <option>Other</option>
                </select>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 text-sm md:text-base bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#888888] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black rounded-xl hover:bg-[#dddddd] hover:scale-[1.03] active:scale-95 transition"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>
          </motion.div>

        </div>

        {/* TOAST */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -40, x: 40 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-[#181818] border border-[#333] shadow-lg px-4 sm:px-6 py-3 sm:py-4 rounded-xl z-50"
            >
              <p className="text-xs sm:text-sm text-white">
                ✅ Thank you! Your message has been sent.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </App_layout>
  );
}