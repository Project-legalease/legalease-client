"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbAlertCircle } from "react-icons/tb";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  lawyerName: z.string({ required_error: "Add a Lawyers name" }).min(1, "Add a Lawyers name").trim(),
  documents: z.any().refine((files) => files.length > 0, "At least one document is required"),
});

function VerifyLawyers(): React.JSX.Element {
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
      <h1 className="text-3xl text-primary-blue48 font-lilita mt-4 text-center">Verify Lawyer Profiles</h1>
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
            name="lawyerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lawyer Name</FormLabel>
                <FormControl>
                  <input type="text" placeholder="Enter lawyer's name" {...field} className="w-full px-3 py-2 border rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="documents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Documents</FormLabel>
                <FormControl>
                  <input type="file" multiple {...field} className="w-full px-3 py-2 border rounded-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end gap-2 mt-4 mb-10">
            <button
              type="submit"
              className="w-fit px-8 py-2 text-white font-bold text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
              {loading ? "Loading..." : "Verify"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default VerifyLawyers;
