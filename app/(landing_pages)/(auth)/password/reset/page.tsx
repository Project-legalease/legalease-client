import BackButton from "@/components/auth/back-button";
import ResetPasswordForm from "@/components/auth/reset-password";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Reset password | LegalEase",
  description: "Making legal access easy",
};

function Page() {
  return (
    <div className="min-h-screen w-full p-8 bg-primary-whiteF5 drop-shadow-xl">
      <BackButton />
      <ResetPasswordForm />
    </div>
  );
}

export default Page;
