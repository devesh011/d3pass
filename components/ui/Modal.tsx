"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
      <div onClick={onClose} className="fixed inset-0" />
      <div
        className={`relative w-full ${sizes[size]} bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl my-12 max-h-[70vh] overflow-y-auto hide-scroll`}
      >
        {title && (
          <div className="sticky top-0 z-10 flex items-center justify-center p-4 border-b border-white/10 bg-gray-900/90 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-white text-center">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
