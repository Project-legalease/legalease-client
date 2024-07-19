import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCheckSquare } from "react-icons/lu";

const topics: { title: string; desc: string }[] = [
  {
    title: "Ask a Question Anonymously:",
    desc: "Post your legal query without revealing your identity, and experienced lawyers will provide responses within hours.",
  },
  {
    title: "Explore Our Existing Q&As:",
    desc: "Discover answers to previously asked questions from individuals facing similar legal challenges.",
  },
];

function GotQuestions() {
  return (
    <div className="bg-primary-whiteF5 px-5 py-[56px]">
      <div className="w-full max-w-[1184px] mx-auto">
        <h1 className="font-lilita text-primary-blue48 text-[2.5em] mb-2">
          GOT QUESTIONS FOR A LEGAL PRACTITIONER ?
        </h1>
        <div className="flex items-start gap-5">
          <div className="w-full mb-16">
            <h1 className="font-lilita text-primary-orange61 text-[2.5em]">
              We Have Answers!
            </h1>
            <h6 className="text-primary-dark1E text-xl font-light italic mb-8">
              Lawyers across the country have answered many user questions on
              LegalEase. Get answers today in our Q&A forum.
            </h6>
            {topics.map((topic, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <div>
                  <LuCheckSquare
                    size={20}
                    className="text-primary-orange61 mt-1"
                  />
                </div>
                <div>
                  <h3 className="text-primary-blue48 text-base font-bold">
                    {topic.title}
                  </h3>
                  <p className="text-primary-dark1E mt-2">{topic.desc}</p>
                </div>
              </div>
            ))}
            <div className="mt-7 pl-10">
              <Link
                href="/lawyers/ask"
                className="py-3 px-4 rounded-lg bg-primary-orange61 font-bold text-white  font-inria"
              >
                Ask A Lawyer
              </Link>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/bg-4.png"
              alt="someone pressing phone"
              width={636}
              height={438}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GotQuestions;
