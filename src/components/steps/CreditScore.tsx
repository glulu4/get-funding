import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import {useForm} from '@/context/form-context';

// STEP 1
export default function CreditScore({nextFn, backFn}: StepProps) {
    const options = [
        "Excellent (720+)",
        "Good (680-719)",
        "Fair (640-679)",
        "Poor (639 or less)"
    ];
    const [selected, setSelected] = useState(options[0]);

    const {dispatch} = useForm();
    const handleNext = () => {
        dispatch({
            type: "UPDATE_FIELD",
            field: "creditScore",
            value: selected,
        });
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What is your credit score?"
            formInput={
                <RadioSelect
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