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
    question: "How do I contact the law firm?",
    answer:
      "You can contact us through the website's contact form, by phone, or by visiting our office.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by calling us or by using the website's scheduling tool.",
  },
  {
    question: "Is the website secure?",
    answer:
      "Yes, our website is secure and uses HTTPS encryption to protect your data.",
  },
  {
    question: "How do I access my client portal?",
    answer:
      "You can access your client portal by logging in with your username and password.",
  },
  {
    question: "How do I pay my invoice online?",
    answer:
      "You can pay your invoice online by using the website's payment portal.",
  },
  {
    question: "How do I subscribe to the firm's newsletter?",
    answer:
      "You can subscribe to our newsletter by entering your email address in the website's footer.",
  },
  {
    question: "How do I search for legal resources and articles?",
    answer:
      "You can search for legal resources and articles by using the website's search bar.",
  },
  {
    question: "How do I access the firm's social media accounts?",
    answer:
      "You can access our social media accounts by clicking on the links in the website's footer.",
  },
];

export function FAQRow({ data } : {data: QuestionsProps}): React.JSX.Element {
  return (
    <AccordionItem value={data.question}>
      <AccordionTrigger>
        <span className="pl-2 pr-10 text-primary-dark1E">{data.question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-3 text-primary-dark32">
        {data.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQs(): React.JSX.Element {
  return (
    <div className="px-6 pt-10 font-inria">
      <div
        className="max-w-7xl w-full mx-auto mb-10"
      >
        <div className="w-full mb-5">
          <h1 className="text-[40px] leading-[1] text-primary-orange61 font-lilita text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-primary-dark32 italic text-center mt-3">
            Welcome to our FAQs section! We’ve completed a list of frequently
            asked questions to provide you with quick and informative answers.
          </p>
        </div>
        <Accordion type="multiple" className="w-full max-w-5xl mx-auto border rounded-lg" id="faq">
          {questions.map((data, index) => (
            <FAQRow key={index} data={data} />
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-4 items-center w-full mx-auto py-5">
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
