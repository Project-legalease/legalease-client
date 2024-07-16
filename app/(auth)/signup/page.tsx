import SignupForm from "@/components/auth/signup";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create an account | LegalEase",
  description: "Making legal access easy",
};

function SignUp() {
  return (
    <ScrollArea className="h-screen w-full p-8 bg-primary-whiteF5 drop-shadow-xl">
      <div className="flex items-center gap-1 text-base text-primary-dark32/80 text-center font-inria">
        <p className="border-b border-transparent">Already have an account?</p>
        <Link
          href="/login"
          className="flex items-center cursor-pointer text-primary-dark1E w-fit border-b border-transparent hover:border-b hover:border-primary-dark32 duration-300"
        >
          <span>Login</span>
          <ArrowRight className="text-primary-dark1E size-3 inline" />
        </Link>
      </div>
      <SignupForm />
    </ScrollArea>
  );
}

export default SignUp;
