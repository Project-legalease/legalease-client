"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Copyright from "@/components/layout/copyright";

const footerData: { title: string; links: { text: string; href: string }[] }[] =
  [
    {
      title: "Browse Our Platform",
      links: [
        { text: "Find A Lawyer", href: "#" },
        { text: "Ask A Lawyer", href: "#" },
        { text: "Apply As A Lawyer", href: "#" },
        { text: "Register As A Lawyer", href: "#" },
        { text: "Research The Law", href: "#" },
      ],
    },
    {
      title: "Tools",
      links: [
        { text: "Q & A", href: "/about/#faqs" },
        { text: "Support", href: "/contact" },
        { text: "Privacy Policy", href: "#" },
        { text: "Terms And Conditions", href: "#" },
        { text: "Community Guidelines", href: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { text: "FAQs", href: "/about/#faqs" },
        { text: "Contact Us", href: "/contact" },
        { text: "Blog", href: "#" },
      ],
    },
  ];

export default function Footer(): React.JSX.Element {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  if (
    !(
      segment == null ||
      pathname.startsWith("/about") ||
      pathname.startsWith("/contact")
    )
  ) {
    return <></>;
  }

  return (
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:3147620777.
    <div className="bg-primary-dark1E px-5 pt-20 text-white">
      <div className="flex gap-x-6 justify-between  flex-wrap w-full max-w-7xl mx-auto">
        {footerData.map((data, index) => (
          <div key={index} className="">
            <h5 className="text-2xl font-lilita text-primary-orange61">
              {data.title}
            </h5>
            <div className="flex flex-col gap-y-2 mt-4">
              {data.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm underline hover:font-semibold duration-300"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 text-white/70 border-t border-white/10">
        <Copyright />
      </div>
    </div>
  );
}
