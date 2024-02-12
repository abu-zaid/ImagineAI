import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
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
                  <div className="w-full px-4 font-semibold h-10 items-center flex justify-center hover:bg-slate-200 text-center text-white rounded-lg hover:text-gray-800 transition ">
                    Features
                  </div>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/about">
                  <div className="w-full px-4 font-semibold h-10 items-center flex justify-center hover:bg-slate-200 text-center text-white rounded-lg hover:text-gray-800 transition ">
                    About
                  </div>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/contact">
                  <div className="w-full px-4 font-semibold h-10 items-center flex justify-center hover:bg-slate-200 text-center text-white rounded-lg hover:text-gray-800 transition ">
                    Contact
                  </div>
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
