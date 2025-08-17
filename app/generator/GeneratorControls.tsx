"use client";

import Card from "@/components/ui/Cards";
import Button from "@/components/ui/Buttoons";

interface GeneratorControlsProps {
  settings: {
    length: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    excludeSimilar: boolean;
    excludeAmbiguous: boolean;
  };
  onSettingsChange: (settings: GeneratorControlsProps["settings"]) => void;
  onGenerate: () => void;
}

export default function GeneratorControls({
  settings,
  onSettingsChange,
  onGenerate,
}: GeneratorControlsProps) {
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value);
    onSettingsChange({ ...settings, length });
  };

  const handleToggle = (key: keyof typeof settings) => {
    onSettingsChange({ ...settings, [key]: !settings[key] });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">
        Password Settings
      </h3>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-gray-300">Length</label>
            <span className="text-sm text-gray-400">
              {settings.length} characters
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="6"
              max="128"
              value={settings.length}
              onChange={handleLengthChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg pointer-events-none"
              style={{ width: `${((settings.length - 8) / (128 - 8)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>6</span>
            <span>128</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-300">Character Types</h4>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.includeUppercase}
                onChange={() => handleToggle("includeUppercase")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.includeUppercase
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.includeUppercase && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">Uppercase (A-Z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.includeLowercase}
                onChange={() => handleToggle("includeLowercase")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.includeLowercase
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.includeLowercase && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">Lowercase (a-z)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.includeNumbers}
                onChange={() => handleToggle("includeNumbers")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.includeNumbers
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.includeNumbers && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">Numbers (0-9)</span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.includeSymbols}
                onChange={() => handleToggle("includeSymbols")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.includeSymbols
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.includeSymbols && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">Symbols (!@#$%^&*)</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-300">
            Advanced Options
          </h4>

          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.excludeSimilar}
                onChange={() => handleToggle("excludeSimilar")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.excludeSimilar
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.excludeSimilar && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">
                Exclude similar characters (il1Lo0O)
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.excludeAmbiguous}
                onChange={() => handleToggle("excludeAmbiguous")}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  settings.excludeAmbiguous
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {settings.excludeAmbiguous && (
                  <i className="ri-check-line text-white text-sm"></i>
                )}
              </div>
              <span className="ml-3 text-gray-300">
                Exclude ambiguous characters
              </span>
            </label>
          </div>
        </div>

        <Button onClick={onGenerate} className="w-full">
          <i className="ri-refresh-line mr-2"></i>
          Generate New Password
        </Button>
      </div>
    </Card>
  );
}
