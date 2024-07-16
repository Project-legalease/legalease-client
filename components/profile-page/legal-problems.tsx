import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function LegalProblemSection() {
  const [testimonyIndex, setTestimonyIndex] = useState<number>(0);

  return (
    <div className="flex flex-col md:flex-row h-1/3 w-full p-3">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="mb-8">
          <h2 className="text-[40px] text-left text-primary-blue48 font-lilita mt-4">LEGAL PROBLEMS?</h2>
          <h4 className="text-md italic text-primary-dark32">I’ll take it from here!</h4>
          <div className="rounded-md py-2 px-12 pl-0 text-primary-dark1E font-semibold">
            <p>
              <RiDoubleQuotesL size={24} />
              &quot;I could not be more pleased with the service I received from Anthony. He was professional, knowledgeable, and always available to
            answer my questions. I highly recommend him for anyone needing legal assistance in family business matters&quot;<RiDoubleQuotesR size={24} className="float-end" />
            </p>
            <cite className="block mt-2 text-left text-primary-dark32 italic">- Christiana Charles</cite>
          </div>
          <div className="w-fit flex gap-1 mt-4 md:px-20 lg:px-52">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setTestimonyIndex((testimonyIndex) => index)}
                className={cn(
                  "h-[5px] w-[30px] rounded-full cursor-pointer",
                  index == testimonyIndex ? "bg-primary-orange61" : "bg-[#DDD4D3]"
                )}></div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mx-6 rounded-lg gap-4 mb-8 bg-black bg-opacity-50 bg-cover z-0 h-[70px] w-full md:w-[500px] bg-[url('/images/book-appointment-bg.png')]">
          <div className="relative z-10 py-4 px-0">
            <button className="bg-primary-orange61 text-primary-whiteF5 px-4 py-2 rounded font-bold">Book Appointment</button>
            <Link href={"/checkout-cv"} className="text-primary-orange61 px-4 py-2 underline italic">
              Check out my C.V
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/book-appointment-bg2.png')] w-full md:w-1/2 rounded-2xl"></div>
    </div>
  );
}

export default LegalProblemSection;
