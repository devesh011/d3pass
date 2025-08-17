"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/ui/Cards";
import Button from "@/components/ui/Buttoons";
import VaultHeader from "./VaultHeader";
import VaultEntry from "./VaultEntry";
import AddPasswordModal from "./AddPasswordModel";

export default function Vault() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "all",
    "social",
    "banking",
    "work",
    "personal",
    "shopping",
  ];

  const entries = [
    {
      id: 1,
      title: "Gmail",
      username: "john.doe@gmail.com",
      password: "Str0ng!Pa$$w0rd",
      category: "social",
      icon: "google-fill",
      lastUsed: "2 hours ago",
      notes: "",
      url: "",
    },
    {
      id: 2,
      title: "Chase Bank",
      username: "johndoe123",
      password: "Ch@se!2024",
      category: "banking",
      icon: "bank-fill",
      lastUsed: "1 day ago",
      notes: "Primary checking account",
      url: "https://chase.com",
    },
    {
      id: 3,
      title: "Slack - TechCorp",
      username: "john.doe",
      password: "Sl@ck_W0rk!",
      category: "work",
      icon: "slack-fill",
      lastUsed: "3 hours ago",
      notes: "Company workspace",
      url: "https://slack.com",
    },
    {
      id: 4,
      title: "LinkedIn",
      username: "john.doe.dev",
      password: "Link3d!n_2024",
      category: "social",
      icon: "linkedin-fill",
      lastUsed: "5 hours ago",
      notes: "Professional networking",
      url: "https://linkedin.com",
    },
    {
      id: 5,
      title: "Amazon",
      username: "johndoe@gmail.com",
      password: "Am@z0n_Sh0p!",
      category: "shopping",
      icon: "amazon-fill",
      lastUsed: "2 days ago",
      notes: "Online shopping account",
      url: "https://github.com", // 👈 This must exist
    },
    {
      id: 6,
      title: "Netflix",
      username: "john.doe.family",
      password: "N3tfl!x_2024",
      category: "personal",
      icon: "netflix-fill",
      lastUsed: "1 week ago",
      notes: "Family streaming account",
      url: "https://github.com", // 👈 This must exist
    },
  ];

  const filteredEntries = entries.filter((entry) => {
    const matchesCategory =
      selectedCategory === "all" || entry.category === selectedCategory;
    const matchesSearch =
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.username.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      all: "apps-2-fill",
      social: "share-fill",
      banking: "bank-fill",
      work: "briefcase-fill",
      personal: "user-fill",
      shopping: "shopping-bag-fill",
    };
    return icons[category] || "folder-fill";
  };

  return (
    <div className="min-h-screen pb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      <div className="pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <VaultHeader
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            entriesCount={filteredEntries.length}
          />

          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "primary" : "secondary"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  <i className={`ri-${getCategoryIcon(category)} mr-2`}></i>
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Vault Entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredEntries.map((entry) => (
              <VaultEntry key={entry.id} entry={entry} />
            ))}
          </div>

          {filteredEntries.length === 0 && (
            <Card className="p-12 text-center">
              <i className="ri-search-line text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                No entries found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or category filter
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
      >
        <i className="ri-add-line text-2xl"></i>
      </button>

      <AddPasswordModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
