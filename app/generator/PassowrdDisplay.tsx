"use client";

import { useState } from "react";
import Card from "@/components/ui/Cards";
import Button from "@/components/ui/Buttoons";
import { Copy } from "@/components/ui/Copy";
import { CheckCheck } from "@/components/ui/CheckCheck";

interface PasswordDisplayProps {
  password: string;
  strength: {
    score: number;
    label: string;
    color: string;
  };
  onCopy: (text: string) => void;
  onGenerate: () => void;
}

export default function PasswordDisplay({
  password,
  strength,
  onCopy,
  onGenerate,
}: PasswordDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await onCopy(password); // parent handles clipboard write
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Generated Password</h3>
        <Button onClick={onGenerate} size="sm">
          <i className="ri-refresh-line mr-2"></i>
          Generate
        </Button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <div className="bg-gray-800 rounded-lg p-4 border-2 border-dashed border-gray-600">
            {password ? (
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg text-white break-all">
                  {password}
                </span>
                <span
                  onClick={handleCopy}
                  className="w-5 h-5 flex items-center justify-center cursor-pointer"
                >
                  {copied ? (
                    <CheckCheck className="text-green-400 text-[20px] leading-none" />
                  ) : (
                    <Copy className="text-blue-400 text-[20px] leading-none" />
                  )}
                </span>
              </div>
            ) : (
              <div className="text-center py-8">
                <i className="ri-key-line text-4xl text-gray-400 mb-4"></i>
                <p className="text-gray-400">
                  Click Generate to create a password
                </p>
              </div>
            )}
          </div>
        </div>

        {password && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white tracking-wide">
                Password Strength
              </span>
              <span
                className={`text-sm font-semibold px-2 py-0.5 rounded-md transition-all duration-300 ${
                  strength.label === "Very Weak"
                    ? "bg-red-500/20 text-red-400"
                    : strength.label === "Weak"
                    ? "bg-orange-500/20 text-orange-400"
                    : strength.label === "Fair"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : strength.label === "Good"
                    ? "bg-blue-500/20 text-blue-400"
                    : strength.label === "Strong"
                    ? "bg-green-500/20 text-green-400"
                    : "text-gray-300"
                }`}
              >
                {strength.label}
              </span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
                style={{ width: `${(strength.score / 4) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Weak</span>
              <span>Strong</span>
            </div>
          </div>
        )}

        {password && (
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {password.length}
              </div>
              <div className="text-sm text-gray-400">Characters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {new Set(password).size}
              </div>
              <div className="text-sm text-gray-400">Unique</div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
