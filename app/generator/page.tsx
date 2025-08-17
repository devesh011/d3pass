"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/ui/Cards";
import GeneratorControls from "./GeneratorControls";
import PasswordDisplay from "./PassowrdDisplay";
import { Copy } from "@/components/ui/Copy";
import { CheckCheck } from "@/components/ui/CheckCheck";

export default function Generator() {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });

  const [history, setHistory] = useState<string[]>([]);

  const generatePassword = () => {
    let charset = "";

    if (settings.includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (settings.includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (settings.includeNumbers) charset += "0123456789";
    if (settings.includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (settings.excludeSimilar) {
      charset = charset.replace(/[il1Lo0O]/g, "");
    }

    if (settings.excludeAmbiguous) {
      charset = charset.replace(/[{}[\]()\/\\'"~,;.<>]/g, "");
    }

    let result = "";
    for (let i = 0; i < settings.length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(result);

    if (result && !history.includes(result)) {
      setHistory((prev) => [result, ...prev.slice(0, 9)]);
    }
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];

    return {
      score: strength,
      label: labels[strength] || "Very Weak",
      color: colors[strength] || "bg-red-500",
    };
  };

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Password Generator
            </h1>
            <p className="text-gray-300">
              Create strong, unique passwords for your accounts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <PasswordDisplay
                password={password}
                strength={strength}
                onCopy={(text) => copyToClipboard(text, -1)} // Use -1 or ignore copiedIndex here
                onGenerate={generatePassword}
              />

              <GeneratorControls
                settings={settings}
                onSettingsChange={setSettings}
                onGenerate={generatePassword}
              />
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Password Tips
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-green-400 mt-0.5"></i>
                    <span>Use at least 12 characters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-green-400 mt-0.5"></i>
                    <span>Include uppercase and lowercase letters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-green-400 mt-0.5"></i>
                    <span>Add numbers and symbols</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-green-400 mt-0.5"></i>
                    <span>Avoid personal information</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <i className="ri-check-line text-green-400 mt-0.5"></i>
                    <span>Use unique passwords for each account</span>
                  </div>
                </div>
              </Card>

              {history.length > 0 && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Recent Passwords
                  </h3>
                  <div className="space-y-2">
                    {history.map((historyPassword, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
                      >
                        <span className="font-mono text-sm text-gray-300 truncate flex-1">
                          {historyPassword}
                        </span>

                        <div
                          onClick={() =>
                            copyToClipboard(historyPassword, index)
                          }
                          className="ml-2 cursor-pointer transition-transform hover:scale-110"
                        >
                          <span className="w-5 h-5 flex items-center justify-center">
                            {copiedIndex === index ? (
                              <CheckCheck className="w-5 h-5 text-green-400 text-[10px] leading-none" />
                            ) : (
                              <Copy className="w-5 h-5 text-blue-400 transition-all duration-300" />
                            )}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
