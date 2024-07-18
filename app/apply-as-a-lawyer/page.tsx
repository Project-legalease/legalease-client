import { Metadata } from "next";
import Apply from "@/components/apply-as-a-lawyer/apply";

export const metadata: Metadata = {
  title: "Apply As A Lawyer | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <Apply />;
}