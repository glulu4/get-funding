import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';

// STEP 1
export default function Revenue({nextFn, backFn}: StepProps) {


    const [annualRevenue, setAnnualRevenue] = useState("");

    const handleNext = (option: string) => {
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="When did you start your business?"
            formInput={
                <NumberInput
                    label="Annual Revenue"
                    prefix='$'
                    value={annualRevenue}
                    setValue={setAnnualRevenue}
                    />
            }
            nextFn={nextFn}
            backFn={handleBack}
        />
    );
}