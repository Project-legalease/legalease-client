import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  lawyerName: z.string().nonempty("Lawyer name is required"),
  documents: z.any().refine((files) => files.length > 0, "At least one document is required"),
});

function VerifyLawyers(): React.JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Add your verification logic here
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Verify Lawyer Profiles</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <Button type="submit">Verify</Button>
        </form>
      </Form>
    </div>
  );
}

export default VerifyLawyers;
