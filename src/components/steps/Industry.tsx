'use client'
import React, {useState} from 'react';
import {StepProps} from '../MuliStep';
import Question from '../ui/Question';
import Dropdown from '../Dropdown';
import {useForm} from '@/context/form-context';

// STEP 1
export default function Industry({nextFn, backFn}: StepProps) {
    const options = [
        "Accommodation and Food Services",
        "Administrative & Support and Waste Management & Remediation Services",
        "Agriculture, Forestry, Fishing and Hunting",
        "Arts, Entertainment, and Recreation",
        "Construction",
        "Educational Services",
        "Finance and Insurance",
        "Health Care and Social Assistance",
        "Information",
        "Management of Companies and Enterprises",
        "Manufacturing",
        "Mining",
        "Other Services (except Public Administration)",
        "Professional, Scientific, and Technical Services",
        "Public Administration",
        "Real Estate Rental and Leasing",
        "Retail Trade",
        "Transportation and Warehousing",
        "Utilities",
        "Wholesale",
    ];

    const [selected, setSelected] = useState(options[4]);

    const {dispatch} = useForm();
    const handleNext = () => {
        dispatch({
            type: "UPDATE_FIELD",
            field: "industry",
            value: selected,
        });
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What industry are you in?"
            formInput={
                <Dropdown
                    options={options}
                    selected={selected}
                    setSelected={setSelected}
                />

            }
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}