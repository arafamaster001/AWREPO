"use client";

import {
  BadgeDollarSign,
  Home,
  LockKeyhole,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/admin/dashboard",
      icon: <Home className="w-5 h-5" />,
      label: "Dashboard",
    },
    {
      href: "/admin/product",
      icon: <ShoppingCart className="w-5 h-5" />,
      label: "Upload Product",
    },
    {
      href: "/admin/sale",
      icon: <BadgeDollarSign className="w-5 h-5" />,
      label: "Sales",
    },
    {
      href: "/admin/purchase",
      icon: <ShoppingBag className="w-5 h-5" />,
      label: "Orders",
    },
    {
      href: "/admin/stocks",
      icon: <Warehouse className="w-5 h-5" />,
      label: "Stocks",
    },
    {
      href: "/admin/settings",
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
    },
    {
      href: "/admin/logout",
      icon: <LogOut className="w-5 h-5" />,
      label: "Logout",
    },
  ];

  return (
    <aside className="col-span-2 bg-white/80 backdrop-blur-xl border-r border-gray-200 shadow-xl p-6 flex flex-col h-screen sticky top-0">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center gap-3 whitespace-nowrap">
          <span className="p-2 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 shadow-md">
            <LockKeyhole className="w-5 h-5 text-white" />
          </span>
          <span className="text-transparent bg-clip-text font-[1.1rem] bg-gradient-to-r from-indigo-700 to-slate-800">
            Admin Panel
          </span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2 flex-1">
        {navItems.map(({ href, icon, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 px-5 py-3 text-[15px] font-medium rounded-xl transition-all duration-200 group
                ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 shadow-inner"
                    : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                }`}
            >
              <span
                className={`${
                  isActive
                    ? "text-indigo-700"
                    : "text-slate-500 group-hover:text-indigo-600"
                }`}
              >
                {icon}
              </span>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Optional Footer Section (User, Logo, Version) */}
      <div className="mt-10 text-xs text-slate-400 text-center">
        © 2025 Arafa-Webs Inc.
      </div>
    </aside>
  );
};

export default SideBar;
