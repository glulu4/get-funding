'use client'

import {useState} from 'react'
import {Radio, RadioGroup} from '@headlessui/react'
import clsx from 'clsx';

interface RadioSelectProps {
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
    className?: string;
}

export default function RadioSelect({
    options,
    selected,
    setSelected,
    className,
}: RadioSelectProps) {

    return (
        <fieldset aria-label="Server size" className={clsx("w-5/6", className)}>
            <RadioGroup value={selected} onChange={setSelected} className="space-y-4">
                {options.map((plan) => (
                    <Radio
                        key={plan}
                        value={plan}
                        aria-label={plan}
                        className={clsx(
                            "sm:h-20 group relative block cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600 sm:flex sm:justify-between transition duration-300 ease-in-out",
                            selected === plan && "ring-2 ring-primaryGreenLight transform scale-105"
                        )}
                    >
                        <span className="flex items-center justify-center">
                            <p className="text-primaryGreenDark text-center font-semibold text-lg sm:text-xl xl:text-2xl">{plan}</p>
                        </span>
                    </Radio>
                ))}
            </RadioGroup>
        </fieldset>
    )
}
