import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import NumberInput from '../NumberInput';
import TextInput from '../TextInput';
import {useForm} from '@/context/form-context';
import {FormState} from '@/reducers/form-reducer';
import {useRouter} from 'next/navigation';

// STEP 1
export default function Contact({nextFn, backFn}: StepProps) {


    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const {state, dispatch} = useForm();

    const router = useRouter();

    const handleSubmit = async () => {

        // setLoading(true);
        const formData:FormState = {

            ...state,
            lastName:lname,
            firstName:fname,
            email,
            phone   
        }
        try {
            const response = await fetch("/api/sendInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData}),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            router.push('/complete')
        } catch (error) {
            alert(error instanceof Error ? error.message : "Failed to send message");
        } finally {

        }
    };


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
        dispatch({type:"CLEAR_STATE"})

        await handleSubmit();
        // nextFn();
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