"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator
} from "@/components/ui/navigation-menu";

const MenuBar = () => {
  return (
    <NavigationMenu className="bg-zinc-900 rounded-[4rem] px-2 py-1">
      <NavigationMenuList>
        <NavigationMenuItem className="hover:bg-zinc-800 hover:rounded-[4rem]" value="1">
          <Link href="#" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active>
              Getting Started
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-zinc-800 hover:rounded-[4rem]" value="2">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-zinc-800 hover:rounded-[4rem]" value="3">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuIndicator/>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuBar;
