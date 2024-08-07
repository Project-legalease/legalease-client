import ClientFeedback from "@/components/home/client-feedback";
import LawyerExpertise from "@/components/home/expertise";
import FeaturedLawyers from "@/components/home/featured-lawyers";
import Intro from "@/components/home/intro";
import LookingForLawyer from "@/components/home/looking";
import Newsletter from "@/components/home/newsletter";
import GotQuestions from "@/components/home/questions";
import WhatIsLegalEase from "@/components/home/what-is-legal-ease";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | LegalEase",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <WhatIsLegalEase />
      <FeaturedLawyers />
      <GotQuestions />
      <LookingForLawyer />
      <LawyerExpertise />
      <ClientFeedback />
      <Newsletter />
    </main>
  );
}
