
"use client";

import React from "react";
import clsx from "clsx";

interface TextInputProps {
    label: string;
    value: string;
    setValue: (val: string) => void;
    type?: "text" | "email" | "tel"; // Supports text, email, and phone
    placeholder?: string;
    icon?: React.ReactNode; // Optional icon (e.g., email or phone icon)
    required?: boolean;
}

export default function TextInput({label, value, setValue, type = "text", placeholder, icon}: TextInputProps) {
    return (
        <div className="flex flex-col w-full">
            {/* Label */}
            <label className="text-sm font-semibold text-primaryGreenDark mb-1">{label}</label>

            {/* Input Wrapper */}
            <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-primaryGreenLight">
                {/* Optional Icon */}
                {icon && <span className="text-gray-500 mr-2">{icon}</span>}

                {/* Input Field */}
                <input
                    required
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder || ""}
                    className={clsx(
                        "w-full text-lg font-semibold text-gray-600 bg-transparent focus:outline-none"
                    )}
                    pattern={type === "email" ? "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" : undefined} // Email validation
                />
            </div>
        </div>
    );
}
