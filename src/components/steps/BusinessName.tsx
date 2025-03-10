import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';
import TextInput from '../TextInput';

// STEP 1
export default function BusinessName({nextFn, backFn}: StepProps) {


    const [name, setName] = useState("");

    const handleNext = (option: string) => {
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What is the name of your business?"
            formInput={
                <TextInput
                    label="Business Name"

                    value={name}
                    setValue={setName}
                    />
            }
            nextFn={nextFn}
            backFn={handleBack}
        />
    );
}