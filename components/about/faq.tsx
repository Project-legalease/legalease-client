import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QuestionsProps {
  question: string;
  answer: string;
}

const questions: QuestionsProps[] = [
  {
    question: "What is LegalEase?",
    answer:
      "An online platform that connects people with legal professionals, such as public defenders, lawyers, and law firms.",
  },
  {
    question: "What is LegalEase?",
    answer:
      "An online platform that connects people with legal professionals, such as public defenders, lawyers, and law firms.",
  },
  {
    question: "What is LegalEase?",
    answer:
      "An online platform that connects people with legal professionals, such as public defenders, lawyers, and law firms.",
  },
  {
    question: "What is LegalEase?",
    answer:
      "An online platform that connects people with legal professionals, such as public defenders, lawyers, and law firms.",
  },
  {
    question: "What is LegalEase?",
    answer:
      "An online platform that connects people with legal professionals, such as public defenders, lawyers, and law firms.",
  },
];

export function Row({
  question,
  answer,
}: QuestionsProps): React.JSX.Element {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger>
          <span className="pl-2 pr-10">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-3">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );

export default function FAQs(): React.JSX.Element {
  return (
    <div className="px-6 py-20 font-inria">
      <div
        className="flex gap-10 justify-between max-w-7xl w-full mx-auto mb-10"
        id="faq"
      >
        <div className="w-full">
          <h1 className="text-[40px] leading-[1] text-primary-orange61 font-lilita text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-primary-dark32 italic text-center mt-3">
            Welcome to our FAQs section! We’ve completed a list of frequently
            asked questions to provide you with quick and informative answers.
          </p>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="flex flex-col gap-4 items-center w-full max-w-4xl mx-auto">
        <h3 className="text-2xl leading-[1] text-primary-dark1E text-center font-lilita">
          Still have a question?
        </h3>
        <Link
          href="/contact"
          className="w-fit px-4 py-4 my-1 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
