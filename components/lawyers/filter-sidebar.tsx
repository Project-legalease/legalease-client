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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TfiLocationPin } from "react-icons/tfi";
import { MdEventAvailable, MdOutlineLanguage } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { FilterFields, formSchema } from "./filter-search";


export default function FilterSidebar(): React.JSX.Element {
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
    <div className="hidden md:block max-w-[280px] w-full font-inria">
      <div className="flex items-end justify-between px-1">
        <h4 className="font-lilita text-xl text-primary-dark1E">Filters</h4>
        <span className="px-1 cursor-pointer hover:underline underline-offset-2 duration-30">Clear All</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-[308px] sm:max-w-[308px] w-full sm:w-full mt-[5px] px-4 mb-[45px] fade-in-30 border border-primary-orange61 bg-primary-whiteF5 rounded-lg"
        >
          <div className="flex flex-col items-start justify-center gap-2">
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
            <button className="w-full px-4 py-4 my-10 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300">
              {loading ? "Searching" : "Search"}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
