import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import {useForm} from '@/context/form-context';

// STEP 1
export default function BusinessType({nextFn, backFn}: StepProps) {

    const {state, dispatch} = useForm();

    const options = [
        'Sole Proprietorship',
        'Partnership',
        'S Corporation',
        'C Corporation',
        'Limited Liability Company',
    ];
    const [selected, setSelected] = useState(options[0]);

    const handleNext = () => {

        dispatch({
            type: "UPDATE_FIELD",
            field: "businessType",
            value: selected,
        });
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
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}