import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';

// STEP 1
export default function Zipcode({nextFn, backFn}: StepProps) {


    const [zipCode, setZipCode] = useState("");

    const handleNext = (option: string) => {
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What is your Zip Code?"
            formInput={
                <NumberInput
                    label="Zip Code"
                    value={zipCode}
                    setValue={setZipCode}
                    />
            }
            nextFn={nextFn}
            backFn={handleBack}
        />
    );
}