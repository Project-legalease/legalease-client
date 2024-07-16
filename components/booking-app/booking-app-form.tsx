import React, { useState } from "react";
import Select from "react-select";
import { TbAlertCircle } from "react-icons/tb";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const lawyers = [
  { id: "1", value: "lawyer1", label: "John Doe" },
  { id: "2", value: "lawyer2", label: "Jane Smith" },
  { id: "3", value: "lawyer3", label: "Mary Jones" },
  { id: "4", value: "lawyer4", label: "Allen Poe" },
  { id: "5", value: "lawyer5", label: "Christian Smith" },
  { id: "6", value: "lawyer6", label: "Joachim Sourh" },
];

const formSchema = z.object({
  name: z.string().nonempty("Name is required").trim(),
  email: z.string().nonempty("Email is required").email("Invalid email address"),
  phoneNo: z.string().nonempty("Phone number is required").trim(),
  date: z.string().nonempty("Date is required").trim(),
  time: z.string().nonempty("Time is required").trim(),
  lawyer: z.string().nonempty("Lawyer is required").trim(),
  notes: z.string().nonempty("Notes is required").trim(),
  payment: z.string().nonempty("Payment is required").trim(),
});

function BookingAppForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [appointmentData, setAppointmentData] = useState({
    lawyer: null,
    payment: "",
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phoneNo: "",
      date: "",
      time: "",
      lawyer: "",
      notes: "",
      payment: "",
    },
  });

  const handleAppointmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAppointmentData({
      ...appointmentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLawyerChange = (selectedOption: any) => {
    setAppointmentData({
      ...appointmentData,
      lawyer: selectedOption,
    });
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setLoading(true);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 max-w-md sm:max-w-md py-10 w-full sm:w-3/5 px-6 rounded-lg mx-auto fade-in-30">
        <div>
          <h2 className="text-3xl text-primary-blue48 font-lilita mt-20">Book a Consultation and Take the First Step Toward Justice.</h2>
        </div>
        {!!error && (
          <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
            <TbAlertCircle className="size-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <p className="text-center text-gray-800 italic pt-2">Client Information</p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">First Name:</FormLabel>
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
              <FormLabel className="text-primary-dark32/80 font-normal">Email Address:</FormLabel>
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
          name="phoneNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Phone No:</FormLabel>
              <FormControl>
                <input
                  placeholder="Input your Phone Number"
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
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Date:</FormLabel>
              <FormControl>
                <input
                  placeholder="Select a preferred date"
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
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Time:</FormLabel>
              <FormControl>
                <input
                  placeholder="Select a preferred time"
                  {...field}
                  className="w-full h-10 rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mb-4 w-[90%]">
          <label className="block mb-2 font-extrabold text-gray-900">Choose a Lawyer</label>
          <Select
            name="lawyer"
            options={lawyers}
            value={appointmentData.lawyer}
            onChange={handleLawyerChange}
            className="w-full placeholder-slate-400 placeholder-opacity-90 italic border rounded border-solid border-black"
            placeholder="Select a lawyer"
          />
        </div>

        <p className="text-center text-gray-800 italic pt-2">Payment Details</p>
        <div className="mb-4 pt-4 w-[90%]">
          <label htmlFor="payment" className="text-gray-900 font-extrabold mb-2 block">
            Choose a payment method
          </label>
          <select
            id="payment"
            name="payment"
            className="w-full px-10 py-2 border rounded border-solid border-black placeholder-slate-400 placeholder-opacity-90 italic"
            value={appointmentData.payment}
            onChange={handleAppointmentChange}
            required>
            <option value="" disabled selected className="text-black">
              Select a payment method
            </option>
            <option value="paypal" className="text-black">
              PayPal
            </option>
            <option value="stripe" className="text-black">
              Stripe
            </option>
            <option value="bank_transfer" className="text-black">
              Bank Transfer
            </option>
          </select>
        </div>

        <p className="text-center text-gray-800 italic pt-2">Additional Notes</p>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary-dark32/80 font-normal">Additional Notes</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Add any specific details about your case"
                  {...field}
                  className="w-full h-32 py-2 resize-none rounded-md placeholder:text-black/50 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32 border border-primary-dark32/70 focus-visible:outline-none focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2 mt-4 mb-10">
          <button
            type="submit"
            className="w-fit px-4 py-2 text-white text-sm bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300">
            {loading ? "Loading..." : "Book Appointment"}
          
          </button>
        </div>
      </form>
    </Form>
  );
}

export default BookingAppForm;
