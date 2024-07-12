"use client";

import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuUser2 } from "react-icons/lu";
import { cn } from "@/lib/utils";

function ClientFeedback() {
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);
  return (
    <div className="px-5 py-[42px]">
      <div className="flex flex-col items-center w-full max-w-[526px] mx-auto">
        <h1 className="font-lilita text-primary-dark32 text-[2.5em] mt-4">
          What Our Clients Say About Us
        </h1>
        <RiDoubleQuotesL size={24} className="text-primary-orange61" />
        <p className="text-primary-dark1E">
          The secure messaging feature on this platform made communication with
          my lawyer easy and efficient. I appreciated the ability to have
          confidential conversations and receive prompt responses. It made the
          entire process much smoother.
        </p>
        <div className="flex items-center gap-3 mt-3 mb-4">
          <Avatar className="size-24">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <LuUser2 size={20} className="text-primary-dark1E" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-primary-dark1E text-2xl">Miss Susan Allen</h4>
            <p className="text-primary-dark1E text-base">Accountant</p>
          </div>
        </div>
        <div className="w-fit flex gap-1">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              onClick={() => setTestimonyIndex((testimonyIndex) => index)}
              className={cn(
                "h-[5px] w-[45px] rounded-full cursor-pointer",
                index == testimonyIndex ? "bg-primary-orange61" : "bg-[#DDD4D3]"
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientFeedback;
