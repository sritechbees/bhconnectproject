"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App_layout from "@/layout/app_layout";
import Link from "next/link";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        <title>
          International Medical Equipment Solution | Contact
        </title>
      </Head>

      <div className="bg-black text-white overflow-hidden">
        {/* ===================================================== */}
        {/* MOBILE HERO SECTION */}
        {/* ===================================================== */}

        <section className="md:hidden relative w-full bg-black overflow-hidden">
          {/* IMAGE SECTION */}

          <div className="relative w-full h-[340px] overflow-hidden">
            <Image
              src="/home/tmsbg.jpg"
              alt="Contact Hero"
              fill
              priority
              className="object-cover object-center max-sm:mt-8"
            />

          

            {/* GOLD GLOW */}

            <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#fed42a]/10 blur-[100px] rounded-full z-[2]" />

            {/* BOTTOM FADE */}

            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black to-transparent z-[2]" />
          </div>

          {/* CONTENT BELOW IMAGE */}

          <div className="relative z-10 px-5 pt-8 pb-12 text-center">
            {/* TAG */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                inline-flex
                items-center
                justify-center
                px-4
                py-2
                rounded-full
                border
                border-[#fed42a]/40
                bg-[#111111]
                text-[#fed42a]
                text-[10px]
                uppercase
                tracking-[2px]
                mb-5
              "
            >
              Advanced Medical Technology
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                font-bold
                leading-[1.3]
                text-[30px]
              "
            >
              Let’s Build the Future of{" "}

              <span className="text-[#fed42a]">
                Healthcare & Wellness
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                mt-4
                text-[14px]
                text-gray-300
                leading-relaxed
              "
            >
              Connect with BH Connected for advanced medical
              technology, innovative healthcare solutions,
              and premium wellness systems.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-7
                flex
                flex-col
                items-center
                gap-3
              "
            >
              {/* BUTTON 1 */}

              <button
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  px-6
                  py-2.5
                  rounded-full
                  bg-[#fed42a]
                  text-black
                  font-semibold
                  text-[13px]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Contact Us
              </button>

              {/* BUTTON 2 */}

              <Link
                href="/democatalog/democatalogpage"
                className="w-auto"
              >
                <button
                  className="
                    px-6
                    py-2.5
                    rounded-full
                    border
                    border-white/30
                    bg-[#111111]
                    text-white
                    font-medium
                    text-[13px]
                    transition-all
                    duration-300
                    hover:border-[#fed42a]
                    hover:text-[#fed42a]
                  "
                >
                  Explore Solutions
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* DESKTOP HERO SECTION */}
        {/* ===================================================== */}

        <section className="hidden md:flex relative min-h-[90vh] items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Image */}

          <Image
            src="/home/tmsbg.jpg"
            alt="Contact Hero"
            fill
            priority
            className="object-fill object-center"
          />

        

          {/* Glow Effects */}

          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#fed42a]/10 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

          
         
          {/* Content */}

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Let’s Build the Future of{" "}

              <span className="text-[#fed42a]">
                Healthcare & Wellness
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mt-6 text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Connect with BH Connected for advanced medical
              technology, innovative healthcare solutions,
              and premium wellness systems.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center justify-center gap-5"
            >
              {/* Contact Button */}

              <button
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden px-8 py-4 rounded-full border border-[#fed42a]/40 bg-[#fed42a]/10 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10 group-hover:text-black transition duration-500">
                  Contact Us
                </span>
              </button>

              {/* Explore Button */}

              <Link href="/democatalog/democatalogpage">
                <button className="group relative overflow-hidden px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium transition-all duration-500 hover:scale-105">
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                  <span className="relative z-10 group-hover:text-black transition duration-500">
                    Explore Solutions
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Bottom Fade */}

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* ===================================================== */}
        {/* CONTACT SECTION */}
        {/* ===================================================== */}

        <section
          id="contact-form"
          className="relative py-20 md:py-28 bg-[#111111] overflow-hidden"
        >
          {/* Background Glow */}

          <div className="absolute top-10 left-10 w-72 h-72 bg-[#fed42a]/5 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-widest text-[#fed42a] mb-2 md:mb-3 font-semibold">
                  Contact Us
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Let’s{" "}
                  <span className="text-[#fed42a]">
                    Connect
                  </span>
                </h2>

                <p className="mt-4 md:mt-6 text-[#CCCCCC] text-sm sm:text-base md:text-lg leading-relaxed">
                  We welcome inquiries from physicians,
                  clinics, MedSpas, and healthcare
                  organizations seeking advanced medical
                  technologies.
                </p>
              </div>

              {/* Features */}

              <div className="space-y-4">
                {[
                  "Professional consultation tailored to your practice",
                  "Fast response from our expert team",
                  "Advanced medical technology guidance",
                  "Support for partnerships and distribution",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 mt-2 bg-[#fed42a] rounded-full"></span>

                    <p className="text-[#CCCCCC] text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* IMAGE */}

              <div className="relative rounded-3xl overflow-hidden border border-[#222] group cursor-pointer">
                <Image
                  src="/home/tmsbg.jpg"
                  alt="Medical Consultation"
                  width={700}
                  height={500}
                  className="object-cover w-full h-[250px] sm:h-[320px] md:h-[360px] transition duration-700 group-hover:scale-110"
                  priority
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Gold Hover Overlay */}

                <div className="absolute inset-0 bg-gradient-to-r from-[#fed42a]/0 via-[#fed42a]/5 to-[#fed42a]/20 opacity-0 group-hover:opacity-100 transition duration-700"></div>

                {/* Content */}

                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-10">
                  <span className="inline-block px-4 py-1 mb-4 rounded-full bg-[#fed42a]/15 border border-[#fed42a]/20 text-[#fed42a] text-xs tracking-wider uppercase">
                    Healthcare Support
                  </span>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-[#fed42a] transition duration-500">
                    Professional Medical Support
                  </h3>

                  <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-md leading-relaxed">
                    Personalized support for clinics,
                    physicians, and healthcare providers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#181818] shadow-[0_0_40px_rgba(254,212,42,0.08)] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#222]">
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Form
                </h3>

                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  />

                  <input
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                    required
                    placeholder="Clinic / Organization"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  />

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  >
                    <option value="">Select Role</option>

                    <option>
                      Physician (MD / DO)
                    </option>

                    <option>
                      Nurse Practitioner / PA
                    </option>

                    <option>
                      Clinic Administrator
                    </option>

                    <option>
                      MedSpa Owner
                    </option>

                    <option>
                      IPA / Health Planner
                    </option>

                    <option>Other</option>
                  </select>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  />

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-3 bg-[#111111] border border-[#333] rounded-xl focus:ring-1 focus:ring-[#fed42a] outline-none"
                  />

                  {/* Submit Button */}

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full py-3 rounded-xl border border-[#fed42a]/40 bg-[#fed42a]/10 text-white font-medium transition-all duration-500 hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 bg-[#fed42a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                    <span className="relative z-10 group-hover:text-black transition duration-500">
                      Submit Inquiry
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ===================================================== */}
          {/* TOAST */}
          {/* ===================================================== */}

          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -40, x: 40 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-[#181818] border border-[#333] shadow-lg px-4 sm:px-6 py-3 sm:py-4 rounded-xl z-50"
              >
                <p className="text-sm text-white">
                  ✅ Thank you! Your message has been sent.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </App_layout>
  );
}