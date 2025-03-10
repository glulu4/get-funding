"use client";

import React from "react";
import clsx from "clsx";

interface NumberInputProps {
    label: string;
    value: string;
    setValue: (val: string) => void;
    prefix?: string; // Optional, e.g., "$"
}

export default function NumberInput({label, value, setValue, prefix}: NumberInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only numbers and commas
        const formattedValue = e.target.value.replace(/[^0-9,]/g, "");
        setValue(formattedValue);
    };

    return (
        <div className="flex flex-col w-full">
            {/* Label */}
            <label className="text-sm font-semibold text-primaryGreenDark mb-1">{label}</label>

            {/* Input Wrapper */}
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-green-400">
                {/* Prefix Symbol (e.g., "$") */}
                {prefix && <span className="text-lg font-medium text-gray-500 mr-2">{prefix}</span>}

                {/* Input Field */}
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="0"
                    className={clsx(
                        "w-full text-lg font-semibold text-gray-600 bg-transparent focus:outline-none"
                    )}
                />
            </div>
        </div>
    );
}
