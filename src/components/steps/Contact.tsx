import React, {useState} from 'react';
import {StepProps} from '../MuliStep';
import Question from '../ui/Question';
import TextInput from '../TextInput';
import {useForm} from '@/context/form-context';

// STEP 1
export default function Contact({nextFn, backFn}: StepProps) {


    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const {dispatch} = useForm();


    const handleNext = async () => {
        dispatch({
            type:"SET_CONTACT_INFO",
            contactInfo:{
                firstName:fname,
                lastName:lname,
                email,
                phone
            }
        })
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
                        label="First Name"

                        required
                        value={fname}
                        setValue={setFName}
                    />
                    <TextInput
                        label="Last Name"
                    required
                        value={lname}
                        setValue={ setLName}
                    />
                    <TextInput
                        label="Email"
                        required
                        type='email'
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Phone Number"
                        type='tel'
                        required
                        value={phone}
                        setValue={setPhone}
                    />
                </div>

            }
            nextFn={handleNext}
            backFn={handleBack}
        />
    );
}