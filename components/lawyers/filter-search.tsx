"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";
import { TfiLocationPin } from "react-icons/tfi";
import { MdEventAvailable, MdOutlineLanguage } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";

 export interface FilterFieldProps {
  value:
    | "location"
    | "expertise"
    | "ratings"
    | "availability"
    | "language"
    | "fees";
  label: string;
  placeholder: string;
  icon: React.JSX.Element;
  form: UseFormReturn<{
    location: string;
    expertise: string;
    ratings: string;
    availability: string;
    language: string;
    fees: string;
}, any, undefined>
}

export const formSchema = z.object({
  location: z.string({ required_error: "Location is required" }).trim(),
  expertise: z.string({ required_error: "Expertise is required" }).trim(),
  ratings: z.string({ required_error: "ratings is required" }),
  availability: z.string({ required_error: "Availabilitt is required" }).trim(),
  language: z.string({ required_error: "Location is required" }).trim(),
  fees: z.string({ required_error: "Location is required" }).trim(),
});



export function FilterFields({
  value,
  label,
  placeholder,
  icon, form
}: FilterFieldProps): React.JSX.Element {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="w-full px-2 pr-4 max-w-lg flex items-center gap-2 text-primary-dark32 text-sm">
          {icon}
          <span className="pl-2 pr-10">{label}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-3">
        <FormField
          control={form.control}
          name={value}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input
                  placeholder={placeholder}
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/30 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FilterSearch(): React.JSX.Element {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      expertise: "",
      ratings: "",
      availability: "",
      language: "",
      fees: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
    <DropdownMenu>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-lg sm:max-w-lg w-full sm:w-full mt-3 mb-[45px] fade-in-30"
        >
          <div className="flex items-start justify-center gap-2">
            <DropdownMenuTrigger asChild>
              <div className="w-full border border-primary-orange61 flex items-center gap-3 bg-white rounded-lg px-2.5 py-4">
                <IoSearch size={16} className="text-black/50 mr-1" />
                <input
                  type="text"
                  placeholder="Search for a lawyer"
                  className="w-full placeholder:text-black/50 text-sm text-primary-dark32 focus-visible:outline-none focus:outline-none"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="min-w-full  bg-white border-primary-orange61 duration-300"
            >
              <Accordion type="multiple" className="w-full">
                <FilterFields
                  value="location"
                  label="Location"
                  placeholder="e.g. Lagos"
                  form={form}
                  icon={<TfiLocationPin size={15} />}
                />
                <FilterFields
                  value="expertise"
                  label="Area of Expertise"
                  placeholder="e.g. Criminal law"
                  form={form}
                  icon={<GoLaw size={15} />}
                />
                <FilterFields
                  value="ratings"
                  label="Ratings"
                  placeholder="1 - 10"
                  form={form}
                  icon={<TiStarOutline size={15} />}
                />
                <FilterFields
                  value="availability"
                  label="Availability"
                  placeholder="e.g. Mon - Fri"
                  form={form}
                  icon={<MdEventAvailable size={15} />}
                />
                <FilterFields
                  value="language"
                  label="Language"
                  placeholder="e.g. English"
                  form={form}
                  icon={<MdOutlineLanguage size={15} />}
                />
                <FilterFields
                  value="fees"
                  label="Fees"
                  placeholder="e.g. 500"
                  form={form}
                  icon={<FaMoneyBillWave size={15} />}
                />
              </Accordion>
            </DropdownMenuContent>
            <button className="w-fit px-4 py-4 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300">
              {loading ? "Searching" : "Search"}
            </button>
          </div>
        </form>
      </Form>
    </DropdownMenu>
  );
}
