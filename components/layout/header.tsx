"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import ServicesMenu from "../services/services-menu";

const pages = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
];

function Header(): JSX.Element {
  const pathname = usePathname();

  if (pathname.startsWith("/auth")) {
    return <></>;
  }

  return (
    <nav className="sticky top-0 z-20 px-4 bg-primary-whiteF5 border-b border-primary-dark32/15">
      <div className="flex items-center justify-between max-w-[980px] w-full mx-auto h-[100px]">
        <Link href="/">
          <Image
            src="/images/brand-logo.png"
            alt="LegalEase logo"
            width={60}
            height={60}
            priority={true}
          />
        </Link>
        <div className="flex items-center gap-6 text-sm">
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
        <div className="flex items-center gap-2">
          <Link
            href="/auth/login"
            className="w-fit flex items-center gap-1 bg-primary-orange61 py-2 px-4 rounded-lg shadow-md text-sm text-white"
          >
            <FaRegUser size={10} />
            <span>Login</span>
          </Link>
          <Link
            href="/auth/signup"
            className="w-fit py-2 px-4 text-sm text-primary-dark32"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
