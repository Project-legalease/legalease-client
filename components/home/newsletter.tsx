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

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
});

export default function Newsletter(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    <div className="px-6 py-20 mt-20 bg-primary-whiteF5">
      <h2 className="uppercase text-4xl text-primary-orange61 font-lilita text-center">
        Get first hand updates from LegalEase
      </h2>
      <p className="text-center text-primary-blue68 italic font-normal text-xl">
        Subscribe To Our Newsletter
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-md sm:max-w-md mt-4 w-full sm:w-3/5 px-6 rounded-lg mx-auto fade-in-30"
        >
          {!!error && (
            <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
              <TbAlertCircle className="size-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          <div className="flex items-start justify-center gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <input
                      placeholder="Email Address"
                      {...field}
                      className="w-full h-12 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              className="w-fit px-4 py-2 h-12 text-white text-sm bg-primary-orange61/85 rounded-md border border-primary-orange61 hover:bg-primary-orange61 duration-300"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
