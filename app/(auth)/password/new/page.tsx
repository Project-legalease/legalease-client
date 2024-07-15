import BackButton from "@/components/auth/back-button";
import NewPasswordForm from "@/components/auth/new-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password | LegalEase",
  description: "Making legal access easy",
};

function Page() {
  return (
    <div className="min-h-screen w-full p-8 bg-primary-whiteF5 drop-shadow-xl">
      <BackButton />
      <NewPasswordForm />
    </div>
  );
}

export default Page;
