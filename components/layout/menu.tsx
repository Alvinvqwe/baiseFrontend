"use client";
import Link from "next/link";
// import { useEffect, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "./routes.config";

export const NavigationMenus = () => {
  return (
    <NavigationMenu className="w-max">
      <NavigationMenuList className="w-full justify-center">
        {menuItems.map((item) =>
          item.hasContent ? (
            <NavigationMenuItem key={item.title} className="text-black">
              <NavigationMenuTrigger
                className={`${navigationMenuTriggerStyle()}`}
                style={{ width: "120px", height: "50px" }}
              >
                {item.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-row w-full">
                {/* <div className="w-full inline-flex flex-row  min-w-auto gap-10"> */}
                <div className="flex w-max overflow-x-scroll">
                  {item.children?.map((child) => (
                    <child.component key={child.index} />
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.title} className="text-black">
              <Link href={item.href || "#"} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()}`}
                  style={{ width: "120px", height: "50px" }}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
