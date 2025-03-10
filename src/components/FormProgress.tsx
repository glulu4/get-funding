"use client";
import React, {useEffect, useState} from "react";
import clsx from "clsx";

/**
 * Helper to chunk an array into sub-arrays of a given size.
 */
function chunkArray<T>(array: T[], size: number): T[][] {
    const results: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        results.push(array.slice(i, i + size));
    }
    return results;
}

import {STEPS, MOBILE_TITLES} from "@/constants/steps";
import {useForm} from "@/context/form-context";

export default function FormProgress() {
    const {state} = useForm();
    const {stepIndex} = state;

    // Track container width for dynamic bar sizing
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateSize = () => {
            setContainerWidth(document.getElementById("progress-container")?.clientWidth || 600);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // **Consistent 2-step chunks for both mobile & desktop**
    const chunkSize = 2;
    const barChunks = chunkArray(STEPS, chunkSize);
    const currentChunkIndex = Math.floor(stepIndex / chunkSize);

    // Bar width calculation based on available space
    const barWidth = `${Math.max(8, containerWidth / barChunks.length - 20)}px`;

    return (
        <div id="progress-container" className="flex flex-row items-center w-5/6 justify-center mx-auto p-2">
            {barChunks.map((chunk, barIndex) => {
                const isCompleted = barIndex < currentChunkIndex;
                const isActive = barIndex === currentChunkIndex;

                return (
                    <div key={barIndex} className="flex flex-col items-center justify-center w-full mb-4">
                        {/* Labels Above the Bar */}
                        <div className="flex flex-row justify-center w-full mb-2">
                            <span className="text-sm font-semibold text-gray-700 text-center">
                                {MOBILE_TITLES[barIndex] || "Step Group"}
                            </span>
                        </div>

                        {/* The horizontal bar */}
                        <div
                            className={clsx(
                                "h-1 rounded-full transition-all duration-300",
                                isCompleted ? "bg-green-500" : isActive ? "bg-green-300" : "bg-gray-400"
                            )}
                            style={{width: barWidth}}
                        />
                    </div>
                );
            })}
        </div>
    );
}
