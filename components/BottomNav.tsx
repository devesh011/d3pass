"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/vault", icon: "ri-lock-fill", label: "Vault" },
    { href: "/generator", icon: "ri-key-fill", label: "Generator" },
    { href: "/settings", icon: "ri-settings-fill", label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-white/10 z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 ${
              isActive(item.href)
                ? "text-[#00d4ff] bg-[#00d4ff]/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <i className={`${item.icon} text-xl mb-1`}></i>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
