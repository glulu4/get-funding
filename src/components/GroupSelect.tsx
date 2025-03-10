"use client";

import {useState} from "react";
import {RadioGroup} from "@headlessui/react";
import clsx from "clsx";

interface RadioSelectProps {
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
    className?: string;
}

export default function GroupSelect({
    options,
    selected,
    setSelected,
    className,
}: RadioSelectProps) {
    return (
        <fieldset aria-label="Select amount" className={clsx("w-full", className)}>
            <RadioGroup value={selected} onChange={setSelected} className="grid grid-cols-3 gap-4">
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option}
                        value={option}
                        className={({checked}) =>
                            clsx(
                                "flex items-center justify-center rounded-lg border border-gray-300 px-6 py-4 text-sm sm:text-lg font-semibold transition duration-300 ease-in-out cursor-pointer",
                                "focus:outline-none focus:ring-2 focus:ring-primaryGreenLight",
                                checked
                                    ? "bg-green-100 border-green-500 text-green-800 shadow-md"
                                    : "bg-white text-gray-900 hover:border-gray-400"
                            )
                        }
                    >
                        <p className="text-center mx-5">{option}</p>
                        {/* {({checked}) => (
                            <p className="text-center">{option}</span>
                        )} */}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
        </fieldset>
    );
}
