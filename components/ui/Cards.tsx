"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  hover = false,
}: CardProps) {
  const baseStyles =
    "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl";
  const hoverStyles = hover
    ? "hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
    : "";

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
