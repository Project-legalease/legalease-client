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
      <div className="w-full px-16 py-16 overflow-y-auto">
        <DashboardHeader />
        {children}</div>
    </div>
  );
}
