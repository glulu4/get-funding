"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import MyButton from "./ui/MyButton";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Apply Now", href: "" },
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();



  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item, index) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-primaryGreen text-primaryGreenDark font-semibold text-xl",
                pathname === item.href && "font-bold",
              )}
            >
              {item.name === "Apply Now" ? (
                <MyButton
                  key={`${index}-${item.href}`}
                arrow
                  text="Apply Now"
                  href="/apply"
                />
              ) :
                item.name
              }

            </a>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className=" flex items-center justify-between px-4 sm:px-6 md:px-10 bg-white shadow-md">
      <meta name="theme-color" content="#fff" />
      <Link href="/">

        <Image
          src="/images/icon.png"
          alt="Roofing Icon"
          objectFit="contain"
          width={100}
          height={75}
        // className="object-contain"
        />
        
      </Link>
      <Navigation />
    </section>
  );
};
