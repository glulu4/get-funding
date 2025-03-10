"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 bg-primaryGreenDark text-white p-4 lg:p-8">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          © {config.name.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-xs hidden lg:block">
          <Link
            href={`${config.baseUrl}`}
          >
            More text
          </Link>
        </div>
        <div>
          <Link href="/rss">
            <Button variant="ghost" className="p-2">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="text-xs lg:hidden">
        <Link
          href={`${config.baseUrl}`}
        >
          Blog powered by wisp
        </Link>
      </div>
    </section>
  );
};
