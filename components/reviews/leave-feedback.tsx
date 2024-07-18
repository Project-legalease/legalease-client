"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TbAlertCircle } from "react-icons/tb";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  lawyer: z.string().nonempty("Lawyer is required"),
  rating: z.number().min(1, "Rating is required").max(5, "Rating must be between 1 and 5"),
  feedback: z.string().nonempty("Feedback is required"),
});

const lawyers = [
  { value: "lawyer1", label: "John Doe" },
  { value: "lawyer2", label: "Jane Smith" },
];

function LeaveFeedback(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    // Add your form submission logic here
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leave Feedback</h1>
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
            name="lawyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lawyer</FormLabel>
                <FormControl>
                  <select {...field} className="w-full px-3 py-2 border rounded-md">
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
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <input type="number" placeholder="Rate out of 5" {...field} className="w-full px-3 py-2 border rounded-md" min={1} max={5} />
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
                  <textarea placeholder="Enter your feedback" {...field} className="w-full px-3 py-2 border rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end gap-2 mt-4 mb-10">
            <button
              type="submit"
              className="w-fit px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
              {loading ? "Loading..." : "Verify"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default LeaveFeedback;
