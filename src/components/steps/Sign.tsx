"use client"

import React, {useState} from 'react'
import Question from '../ui/Question'
import {useForm} from '@/context/form-context';
import {StepProps} from '../MuliStep';
import {FormState} from '@/reducers/form-reducer';
import {useRouter} from 'next/navigation';
import SignatureConsentForm from '../SignatureConsentForm';
import toast from 'react-hot-toast';

export default function Sign({nextFn, backFn}: StepProps) {




    const {state} = useForm();
    const router = useRouter();

    const [name, setName] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async () => {



        toast('This has been disabled',
            {
                icon: '🚫',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
        return;
        
        if (!agreed || !name.trim()) {
            alert("Please enter your full name and check the agreement box.");
            return;
        }

        try {
            const agreementRes = await fetch("/api/agreement", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: state.firstName,
                    lastName: state.lastName,
                    email: state.email,
                    termsVersion: "v1.0",
                    userAgent: navigator.userAgent,
                    source: "gett-funded",
                }),
            });




            if (!agreementRes.ok) {
                throw new Error("Failed to store agreement.");
            }
            else {
                console.log("Agreement stored successfully.");

            }

            // Step 2: Send form data to contact endpoint
            const formData: FormState = {
                ...state,
            };

            const infoRes = await fetch("/api/sendInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData}),
            });

            const data = await infoRes.json();

            if (!infoRes.ok) {
                throw new Error(data.error || "Something went wrong sending contact info");
            }


            router.push("/complete");
        } catch (error) {
            alert(error instanceof Error ? error.message : "An error occurred.");
        }

    };

    const handleBack = () => {
        backFn()
    }

    return (
        <Question
            question="Sign Below"
            formInput={


                <div>

                    <SignatureConsentForm
                        name={name}
                        setName={setName}
                        agreed={agreed}
                        setAgreed={setAgreed}
                    />
                </div>

            }
            nextFn={handleSubmit}
            backFn={handleBack}
        />
    )
}

