import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';
import TextInput from '../TextInput';

// STEP 1
export default function Contact({nextFn, backFn}: StepProps) {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNext = (option: string) => {
        nextFn();
    }

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="What is your contact information?"
            formInput={
                <div className='flex flex-col space-y-4 sm:w-7/12'>
                    <TextInput
                        label="Full Name"

                        value={name}
                        setValue={setName}
                    />
                    <TextInput
                        label="Email"

                        type='email'
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Phone Number"
                        type='tel'
                        value={phone}
                        setValue={setPhone}
                    />
                </div>

            }
            nextFn={nextFn}
            backFn={handleBack}
        />
    );
}