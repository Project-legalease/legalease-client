import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuCalendarDays } from "react-icons/lu";
import { TiTime } from "react-icons/ti";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import CardWrapper from "./card-wrapper";

interface IAppointments {
  id: string;
  name: string;
  date: string;
  time: string;
  desc: string;
  link: string;
}

const appointments: Array<IAppointments> = [
  {
    id: "1",
    name: "Mrs. Henrik Charlotte",
    date: "12th July, 2021",
    time: "10:00 AM",
    desc: "Need a legal assistance on a forgery case on her account details and social security number",
    link: "https://meet.google.com/xyz-abc",
  },
  {
    id: "2",
    name: "Mrs. Henrik Charlotte",
    date: "12th July, 2021",
    time: "10:00 AM",
    desc: "Need a legal assistance on a forgery case on her account details and social security number",
    link: "https://meet.google.com/xyz-abc",
  },
  {
    id: "3",
    name: "Mrs. Henrik Charlotte",
    date: "12th July, 2021",
    time: "10:00 AM",
    desc: "Need a legal assistance on a forgery case on her account details and social security number",
    link: "https://meet.google.com/xyz-abc",
  },
  {
    id: "4",
    name: "Mrs. Henrik Charlotte",
    date: "12th July, 2021",
    time: "10:00 AM",
    desc: "Need a legal assistance on a forgery case on her account details and social security number",
    link: "https://meet.google.com/xyz-abc",
  },
];

function RowTile({ data }: { data: IAppointments }): React.JSX.Element {
  return (
    <AccordionItem
      value={data.id}
      className="rounded-xl px-2 bg-white border mb-3"
    >
      <AccordionTrigger className="hover:no-underline">
        <span className="pl-2 pr-10 text-primary-dark1E text-left no-underline">
          {data.name}
        </span>
      </AccordionTrigger>
      <AccordionContent className="px-3 text-primary-dark1E text-xs sm:text-sm border-none">
        <div className="flex flex-col pb-10">
          <div className="flex gap-3 border-t border-b py-2.5">
            <LuCalendarDays className="size-3 sm:size-4" />
            <p>{data.date}</p>
          </div>
          <div className="flex gap-3 border-b py-2.5">
            <TiTime className="size-3 sm:size-4" />
            <p>{data.time}</p>
          </div>
          <div className="flex gap-3 border-b py-2.5">
            <FaLink className="size-3 sm:size-4" />
            <Link
              href={data.link}
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Call link
            </Link>
          </div>
          <p className="py-2.5 font-light">{data.desc}</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function AppointmentPreview(): React.JSX.Element {
  return (
    <CardWrapper title="Appointments">
      <Accordion
        type="multiple"
        className="w-full mx-auto"
        id="faq"
      >
        {appointments.map((data, index) => (
          <RowTile key={index} data={data} />
        ))}
      </Accordion>
    </CardWrapper>
  );
}
