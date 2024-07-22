"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GrHomeRounded, GrGroup, GrArchive } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";
import { PiUserCircleLight } from "react-icons/pi";
import { TfiPowerOff } from "react-icons/tfi";
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
      href: `/`,
      Icon: RiCalendarScheduleLine,
    },
    user == "lawyer"
      ? {
          text: "Clients",
          href: `/dashboard/lawyer/clients`,
          Icon: GrGroup,
        }
      : null,
    user == "lawyer"
      ? {
          text: "Cases",
          href: `/dashboard/lawyer/cases`,
          Icon: GrArchive,
        }
      : null,
    {
      text: "Messages",
      href: `/dashboard/${user}/messages`,
      Icon: BsChatText,
    },
  ];

  return (

      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-2 px-4 py-10">
          <div>
            <Image
              src="/images/brand-logo.png"
              alt="LegalEase logo"
              width={40}
              height={40}
              priority={true}
            />
          </div>
          <h1 className="text-2xl font-semibold text-primary-orange61 font-gorditas">
            <span className="text-4xl font-bold">L</span>EGAL
            <span className="text-4xl font-bold">E</span>ASE
          </h1>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-2">
            {links.map((link, i) => {
              if (!link) return null;
              return (
                <NavTile
                  key={i}
                  text={link.text}
                  href={link.href}
                  Icon={link.Icon}
                />
              );
            })}
          </div>
        </div>
        <div>
          <NavTile
            text="Profile"
            href={`/dashboard/${user}/profile`}
            Icon={PiUserCircleLight}
          />
          <LogoutButton text="Logout" Icon={TfiPowerOff} />
        </div>
      </div>
  );
}
