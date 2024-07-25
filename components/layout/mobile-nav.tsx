"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaRegUser } from "react-icons/fa";
import ServicesMenuMobile from "@/components/services/services-menu-mobile";

const pages = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

export default function LandingMobileNav(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="block md:hidden mr-7">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <HiOutlineMenuAlt3
            size={30}
            className="text-primary-dark32 cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-primary-whiteF5 border-r font-inria p-6 overflow-x-hidden"
        >
          <div className="h-full flex-col">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/brand-logo.png"
                alt="LegalEase logo"
                width={40}
                height={40}
                priority={true}
              />
              <h1 className="text-2xl md:text-4xl font-semibold text-primary-orange61 font-gorditas">
                LEGALEASE
              </h1>
            </Link>
            <div className="flex flex-col justify-between mt-10">
              <div className="flex flex-col items-center gap-5 text-sm">
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
                    <ServicesMenuMobile key={page.href} />
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
              <div className="flex flex-col items-center gap-2 mt-5 py-5">
                <Link
                  href="/login"
                  className="w-full flex items-center justify-center gap-1 bg-primary-orange61 py-2 px-4 rounded-lg shadow-md text-sm text-white"
                >
                  <FaRegUser size={10} />
                  <span>Login</span>
                </Link>
                <Link
                  href="/signup"
                  className="w-fit py-2 px-4 text-sm text-primary-dark32"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
