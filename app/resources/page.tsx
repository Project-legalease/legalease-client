import { Metadata } from "next";
import LegalResources from "@/components/resources/legal-resources";

export const metadata: Metadata = {
  title: "Legal Resources | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <LegalResources />;
}
