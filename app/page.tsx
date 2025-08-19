"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const taglines = [
  "Zero-knowledge. Full control.",
  "Military-grade encryption.",
  "Sync securely across devices.",
  "Built for privacy-first users.",
  "Simple. Fast. Trusted.",
];

function RotatingTagline() {
  const [text, setText] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = taglines[taglineIndex];
    if (charIndex < current.length) {
      const typing = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 45); // Typing speed
      return () => clearTimeout(typing);
    } else {
      const hold = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 2000); // Hold after fully typed
      return () => clearTimeout(hold);
    }
  }, [charIndex, taglineIndex]);

  return (
    <p className="text-base sm:text-lg md:text-xl text-blue-300 font-medium max-w-2xl mx-auto min-h-[2.5rem]">
      <span className="border-r-2 border-blue-500 pr-1 animate-pulse">
        {text}
      </span>
    </p>
  );
}

// function RotatingTagline() {
//   const [text, setText] = useState("");
//   const [taglineIndex, setTaglineIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const current = taglines[taglineIndex];
//     const typingSpeed = deleting ? 25 : 50;

//     const handleTyping = () => {
//       if (!deleting && charIndex < current.length) {
//         setText(current.substring(0, charIndex + 1));
//         setCharIndex((prev) => prev + 1);
//       } else if (deleting && charIndex > 0) {
//         setText(current.substring(0, charIndex - 1));
//         setCharIndex((prev) => prev - 1);
//       } else if (!deleting && charIndex === current.length) {
//         setTimeout(() => setDeleting(true), 1800);
//         return;
//       } else if (deleting && charIndex === 0) {
//         setDeleting(false);
//         setTaglineIndex((prev) => (prev + 1) % taglines.length);
//         return;
//       }
//     };

//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [charIndex, deleting, taglineIndex]);

//   return (
//     <p className="text-base sm:text-lg md:text-xl text-blue-300 font-medium max-w-2xl mx-auto min-h-[2.5rem] flex justify-center items-center gap-1">
//       <span>{text}</span>
//     </p>
//   );
// }

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Simulated Fixed Background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20cybersecurity%20digital%20fortress%20with%20neon%20blue%20and%20purple%20glowing%20elements%2C%20high-tech%20security%20interface%2C%20futuristic%20password%20vault%20visualization%2C%20minimalist%20dark%20background%20with%20subtle%20geometric%20patterns%2C%20professional%20security%20technology%20aesthetic%2C%20clean%20and%20modern%20design&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/35 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6 animate-fadeInUp">
              One Vault.
              <br />
              <span className="flicker-text">
                Instantly. Securely. Everywhere.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal max-w-2xl mx-auto animate-fadeIn">
              Secured with end-to-end encryption and{" "}
              <span className="text-blue-400">zero-knowledge tech</span>,{" "}
              <span className="text-white font-semibold">D3PASS</span> gives you
              full control —
              <span className="italic text-gray-400"> not even us.</span>
            </p>
            {/* Typing animation tagline */}
            <RotatingTagline />
            <SignedOut>
              <Link href="/sign-in">
                <motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-6 py-2 text-sm sm:text-base md:text-lg font-medium text-white border border-white/20 backdrop-blur-md bg-white/5 rounded-xl transition duration-300"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <i className="ri-login-circle-line text-lg"></i>
                    Login
                  </span>
                </motion.button>
              </Link>
            </SignedOut>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
