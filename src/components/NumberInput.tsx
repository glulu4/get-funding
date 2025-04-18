"use client";

import React, {useEffect, useState} from "react";
import clsx from "clsx";

interface NumberInputProps {
    label: string;
    value: string;
    setValue: (val: string) => void;
    errorOccured: boolean; // Optional, if true, input border will turn red
    hasTyped: boolean; // Optional, if true, error message will show
    setHasTyped: (val: boolean) => void; // Optional, if true, error message will show
    prefix?: string; // Optional, e.g., "$"
}

export default function NumberInput({label, value, setValue, prefix, errorOccured, hasTyped, setHasTyped }: NumberInputProps) {




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only numbers and commas
        const formattedValue = e.target.value.replace(/[^0-9,]/g, "");
        setValue(formattedValue);
    };

    // const formatNumber = (num: string) => {

    //     if (label === "Annual Revenue") {

            
    //         const nfObject = new Intl.NumberFormat("en-US");
    //         // Convert to number, handle empty string as 0
    //         const numericValue = num === "" ? 0 : Number(num.replace(/,/g, ""));
    //         return nfObject.format(numericValue).toString();

    //     }
    // };


    const formatNumber = (num: string) => {
        if (label === "Annual Revenue") {
            if (!num) return ""; // 👈 Fix: show nothing if input is empty

            const nfObject = new Intl.NumberFormat("en-US");
            const numericValue = Number(num.replace(/,/g, ""));
            return nfObject.format(numericValue);
        }

        return num;
    };

    
    
    const showError = errorOccured && !hasTyped;    


    console.log("showError", showError);
    
    return (
        <div className="flex flex-col w-full">
            {/* Label */}
            <label className="text-sm font-semibold text-primaryGreenDark mb-1">
                {label}
            </label>

            {/* Input Wrapper */}
            <div className={clsx(
                "relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-primaryGreenLight",
                (showError) && "border-2 border-red-800"
                )}>
                {/* Prefix Symbol (e.g., "$") */}
                {prefix && <span className="text-lg font-medium text-gray-500 mr-2">{prefix}</span>}

                {/* Input Field */}
                <input
                required
                onFocus={() => setHasTyped(true)}
                    type="text"
                    value={formatNumber(value)}
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
