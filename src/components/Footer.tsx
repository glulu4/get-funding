"use client";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="mt-8 md:mt-16 bg-primaryGreenDark text-white font-semibold p-8 lg:p-8">
      <div className="flex flex-1 items-center justify-around">
        <div className="text-sm">
          Gett Funded ©  {new Date().getFullYear()}
        </div>
        <div className="text-xs hidden lg:block">
          <Link
            href={`/`}
          >
            Apply Now
          </Link>
        </div>

      </div>

    </footer>
  );
};
