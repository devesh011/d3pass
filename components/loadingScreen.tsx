"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 20000); // minimum 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0f24] overflow-hidden text-white">
      {/* Your animated background and logo stuff here (same as before)... */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="relative w-28 h-28 flex items-center justify-center z-10"
      >
        {/* Outer neon ring spinner */}
        <div className="absolute inset-0 border-4 border-t-transparent border-b-purple-500 border-l-blue-500 border-r-transparent rounded-full animate-spin-slow blur-sm opacity-70" />

        {/* Transparent center D3 circle */}
        <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-md shadow-inner shadow-purple-800/10">
          <span className="font-saira text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 drop-shadow-[0_0_6px_rgba(139,92,246,0.7)]">
            D3
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-16 text-sm sm:text-base text-gray-300 tracking-wide animate-pulse z-10"
      >
        Preparing your vault...
      </motion.p>

      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_2px]" />
    </div>
  );
}
