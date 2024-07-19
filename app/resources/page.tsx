import { Metadata } from "next";
import LegalResources from "@/components/resources/legal-resources";

export const metadata: Metadata = {
  title: "Legal Resources | LegalEase",
  description: "Making legal access easy",
};


function ResourcesPage() {
  return (
    <div className="relative min-h-screen w-full p-8 bg-cover drop-shadow-xl bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/resources.jpg')] opacity-20 bg-cover z-0"></div>
      <div className="relative z-10">
        <LegalResources />
      </div>
    </div>
  );
}

export default ResourcesPage;