"use client";

import Input from "@/components/ui/input";

interface VaultHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  entriesCount: number;
}

export default function VaultHeader({
  searchTerm,
  setSearchTerm,
  entriesCount,
}: VaultHeaderProps) {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Password Vault
          </h1>
          <p className="text-gray-300">
            {entriesCount} {entriesCount === 1 ? "entry" : "entries"} in your
            secure vault
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="ri-search-line text-gray-400"></i>
            </div>
            <Input
              type="text"
              placeholder="Search passwords..."
              value={searchTerm}
              onChange={setSearchTerm}
              className="pl-10 w-full md:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
