"use client";

import React, { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(1, "Name is required").trim(),
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email({ message: "Invalid email address" }),
  specialization: z.string({ required_error: "Specialization is required" }).min(1, "Specialization is required").trim(),
  experience: z.string({ required_error: "Experience is required" }).min(1, "Experience is required").trim(),
  agree: z.boolean({ required_error: "You must agree to the terms and conditions" }).refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

const specializations = [
  { value: "corporate_law", label: "Corporate Law" },
  { value: "criminal_law", label: "Criminal Law" },
  { value: "family_law", label: "Family Law" },
  { value: "intellectual_property", label: "Intellectual Property" },
  { value: "tax_law", label: "Tax Law" },
  { value: "real_estate", label: "Real Estate" },
  { value: "employment_law", label: "Employment Law" },
  { value: "civil_rights", label: "Civil Rights" },
  { value: "imigration", label: "Imigration" },
  { value: "environmental_law", label: "Environmental Law" },
  { value: "bankruptcy", label: "Bankruptcy" },
  { value: "entertainment_law", label: "Entertainment Law" },
  { value: "healthcare", label: "Healthcare" },
  { value: "international_law", label: "International Law" },
  { value: "military_law", label: "Military Law" },
  { value: "social_security", label: "Social Security" },
  { value: "workers_compensation", label: "Workers Compensation" },
  { value: "other", label: "Other" },
];

const ApplyAsALawyer: React.FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      specialization: "",
      experience: "",
      agree: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
    // Handle form submission
    setLoading(false);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Apply as a Lawyer</h1>
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
                <FormLabel className="text-primary-dark32/80 font-semibold">Name</FormLabel>
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
                <FormLabel className="text-primary-dark32/80 font-semibold">Email</FormLabel>
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
            name="specialization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Specialization</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a specialization" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specializations.map((specialization) => (
                      <SelectItem key={specialization.value} value={specialization.value}>
                        {specialization.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Experience</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Describe your experience"
                    {...field}
                    className="w-full h-32 py-2 resize-none rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <label className="flex items-center">
                    <input type="checkbox" {...field} className="mr-2 border-primary-dark32/70 focus-visible:outline-none focus:outline-none" />
                    <span className="text-primary-dark32/80 font-semibold">I agree to the terms and conditions</span>
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end gap-2 mt-4">
            <Link href="/">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="bg-primary-orange61/85 text-white">
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplyAsALawyer;
