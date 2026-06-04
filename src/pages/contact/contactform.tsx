"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type FormType = {
  name: string;
  clinic: string;
  role: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contactform() {
  const [showToast, setShowToast] = useState(false);

  const initialForm: FormType = {
    name: "",
    clinic: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] =
    useState<FormType>(initialForm);

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

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setShowToast(true);
    setFormData(initialForm);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#fed42a]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#fed42a]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full border border-[#fed42a]/30 bg-[#fed42a]/10 text-[#fed42a] text-xs uppercase tracking-[3px]">
                Contact Us
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let’s{" "}
                <span className="text-[#fed42a]">
                  Connect
                </span>
              </h2>

              <p className="mt-5 text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                We welcome inquiries from physicians,
                clinics, MedSpas, healthcare providers,
                distributors, and organizations seeking
                innovative medical and wellness technologies.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Professional consultation tailored to your practice",
                "Fast response from our expert team",
                "Advanced healthcare technology guidance",
                "Partnership and distribution support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#fed42a]" />

                  <p className="text-gray-300 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 group">
              <Image
                src="/home/tmsbg.jpg"
                alt="Healthcare"
                width={700}
                height={500}
                className="w-full h-[260px] sm:h-[320px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-4 py-1 rounded-full bg-[#fed42a]/10 border border-[#fed42a]/20 text-[#fed42a] text-xs uppercase tracking-wider">
                  Healthcare Support
                </span>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">
                  Professional Medical Support
                </h3>

                <p className="mt-3 text-gray-300 text-sm sm:text-base">
                  Personalized assistance for clinics,
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
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(254,212,42,0.08)]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Contact Form
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none"
                />

                <input
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleChange}
                  required
                  placeholder="Clinic / Organization"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none"
                />

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none"
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
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-[#fed42a] outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#fed42a] text-black font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-5 right-5 z-50 bg-[#111111] border border-[#fed42a]/30 rounded-xl px-5 py-3"
          >
            <p className="text-white text-sm">
              ✅ Thank you! Your inquiry has been submitted.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}