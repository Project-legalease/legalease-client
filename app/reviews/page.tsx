import { Metadata } from "next";
import LeaveFeedback from "@/components/reviews/leave-feedback";

export const metadata: Metadata = {
  title: "Verify A Lawyer | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <LeaveFeedback />;
}