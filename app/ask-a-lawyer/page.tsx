import AskALawyer from "@/components/ask-a-lawyer/askAlawyer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask A Lawyer | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <AskALawyer />;
}