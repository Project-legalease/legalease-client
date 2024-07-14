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
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
});

export default function ResetPasswordForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
      router.push("/password/new");
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
            RESET YOUR PASSWORD
          </h2>
          <p className="mt-0 text-center text-primary-dark32 italic font-normal text-sm">
            we will send a one time code to your email address
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
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-2 mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </div>
      </form>
    </Form>
  );
}
