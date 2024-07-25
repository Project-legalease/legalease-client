import ContactUs from "@/components/contact/contact-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | LegalEase",
  description: "Making legal access easy",
};

export default function Page() {
  return <ContactUs />;
}
