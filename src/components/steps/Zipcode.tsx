import React, {useState} from 'react';
import {StepProps} from '../MuliStep';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';

// STEP 1
export default function Zipcode({nextFn, backFn}: StepProps) {


    const [zipCode, setZipCode] = useState("");
    const [errorOccured, setErrorOccured] = useState(false)
    const [hasTyped, setHasTyped] = useState(false); // Track if user has started typing

    const handleNext = () => {

        if (zipCode.length !== 5) {
            // alert("Please enter a valid zip code")
            setErrorOccured(true);
            setHasTyped(false);
            return
        }
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
                    hasTyped={hasTyped}
                    setHasTyped={setHasTyped}
                    errorOccured={errorOccured}
                    label="Zip Code"
                    value={zipCode}
                    setValue={setZipCode}
                    />
            }
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}