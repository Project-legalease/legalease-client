import type { Metadata } from "next";
import { Inter, Lilita_One, Inria_Sans } from "next/font/google";
import "normalize.css/normalize.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-lilita",
});

const inria = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-inria",
});

export const metadata: Metadata = {
  title: "LegalEase",
  description: "Making legal access easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lilita.variable} ${inria.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
