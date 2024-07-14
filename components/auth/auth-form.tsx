"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaRegUser } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import LoginForm from "./login";
import SignupForm from "./signup";

function AuthForm({ authType }: { authType: "login" | "signup" }) {
  const [formType, setFormType] = useState<"login" | "signup">(authType);

  const changeFormType = () => {
    setFormType(formType == "login" ? "signup" : "login");
  };

  return (
    <Sheet
      onOpenChange={(val) => {
        if (!val) {
          setFormType(authType);
        }
      }}
    >
      <SheetTrigger asChild>
        {authType == "login" ? (
          <button className="w-fit flex items-center gap-1 bg-primary-orange61 py-2 px-4 rounded-lg shadow-md text-sm text-white">
            <FaRegUser size={10} />
            <span>Login</span>
          </button>
        ) : (
          <button className="w-fit py-2 px-4 text-sm text-primary-dark32">
            Sign up
          </button>
        )}
      </SheetTrigger>
      <SheetContent className="bg-primary-whiteF5 w-full max-w-[100vw] sm:max-w-[50vw] overflow-y-auto">
        <SheetHeader>
          <div className="flex items-center gap-1 text-base text-primary-dark32/80 text-center font-inria">
            <p className="border-b border-transparent">
              {formType == "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <p
              onClick={changeFormType}
              className="flex items-center cursor-pointer text-primary-dark1E w-fit border-b border-transparent hover:border-b hover:border-primary-dark32 duration-300"
            >
              <span>{formType == "login" ? "Create one now" : "Login"}</span>
              <ArrowRight className="text-primary-dark1E size-3 inline" />
            </p>
          </div>
        </SheetHeader>
        {formType == "login" ? <LoginForm /> : <SignupForm />}
      </SheetContent>
    </Sheet>
  );
}

export default AuthForm;
