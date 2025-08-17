"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30",
    ghost: "text-gray-300 hover:text-white hover:bg-white/10",
    danger:
      "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:border-red-400/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
