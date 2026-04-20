"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import App_layout from "@/layout/app_layout";

type VideoType = {
  id: number;
  title: string;
  video: string;
};

export default function ProductVideos() {
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const videos: VideoType[] = [
    {
      id: 1,
      title: "Electromagnetic Stimulation",
      video: "/videos/video1.mp4",
    },
    {
      id: 2,
      title: "TMS Technology",
      video: "/videos/video2.mp4",
    },
  ];

  return (
    <App_layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111111]">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Product <span className="text-[#888888]">Videos</span>
          </h2>

          <p className="mt-4 text-[#888888] max-w-2xl mx-auto">
            Watch real demonstrations of our advanced medical technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {videos.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden border border-[#222]"
            >

              {/* VIDEO PREVIEW */}
              <video
                src={item.video}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setActiveVideo(item.video)}
                  className="w-16 h-16 rounded-full bg-white text-black text-2xl flex items-center justify-center hover:scale-110 transition"
                >
                  ▶
                </button>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-sm">
                <h3 className="text-white text-center font-medium group-hover:text-[#888888] transition">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

        {/* MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-4xl">

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-[#888888]"
              >
                ✕
              </button>

              <video
                controls
                autoPlay
                className="w-full rounded-xl border border-[#222]"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>

            </div>
          </div>
        )}

      </div>
    </App_layout>
  );
}