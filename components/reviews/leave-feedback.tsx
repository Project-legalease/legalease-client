"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TbAlertCircle } from "react-icons/tb";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import ReactStars from "react-stars";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name is required").trim(),
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid email address" }),
  lawyer: z.string({ required_error: "Lawyer is required" }).min(1, "Lawyer is required").trim(),
  rating: z.number({ required_error: "Rating is required" }).min(1, "Rating is required"),
  feedback: z.string({ required_error: "Lawyer is required" }).min(1, "Lawyer is required").trim(),
});

const lawyers = [
  { value: "lawyer1", label: "John Doe" },
  { value: "lawyer2", label: "Jane Smith" },
  { value: "lawyer3", label: "Mary Jones" },
  { value: "lawyer4", label: "Allen Poe" },
  { value: "lawyer5", label: "Christian Smith" },
  { value: "lawyer6", label: "Joachim South" },
];

function LeaveFeedback(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      feedback: "",
      rating: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    // Add your form submission logic here
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4 w-1/2">
      <h1 className="text-3xl text-center text-primary-blue48 font-lilita mt-4 mb-4">Leave A Feedback</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!!error && (
            <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
              <TbAlertCircle className="size-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-bold">Name:</FormLabel>
                <FormControl>
                  <input
                    placeholder="John Doe"
                    {...field}
                    className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-bold">Email Address:</FormLabel>
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

          <FormField
            control={form.control}
            name="lawyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lawyer</FormLabel>
                <FormControl>
                  <select {...field} className="w-full px-3 py-2 border border-black/70 rounded-md text-primary-dark32/80">
                    <option value="">Select a lawyer</option>
                    {lawyers.map((lawyer) => (
                      <option key={lawyer.value} value={lawyer.value}>
                        {lawyer.label}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32 font-bold">Rating:</FormLabel>
                <FormControl>
                  <ReactStars
                    count={5}
                    size={30}
                    color2={"#F17861"}
                    {...field}
                    onChange={(value: any) => field.onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback</FormLabel>
                <FormControl>
                  <textarea placeholder="Enter your feedback" {...field} className="h-32 w-full px-3 py-2 border border-black/70 rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end gap-2 mt-4 mb-10">
            <button
              type="submit"
              className="w-fit px-10 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
              {loading ? "Loading..." : "Verify"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default LeaveFeedback;
