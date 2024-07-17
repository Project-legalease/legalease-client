import React, { useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .trim(),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email({ message: "Invalid email address" }),
  phoneNo: z
    .string({ required_error: "Phone Number is required" })
    .min(1, "Phone Number is required")
    .trim(),
  date: z
    .date({
      required_error: "Date is required",
    }),
  time: z
    .string({ required_error: "Time is required" })
    .min(1, "Time is required")
    .trim(),
  lawyer: z
    .string({ required_error: "Lawyer is required" })
    .min(1, "Lawyer is required")
    .trim(),
  notes: z
    .string({ required_error: "A note is required" })
    .min(1, "A note is required")
    .trim(),
  payment: z
    .string({ required_error: "Payment is required" })
    .min(1, "Payment is required")
    .trim(),
});

const lawyers = [
  { value: "lawyer1", label: "John Doe" },
  { value: "lawyer2", label: "Jane Smith" },
  { value: "lawyer3", label: "Mary Jones" },
  { value: "lawyer4", label: "Allen Poe" },
  { value: "lawyer5", label: "Christian Smith" },
  { value: "lawyer6", label: "Joachim South" },
];

const paymentMethods = [
  { value: "paypal", label: "PayPal" },
  { value: "stripe", label: "Stripe" },
  { value: "bank_transfer", label: "Bank Transfer" },
];

const timeSlots = [
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "17:00", label: "05:00 PM" },
];

function BookingAppForm(): React.JSX.Element {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phoneNo: "",
      date: undefined,
      time: "",
      lawyer: "",
      notes: "",
      payment: "",
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
    <div className="w-full lg:w-1/2 bg-white-cover bg-center m-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 
        max-w-lg
        sm:max-w-lg 
        w-full 
        sm:w-full 
        rounded-lg
        fade-in-30
        px-8
        mx-10"
        >
          <div>
            <h2 className="text-3xl text-primary-blue48 font-lilita mt-4 w-[500px]">Book a Consultation and Take the First Step Toward Justice.</h2>
          </div>
          {!!error && (
            <div className="relative w-full rounded-lg border px-4 py-3 text-sm border-destructive/50 text-destructive flex items-center gap-2">
              <TbAlertCircle className="size-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <p className="text-center text-gray-800 italic pt-2 font-semibold">Client Information</p>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">First Name:</FormLabel>
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
                <FormLabel className="text-primary-dark32/80 font-semibold">Email Address:</FormLabel>
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
                <FormLabel className="text-primary-dark32/80 font-semibold">Phone No:</FormLabel>
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

          <p className="text-center text-gray-800 italic pt-2 font-semibold">Appointment Details</p>
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Time:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a preferred time"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot.value} value={slot.value}>
                        {slot.label}
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
            name="lawyer"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Lawyer:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a preferred Lawyer"
                        className="w-full 
                      h-10 rounded-md 
                      placeholder:text-black/50 
                      placeholder:text-sm 
                      placeholder:font-normal 
                      px-5 text-primary-dark32 
                      border 
                      border-primary-dark32/70 
                      focus-visible:outline-none 
                      focus:outline-none"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {lawyers.map((lawyer) => (
                      <SelectItem key={lawyer.value} value={lawyer.value}>
                        {lawyer.label}
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
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Date:</FormLabel>
                <div className="w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left border border-primary-dark32/70 focus-visible:outline-none focus:outline-none",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="text-black/50 font-normal">Selected a preferred date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-center text-gray-800 italic pt-2 font-semibold">Payment Details</p>
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-dark32/80 font-semibold">Choose a payment method:</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Select a preferred payment method"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {paymentMethods.map((method) => (
                      <SelectItem key={method.value} value={method.value}>
                        {method.label}
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
            name="notes"
            render={({ field }) => (
              <FormItem className="pt-4 text-center">
                <FormLabel className="text-primary-dark32/80 font-semibold text-center text-1xl italic">Additional Notes</FormLabel>
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
    </div>
  );
}

export default BookingAppForm;
