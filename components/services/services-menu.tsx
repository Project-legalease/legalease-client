import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Family Law",
    href: "#",
    description:
      "Assistance with divorce, child custody, adoption, and other family-related matters",
  },
  {
    title: "Criminal Defense",
    href: "#",
    description:
      "Representation for criminal charges, investigations, and trials",
  },
  {
    title: "Personal Injury",
    href: "#",
    description: "Legal support for accidents, injuries, and insurance claims.",
  },
  {
    title: "Estate Planning",
    href: "#",
    description: "Wills, trusts, and estate management",
  },
  {
    title: "Business Law",
    href: "#",
    description: "Contracts, business formation, and intellectual property.",
  },
  {
    title: "Immigration Law",
    href: "#",
    description: "Assistance with visas, green cards, and citizenship",
  },
];

function ServicesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 font-normal text-sm text-primary-dark32 hover:text-primary-orange61 hover:font-semibold duration-300">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ServicesMenu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-whiteF5 hover:text-accent-foreground focus:bg-primary-whiteF5 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
