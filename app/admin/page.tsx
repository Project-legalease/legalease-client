import { Metadata } from "next";
import VerifyLawyers from "@/components/admin/verify-lawyers";

export const metadata: Metadata = {
  title: "Verify A Lawyer | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <VerifyLawyers />;
}