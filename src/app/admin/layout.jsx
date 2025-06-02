"use client";  
import React, { useEffect } from "react";
import SideBar from "../Components/Sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      document.body.classList.add("admin-page");
    } else {
      document.body.classList.remove("admin-page");
    }
  }, [pathname]);

  return (
    <div className="grid grid-cols-12 min-h-screen">
    
      <SideBar />
      <div className="col-span-8 p-4">{children}</div>
    </div>
  );
}
