"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import SubHeader from "./sub-header";

function Header(): JSX.Element {
  const pathname = usePathname();

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/password")
  ) {
    return <></>;
  }

  return (
    <nav className="sticky top-0 z-20 px-4 bg-primary-whiteF5 border-b border-primary-dark32/15">
      <div className="flex items-center justify-between max-w-[980px] w-full mx-auto h-[100px]">
        <SubHeader />
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/login"
            className="w-fit flex items-center gap-1 bg-primary-orange61 py-2 px-4 rounded-lg shadow-md text-sm text-white"
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
    </nav>
  );
}

export default Header;
