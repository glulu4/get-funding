import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';

// STEP 1
export default function BusinessType({nextFn, backFn}: StepProps) {
    const options = [
        'Sole Proprietorship',
        'Partnership',
        'S Corporation',
        'C Corporation',
        'Limited Liability Company',
    ];
    const [selected, setSelected] = useState(options[0]);

    const handleNext = (option:string) => {
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What type of business do you own?"
            formInput={
                <RadioSelect
                    options={options}
                    selected={selected}
                    setSelected={setSelected}
                />
            }
            nextFn={nextFn}
            backFn={handleBack}
        />
    );
}