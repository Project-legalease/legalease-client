import CardWrapper from "./card-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuUser2 } from "react-icons/lu";

const overviewData: Array<{ title: string; value: string }> = [
  { title: "home address", value: "20 Beverly Street, South Crenshaw" },
  { title: "email", value: "charlottehenry@yahoo.com" },
  { title: "telephone", value: "+234801478921" },
];

export default function ProfileOverview(): React.JSX.Element {
  return (
    <CardWrapper title="">
      <div className="flex mb-4">
        <Avatar className="size-20 md:size-40 rounded-lg">
          <AvatarImage src="/images/lawyer-1.jpeg" alt="user profile photo" />
          <AvatarFallback>
            <LuUser2 size={20} className="text-primary-dark1E" />
          </AvatarFallback>
        </Avatar>
      </div>
      <h2 className="text-2xl text-primary-dark32 font-semibold py-1">
        Mrs Henrik Charlotte
      </h2>
      <div className="pb-16">
        {overviewData.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-0.5 mb-2 text-sm sm:text-base"
          >
            <p className="text-primary-dark1E font-semibold capitalize">
              {data.title}:
            </p>
            <p className="text-primary-dark32">{data.value}</p>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
