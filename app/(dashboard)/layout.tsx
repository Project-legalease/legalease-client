import type { Metadata } from "next";
import React from "react";
import NavView from "@/components/dashboard/nav-view";
import DashboardHeader from "@/components/dashboard/header"

export const metadata: Metadata = {
  title: "Dashboard | LegalEase",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <NavView />
      <div className="w-full px-2 sm:px-8 md:px-16 py-8 md:py-16 overflow-y-auto">
        <DashboardHeader />
        <div className="px-3">{children}</div>
      </div>
    </div>
  );
}
