import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { services } from "./services-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ServicesMenuMobile(): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger className="bg-transparent focus:bg-transparent focus:ring-0 focus-visible:outline-none p-0 font-normal text-sm text-primary-dark32 hover:text-primary-orange61 hover:font-semibold duration-300">
        Services
      </PopoverTrigger>
      <PopoverContent className="border-black/10 rounded-lg p-0">
        <ScrollArea className="h-[400px] w-full max-w-[400px] rounded-lg">
          <ul className="grid w-full gap-3 p-4 grid-cols-1">
            {services.map((service) => (
              <ListItem key={service.title} title={service.title}>
                {service.description}
              </ListItem>
            ))}
          </ul>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}

const ListItem: React.FC<{
  className?: string;
  title: string;
  children?: React.ReactNode;
}> = ({ className, title, children, ...props }) => {
  return (
    <li>
      <div
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-whiteF5 hover:text-accent-foreground focus:bg-primary-whiteF5 focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="text-sm leading-snug text-muted-foreground">{children}</p>
      </div>
    </li>
  );
};
ListItem.displayName = "ListItem";
