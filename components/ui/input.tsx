"use client";

import { useState } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  icon?: string;
  showPasswordToggle?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export default function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  icon,
  showPasswordToggle = false,
  disabled = false,
  required = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
          <i className={`ri-${icon} text-gray-400`}></i>
        </div>
      )}
      <input
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={`w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
          icon ? "pl-12" : ""
        } ${showPasswordToggle ? "pr-12" : ""} ${className}`}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <i className={`ri-${showPassword ? "eye-off" : "eye"}-line`}></i>
        </button>
      )}
    </div>
  );
}
