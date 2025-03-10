import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import Dropdown from '../Dropdown';
import {useForm} from '@/context/form-context';

// STEP 1
export default function Purpose({nextFn, backFn}: StepProps) {
    const options = [
        "Expansion",
        "Equipment Purchase",
        "Finance Accounts Receivable",
        "Inventory",
        "Marketing / Sales",
        "Payroll",
        "Purchase Vehicle(s)",
        "Remodel Building",
        "Refinance Debt",
        "Working Capital / Cash Flow",
        "Other"
    ];
    const [selected, setSelected] = useState(options[0]);

    const {dispatch} = useForm();
    const handleNext = () => {
        dispatch({
            type: "UPDATE_FIELD",
            field: "purpose",
            value: selected,
        });
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="Why are you seeking funding?"
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