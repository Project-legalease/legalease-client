import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

function LegalProblemSection() {
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);

  return (
    <div className="flex h-1/3 w-full">
      <div className="flex row w-2/5">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-primary-blue48">LEGAL PROBLEMS?</h2>
          <h4>I’ll take it from here!</h4>
          <blockquote className="italic text-primary-dark1E mt-2">
            &quot;I could not be more pleased with the service I received from Anthony. He was professional, knowledgeable, and always available to
            answer my questions. I highly recommend him for anyone needing legal assistance in family business matters&quot;
          </blockquote>
          <cite className="block mt-2 text-right text-primary-dark32">- Christiana Charles</cite>
          <div className="w-fit flex gap-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setTestimonyIndex((testimonyIndex) => index)}
                className={cn(
                  "h-[5px] w-[45px] rounded-full cursor-pointer",
                  index == testimonyIndex ? "bg-primary-orange61" : "bg-[#DDD4D3]"
                )}></div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mb-8">
          <div className="bg-[url('/images/book-appointment-bg.png')] opacity-10 bg-cover z-0"></div>
          <button className="bg-primary-orange61 text-primary-whiteF5 px-4 py-2 rounded">Book Appointment</button>
          <Link href={"/checkout-cv"} className="text-primary-orange61 px-4 py-2">
            Check out my C.V
          </Link>
        </div>
      </div>
      <div className="bg-[url('/images/book-appointment-bg2.png')] w-3/5"></div>
    </div>
  );
}

export default LegalProblemSection;
