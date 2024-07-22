import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VscMenu } from "react-icons/vsc";
import DashboardNav from "./nav";

export default function MobileDashboardNav(): React.JSX.Element {
  return (
    <div className="block md:hidden mr-7">
      <Sheet>
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
