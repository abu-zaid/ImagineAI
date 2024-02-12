import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Code, Image, MenuIcon, MessageSquare } from "lucide-react";

const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    current: true,
    icon: MenuIcon,
  },
  {
    name: "Chat",
    href: "/chat",
    current: false,
    icon: MessageSquare,
  },
  {
    name: "Images",
    href: "/images",
    current: false,
    icon: Image,
  },
  {
    name: "Code",
    href: "/code",
    current: false,
    icon: Code,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col  w-full bg-purple-800">
      <Link href="/">
        <div className="text-2xl font-bold pl-8 pt-5 text-white">Imagine AI</div>
      </Link>
      <div className="flex flex-col justify-start pt-10">
        {routes.map((item) => (
          <div key={item.name} className="ml-4 w-full">
            <Link href={item.href}>
              <Button className="bg-transparent hover:bg-purple-900 w-52 ">
                {item.icon && <item.icon className="mr-2" />}
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
