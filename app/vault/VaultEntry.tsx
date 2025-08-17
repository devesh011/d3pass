"use client";

import { useState } from "react";
import Card from "@/components/ui/Cards";
import Button from "@/components/ui/Buttoons";

interface VaultEntryProps {
  entry: {
    id: number;
    title: string;
    username: string;
    password: string;
    category: string;
    icon: string;
    lastUsed: string;
    notes?: string;
    url?: string;
  };
}

export default function VaultEntry({ entry }: VaultEntryProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  const copyToClipboard = async (
    text: string,
    type: "username" | "password"
  ) => {
    await navigator.clipboard.writeText(text);
    setCopyStatus("copied");
    setTimeout(() => setCopyStatus("idle"), 2000);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      social: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      banking: "bg-green-500/20 text-green-400 border-green-500/30",
      work: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      personal: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      shopping: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    };
    return (
      colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
    );
  };

  return (
    <Card className="p-6" hover>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <i className={`ri-${entry.icon} text-white`}></i>
          </div>
          <div>
            <h3 className="font-semibold text-white">{entry.title}</h3>
            <p className="text-sm text-gray-400">Last used {entry.lastUsed}</p>
          </div>
        </div>

        <div
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
            entry.category
          )}`}
        >
          {entry.category}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <p className="text-white truncate">{entry.username}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(entry.username, "username")}
            className="ml-2"
          >
            <i className="ri-file-copy-line"></i>
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <p className="text-white font-mono">
              {showPassword ? entry.password : "••••••••••••"}
            </p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`ri-${showPassword ? "eye-off" : "eye"}-line`}></i>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(entry.password, "password")}
            >
              <i className="ri-file-copy-line"></i>
            </Button>
          </div>
        </div>

        <div className="mb-2">
          <h4 className="text-sm font-semibold text-white">Website</h4>
          {entry.url ? (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              {entry.url}
            </a>
          ) : (
            <p className="text-gray-500 italic">No website provided</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Notes
          </label>
          {entry.notes ? (
            <p className="text-sm text-gray-400">{entry.notes}</p>
          ) : (
            <p className="text-sm text-gray-500 italic">No notes added</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <i className="ri-edit-line mr-1"></i>
            Edit
          </Button>
          <Button variant="ghost" size="sm">
            <i className="ri-share-line mr-1"></i>
            Share
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-400 hover:text-red-300"
        >
          <i className="ri-delete-bin-line"></i>
        </Button>
      </div>

      {copyStatus === "copied" && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          Copied!
        </div>
      )}
    </Card>
  );
}
