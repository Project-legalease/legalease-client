"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ServicesMenu from "../services/services-menu";
import LandingMobileNav from "./mobile-nav";

const pages = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

function SubHeader() {
  const pathname = usePathname();

  return (
    <Fragment>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/brand-logo.png"
          alt="LegalEase logo"
          width={60}
          height={60}
          priority={true}
        />
        <h1 className="block md:hidden text-2xl md:text-4xl font-semibold text-primary-orange61 font-gorditas">
          LEGALEASE
        </h1>
      </Link>
       <LandingMobileNav />
      <div className="hidden md:flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={cn(
            "hover:text-primary-orange61 hover:font-semibold duration-300",
            pathname == "/"
              ? "text-primary-orange61 font-semibold"
              : "text-primary-dark32 font-normal"
          )}
        >
          Home
        </Link>
        {pages.map((page) =>
          page.name == "Services" ? (
            <ServicesMenu key={page.href} />
          ) : (
            <Link
              key={page.href}
              href={page.href}
              className={cn(
                "hover:text-primary-orange61 hover:font-semibold duration-300",
                pathname.startsWith(page.href)
                  ? "text-primary-orange61 font-semibold"
                  : "text-primary-dark32 font-normal"
              )}
            >
              {page.name}
            </Link>
          )
        )}
      </div>
    </Fragment>
  );
}

export default SubHeader;
