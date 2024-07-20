import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard | LegalEase",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
