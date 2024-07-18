"use client";

import { z } from "zod";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  question: z
    .string({ required_error: "A Question is required" })
    .min(1, "A Question is required")
    .trim(),
});


export default function AskALawyer(): React.JSX.Element {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex md:flex">
          <div className="md:flex-shrink-0">
            <div className="w-full h-80 bg-cover md:w-56 bg-[url('/images/ask-a-lawyer.jpg')] w-[500px] border rounded-md"></div>
          </div>
          <div className="flex flex-col pl-4">
            <div className="uppercase tracking-wide text-3xl text-primary-blue48 font-lilita mt-4">
              Got Questions for a Legal Practitioner?
            </div>
            <h1 className="block text-lg font-medium text-primary-dark32 italic mb-2">
              We Have Answers!
            </h1>
            <div className=" py-4 px-8">
              <p className="mt-2 text-primary-dark32">
              Lawyers across the country have answered many user questions on Legal. Get answers today in our Q&A forum.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <span className="text-primary-orange61 font-bold">Ask a Question Anonymously:</span> Post your legal query without revealing your identity, and experienced lawyers will provide responses within hours.
              </li>
              <li>
                <span className="text-primary-orange61 font-bold">Explore Our Existing Q&As:</span> Discover answers to previously asked questions from individuals facing similar legal challenges.
                <Link href="/about" className="text-primary-orange61 underline italic">Visit FAQS&apos;s</Link>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-md sm:max-w-md w-full sm:w-3/5 px-6 rounded-lg mx-auto fade-in-30"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-dark32 font-semibold text-center text-2xl text-primary-blue48 font-lilita">
                    Your Question:
                  </FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Enter Your Question"
                      {...field}
                      className="w-full h-40 py-2 resize-none rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center gap-2 mt-4 mb-10">
            <button
              type="submit"
              className="w-fit px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
              {loading ? "Loading..." : "Ask Your Question"}
            </button>
          </div>
          </form>
        </Form>
      </div>

    </div>
  );
}
