"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

const formSchema = z.object({
  otp: z
    .string({ required_error: "Enter OTP" })
    .min(1, " Email OTP")
    .min(6, "OTP must 6 digits")
    .max(6, "OTP must 6 digits")
    .regex(/^\d+$/, "OTP must only contain digits"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirmation: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export default function NewPasswordForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [pwdInputType, setPwdInputType] = useState<"password" | "text">(
    "password"
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
      otp: "",
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
      router.push("/login");
    }, 3000);
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
            SET NEW PASSWORD
          </h2>
          <p className="mt-0 text-center text-primary-dark32 italic font-normal text-sm">
            Enter the new password of your choice
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
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">
                OTP
              </FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  onKeyDown={keyDownHandler}
                  onKeyUp={keyUpHandler}
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
                New Password
              </FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  onKeyDown={keyDownHandler}
                  onKeyUp={keyUpHandler}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">
                Confirm your new password
              </FormLabel>
              <FormControl>
                <input
                  type={pwdInputType}
                  placeholder="******"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
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
            {loading ? "Loading..." : "Done"}
          </button>
        </div>
      </form>
    </Form>
  );
}
