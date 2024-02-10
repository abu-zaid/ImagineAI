import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-blue-500">
          <SheetDescription className="w-full ">
            <ul className="flex flex-col gap-4 mt-10">
              <li className="ml-4">
                <Link href="/features">
                  <Button variant="link" className="w-full text-white">
                    Features
                  </Button>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/about">
                  <Button variant="link" className="w-full text-white">
                    About
                  </Button>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/contact">
                  <Button variant="link" className="w-full text-white">
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
