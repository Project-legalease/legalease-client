import LoginForm from "@/components/auth/login";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | LegalEase",
  description: "Making legal access easy",
};

function Login() {
  return (
    <div className="min-h-screen w-full p-8 bg-primary-whiteF5 drop-shadow-xl ">
      <div className="flex items-center gap-1 text-base text-primary-dark32/80 text-center font-inria">
        <p className="border-b border-transparent">
          Don&#39;t have an account?
        </p>
        <Link
          href="/signup"
          className="flex items-center cursor-pointer text-primary-dark1E w-fit border-b border-transparent hover:border-b hover:border-primary-dark32 duration-300"
        >
          <span>Create one now</span>
          <ArrowRight className="text-primary-dark1E size-3 inline" />
        </Link>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
