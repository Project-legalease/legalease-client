import { Metadata } from "next";
import { PaymentOptionsForm } from "@/components/payment/payment-option";

export const metadata: Metadata = {
  title: "Payment | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
    return <PaymentOptionsForm />;
  
}