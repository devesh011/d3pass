"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-3">
                {/* Custom Transparent Hacker Icon */}
                <div className="w-9 h-9 flex items-center justify-center">
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="d3passGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M32 2L58 16V32C58 47 46 58 32 62C18 58 6 47 6 32V16L32 2Z"
                      stroke="url(#d3passGradient)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="transparent"
                    />
                    <path
                      d="M24 24 L18 32 L24 40"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 24 L46 32 L40 40"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Brand Text */}
                <span className="text-2xl font-bold tracking-[0.2em] uppercase font-mono">
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text">
                    D3
                  </span>
                  <span className="text-white">PASS</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your vault. Anywhere. Anytime. Secure password management with
              military-grade encryption and seamless synchronization across all
              your devices.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 D3pass. All rights reserved. | Built with security and
            privacy in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
