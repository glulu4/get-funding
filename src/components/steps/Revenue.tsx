import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';
import {useForm} from '@/context/form-context';

// STEP 1
export default function Revenue({nextFn, backFn}: StepProps) {


    const [annualRevenue, setAnnualRevenue] = useState("");
    const [errorOccured, setErrorOccured] = useState(false)
    const [hasTyped, setHasTyped] = useState(false); // Track if user has started typing
    const {dispatch} = useForm();


    const handleNext = () => {
        if (!annualRevenue || parseInt(annualRevenue) <= 0) {
            setErrorOccured(true);
            setHasTyped(false);
            return
        }

        dispatch({
            type: "UPDATE_FIELD",
            field: "annualRevenue",
            value: annualRevenue,
        });

        
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What is your annual revenue?"
            formInput={
                <NumberInput
                    hasTyped={hasTyped}
                    setHasTyped={setHasTyped}
                    errorOccured={errorOccured}
                    label="Annual Revenue"
                    prefix='$'
                    value={annualRevenue}
                    setValue={setAnnualRevenue}
                    />
            }
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}