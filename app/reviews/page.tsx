import { Metadata } from "next";
import LeaveFeedback from "@/components/reviews/leave-feedback";

export const metadata: Metadata = {
  title: "Verify A Lawyer | LegalEase",
  description: "Making legal access easy",
};

function ReviewPage() {
  return (
    <div className="relative min-h-screen w-full p-8 bg-cover drop-shadow-xl bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/feedback.jpg')] opacity-30 bg-cover z-0"></div>
      <div className="relative z-10">
        <LeaveFeedback />
      </div>
    </div>
  );
}


export default ReviewPage;