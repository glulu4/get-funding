"use client"

import {STEPS} from '@/constants/steps';
import {useForm} from '@/context/form-context';
import {useRouter} from 'next/navigation';
import React from 'react';

interface ButtonNavProps {
    goBack: () => void;
    goNext: () => void;
}

export default function ButtonNav({goBack, goNext}: ButtonNavProps) {
    const {state} = useForm();
    const isFirstStep = state.stepIndex === 0;
    const isLastStep = state.stepIndex === STEPS.length - 1;

    const router = useRouter();


    return (
        <div className="flex flex-row gap-5 justify-between items-center mt-6 pt-10 w-full max-w-lg mx-auto">
            {/* Back Button */}
            <button
                onClick={goBack}
                disabled={isFirstStep}
                className={`w-2/4 px-8 py-4 rounded-lg border-2 text-lg font-medium transition-all duration-300
          ${isFirstStep
                        ? "border-gray-300 text-gray-400 cursor-not-allowed opacity-50"
                        : "border-gray-500 text-gray-700 hover:bg-primaryGreenDark hover:text-white"
                    }`}
            >
                Back
            </button>

            {/* Next Button */}
            {isLastStep ? (
                <button
                    onClick={() => router.push('/complete')}
                    className="w-2/4 px-8 py-4 rounded-lg text-lg font-semibold text-white bg-primaryGreenLight hover:bg-primaryGreenDark transition-all duration-300"
                >
                    Complete
                </button>
            ) : (
                <button
                    onClick={goNext}
                    className="w-2/4 px-8 py-4 rounded-lg text-lg font-semibold text-white bg-primaryGreenLight hover:bg-primaryGreenDark transition-all duration-300"
                >
                    Next
                </button>
            )}
        </div>
    );
}
