"use client";

import Link from "next/link";
import { useState } from "react";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800/35 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
            <span className="text-2xl font-bold tracking-[0.2em] uppercase font-mono animate-pulse">
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text">
                D3
              </span>
              <span className="text-white">PASS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/vault"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Vault
            </Link>
            <Link
              href="/generator"
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Generator
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center space-x-2">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "ring-2 ring-purple-500",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            </SignedIn>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? "close" : "menu"}-line`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/vault"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Vault
              </Link>
              <Link
                href="/generator"
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Generator
              </Link>
              <div className="pt-4 border-t border-white/10">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center space-x-2">
                    <UserButton
                      appearance={{
                        elements: {
                          userButtonAvatarBox: "ring-2 ring-purple-500",
                        },
                      }}
                      afterSignOutUrl="/"
                    />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
