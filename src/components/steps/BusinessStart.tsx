import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import GroupSelect from '../GroupSelect';

// STEP 1
export default function BusinessStart({nextFn, backFn}: StepProps) {
    const options = [
        '0 - 5 Months',
        '6 - 11 Months',
        '1 - 2 Years',
        '3 - 4 Years',
        '5-10 Years',
        '10+ Years',
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
            question="When did you start your business?"
            formInput={
                <GroupSelect
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