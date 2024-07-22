"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VscMenu } from "react-icons/vsc";
import DashboardNav from "./nav";
import { usePathname } from "next/navigation";

export default function MobileDashboardNav(): React.JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="block md:hidden mr-7">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <VscMenu size={20} className="text-primary-dark32 cursor-pointer" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-primary-whiteF5 border-r font-inria p-0 overflow-x-hidden"
        >
          <DashboardNav />
        </SheetContent>
      </Sheet>
    </div>
  );
}
