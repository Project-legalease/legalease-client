"use client"

import React from 'react';
import { FaPaypal, FaCcStripe, FaUniversity } from 'react-icons/fa';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox"

const FormSchema = z.object({
  payment: z.enum(["paypal", "stripe", "bank"], {
    required_error: "You need to select a payment method.",
  }),
  name: z.string().min(1, "Name is required."),
  cardNumber: z.string().min(1, "Card Number is required."),
  expirationDate: z.string().min(1, "Expiration Date is required."),
  securityCode: z.string().min(1, "Security Code is required."),
  agree: z.boolean({
    required_error: "You must agree that your bank and card details are correct.",
  }),
});

export function PaymentOptionsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      payment: "paypal",
      name: "",
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
      agree: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form Data:", data);
  }

  const selectedPayment = form.watch("payment");

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <div className='bg-primary-blue48  p-8 w-full mb-6'>
        <h2 className="text-2xl text-white font-bold mb-2 text-center">Payment Options</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem className="space-y-5">
                <FormLabel className="text-1xl text-primary-blue48 font-lilita">Choose a payment option</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-col space-y-3"
                  >
                    <div className="border border-black/70 rounded-md p-3 mt-4 mx-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="paypal" />
                        </FormControl>
                        <FormLabel className="font-semibold text-1xl flex items-center ">
                          PayPal <FaPaypal className="ml-80 text-xl text-black" />
                        </FormLabel>
                      </FormItem>
                    </div>
                    <div className="border border-black/70 rounded-md p-3 mt-4 mx-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="stripe" />
                        </FormControl>
                        <FormLabel className="font-semibold text-1xl flex items-center">
                          Stripes <FaCcStripe className="ml-80 text-xl text-black" />
                        </FormLabel>
                      </FormItem>
                    </div>

                    {selectedPayment === "stripe" && (
                      <>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name on card</FormLabel>
                              <FormControl>
                                <input
                                  placeholder="Enter your name"
                                  type="text"
                                  {...field}
                                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <input
                                placeholder="0000 - 0000 - 0000 - 0000"
                                  type="text"
                                  {...field}
                                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm placeholder:font-normal px-5 text-primary-dark32"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex space-x-4">
                          <FormField
                            control={form.control}
                            name="expirationDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiration Date</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    {...field}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="MM/YY"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="securityCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Security Code</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    {...field}
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="CVV"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            I agree that my bank and card details are correct
                          </label>
                        </div>
                      </>
                    )}

                    <div className="border border-black/70 rounded-md p-3 mt-4 mx-2">
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="bank" />
                        </FormControl>
                        <FormLabel className="font-semibold flex items-center">
                          Bank Transfer<FaUniversity className="ml-72 text-xl text-black w-[2rem]" />
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center">
            <Button type="submit" className='w-1/2 mt-4  bg-primary-orange61/85 rounded-md hover:bg-primary-orange61 duration-300'>Make Payment</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
