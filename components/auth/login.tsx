"use client";

import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TbAlertCircle } from "react-icons/tb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export default function LoginForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [pwdInputType, setPwdInputType] = useState<"password" | "text">(
    "password"
  );
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey) {
      setPwdInputType("text");
    }
  };

  const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setPwdInputType("password");
  };

  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    setError("");
    setLoading(true);
    console.log(values);
    //   try {
    //     const res = await axios.post("/auth/login", values);
    //     if (res.status === 200) {
    //       await signIn("credentials", {
    //         ...values,
    //         redirect: true,
    //         redirectTo: "/dashboard",
    //       });

    //       toast.success("Successfully login!");
    //       setLoading(false);
    //     }
    //     setLoading(false);
    //   } catch (err: Error | AxiosError | any) {
    //     if (err.response && err.response.status > 400) {
    //       setError(err.response.data.error);
    //     }
    //     setLoading(false);
    //   }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
         className="space-y-5 max-w-md sm:max-w-md py-10 w-full px-6 rounded-lg mx-auto fade-in-30"
      >
        <div>
          <h2 className="text-3xl text-center text-primary-blue48 font-lilita mt-20">
            WELCOME BACK!
          </h2>
          <p className="mt-0 text-center text-primary-dark32 italic font-normal text-sm">
            Login to access your personal account
          </p>
        </div>
        {!!error && (
          <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
            <TbAlertCircle className="size-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">
                Email
              </FormLabel>
              <FormControl>
                <input
                  placeholder="email@example.com"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">
                Password
              </FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  onKeyDown={keyDownHandler}
                  onKeyUp={keyUpHandler}
                />
              </FormControl>
              <p className="text-xs text-primary-dark1E/60">
                Hold Ctrl to display your password temporarily.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <Link
            href="/password/reset"
            className="w-full px-4 py-2 text-sm text-primary-dark32 bg-transparent "
          >
            Forgot Password?
          </Link>
        </div>
        <div className="font-inria">
          <div className="flex items-center my-10">
            <hr className="w-full" />
            <p className="w-full text-center text-primary-dark32/80 text-sm font-normal mx-2">
              or continue with
            </p>
            <hr className="w-full" />
          </div>
          <div className="grid gap-2 grid-cols-2">
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FcGoogle className="mr-2" /> <span>Google</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaLinkedinIn className="mr-2" /> <span>LinkedIn</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaFacebookF className="mr-2" /> <span>Facebook</span>
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-primary-blue48 text-sm rounded-md border hover:text-primary-orange61 border-primary-orange61 bg-transparent duration-300">
              <FaTwitter className="mr-2" /> <span>Twitter</span>
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
