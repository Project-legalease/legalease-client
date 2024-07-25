import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuUser2, LuCalendarDays } from "react-icons/lu";
import { CustomDate } from "@/lib/date"
import { FaRegBell } from "react-icons/fa";
import MobileDashboardNav from "./mobile-nav";

export default function DashboardHeader(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-10 pt-8 md:pt-16 bg-white">
      <div className="w-full flex items-center justify-between mx-auto bg-primary-whiteF5 rounded-[20px] px-6 sm:px-10 py-5 md:py-9 font-inria md:shadow-lg border">
        <div className="w-full md:w-fit flex items-center">
          <MobileDashboardNav />
          <div className="w-fit h-fit rounded-full size-[42px] relative z-0">
            <Avatar className="size-[42px]">
              <AvatarImage
                src="/images/lawyer-1.jpeg"
                alt="user profile photo"
              />
              <AvatarFallback>
                <LuUser2 size={20} className="text-primary-dark1E" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute z-[1] bottom-1 right-1 size-2 rounded-full bg-primary-green1D"></div>
          </div>
          <div className="flex flex-col w-full ml-2 md:ml-4">
            <h4 className="text-sm sm:text-base font-semibold">Allen Poe</h4>
            <p className="text-xs sm:text-sm font-light italic">J.D., B.A</p>
          </div>
          <div className="flex items-center justify-center text-xs sm:text-base font-semibold w-fit md:w-full ml-auto md:ml-10 bg-black/5 rounded-full text-primary-dark32 px-5 py-2">
            <LuCalendarDays className="size-3 sm:size-4" />
            <p className="ml-2 w-max">{CustomDate.getCurrentDayMonth()}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <div className="w-fit h-fit rounded-full size-[35px] p-2 bg-black/5 relative z-0">
            <FaRegBell className="text-primary-dark1E" />
            <div className="absolute z-[1] top-0 right-0 size-2 rounded-full bg-rose-600"></div>
          </div>
          {/* <div className="w-fit h-fit rounded-full size-[35px] p-2 bg-black/5">
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-primary-dark1E " />
          </div> */}
        </div>
      </div>
    </header>
  );
}
