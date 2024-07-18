import { Metadata } from "next";
import ApplyAsALawyer from "@/components/apply-as-a-lawyer/applyAsLawyer";

export const metadata: Metadata = {
  title: "Apply As A Lawyer | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <ApplyAsALawyer />;
}