"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GrHomeRounded, GrGroup, GrArchive } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";
import { PiUserCircleLight } from "react-icons/pi";
import { TfiPowerOff } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import LogoutButton from "./logout";

export interface ILinkProps {
  text: string;
  href: string;
  Icon: IconType;
}

const NavTile: React.FC<ILinkProps> = ({ text, href, Icon }) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-4 border-b py-4 px-6 text-base text-primary-dark32 *:hover:text-primary-orange61 duration-300">
        <Icon size={18} />
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default function DashboardNav(): React.JSX.Element {
  const { user } = useParams<{ user: "user" | "lawyer" }>();

  const links: (ILinkProps | null)[] = [
    { text: "Home", href: `/dashboard/${user}`, Icon: GrHomeRounded },
    {
      text: "Appointments",
      href: `/dashboard/${user}/appointments`,
      Icon: RiCalendarScheduleLine,
    },
    user == "lawyer"
      ? {
          text: "Clients",
          href: `/dashboard/lawyer/clients`,
          Icon: GrGroup,
        }
      : null,
    {
      text: "Cases",
      href: `/dashboard/${user}/cases`,
      Icon: GrArchive,
    },
    {
      text: "Messages",
      href: `/dashboard/${user}/messages`,
      Icon: BsChatText,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center space-x-2 px-4 py-5 md:py-10">
        <Link href={'/'}>
          <div>
            <Image src="/images/brand-logo.png" alt="LegalEase logo" width={40} height={40} priority={true} />
          </div>
        </Link>
        <h1 className="text-2xl font-semibold text-primary-orange61 font-gorditas">LEGALEASE</h1>
      </div>
      <div className="w-full flex md:hidden items-center justify-end gap-4 p-5">
        <div className="w-fit h-fit rounded-full size-[35px] p-2 bg-black/5 relative z-0">
          <FaRegBell className="text-primary-dark1E" />
          <div className="absolute z-[1] top-0 right-0 size-2 rounded-full bg-rose-600"></div>
        </div>
        {/* <div className="w-fit h-fit rounded-full size-[35px] p-2 bg-black/5">
          <HiOutlineChatBubbleOvalLeftEllipsis className="text-primary-dark1E " />
        </div> */}
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="space-y-2">
          {links.map((link, i) => {
            if (!link) return null;
            return <NavTile key={i} text={link.text} href={link.href} Icon={link.Icon} />;
          })}
        </div>
      </div>
      <div>
        <NavTile text="Profile" href={`/dashboard/${user}/profile`} Icon={PiUserCircleLight} />
        <LogoutButton text="Logout" Icon={TfiPowerOff} />
      </div>
    </div>
  );
}
