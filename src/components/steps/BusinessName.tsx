import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';
import TextInput from '../TextInput';
import {useForm} from '@/context/form-context';

// STEP 1
export default function BusinessName({nextFn, backFn}: StepProps) {


    const [name, setName] = useState("");

    const {dispatch} = useForm();
    const handleNext = () => {

        // Check if name is empty
        if (!name.trim()) {
            alert("Please enter your business name.");
            return;
        }
        dispatch({
            type: "UPDATE_FIELD",
            field: "businessName",
            value: name,
        });
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
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}