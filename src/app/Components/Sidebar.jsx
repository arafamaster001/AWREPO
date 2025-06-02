"use client";

import {
  Earth,
  Home,
  LockKeyhole,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/admin/dashboard",
      icon: <Home className="w-6 h-6" />,
      label: "Dashboard",
    },
    {
      href: "/admin/visitors",
      icon: <Earth className="w-6 h-6" />,
      label: "Visitor",
    },
    {
      href: "/admin/logout",
      icon: <LogOut className="w-6 h-6" />,
      label: "Logout",
    },
  ];

  return (
    <aside className="col-span-2 bg-gradient-to-b from-gray-900 via-gray-950 to-black border-r border-gray-800 shadow-lg p-6 flex flex-col h-screen sticky top-0">
      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex items-center gap-4 whitespace-nowrap select-none">
          <span className="p-3 rounded-full bg-gradient-to-tr from-indigo-700 to-purple-700 shadow-lg">
            <LockKeyhole className="w-6 h-6 text-white" />
          </span>
          Admin
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-3 flex-1">
        {navItems.map(({ href, icon, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-5 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 select-none
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-[0_0_10px_rgb(99,102,241)]"
                    : "text-gray-400 hover:bg-indigo-700 hover:text-white hover:shadow-lg"
                }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className={`transition-transform duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-indigo-300"
                } hover:scale-110`}
              >
                {icon}
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-12 text-xs text-gray-500 text-center select-none">
        © 2025 Arafa-Webs Inc.
      </div>
    </aside>
  );
};

export default SideBar;
