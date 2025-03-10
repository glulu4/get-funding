import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';

// STEP 1


interface QuestionProps extends StepProps {
    question: string;
    formInput: React.ReactElement
}


export default function Question({
    nextFn,
    backFn,
    question,
    formInput
}: QuestionProps) {


    return (
        <div className="flex flex-col items-center  space-y-10">
            <h2 className="font-bold pt-4 sm:pt-12 font-serif text-4xl sm:text-5xl text-center">
                {question}
            </h2>

            <div className='flex flex-col items-center sm:w-7/12 '>
                {formInput}

            </div>


            <ButtonNav
                goBack={backFn}
                goNext={nextFn}
            />
        </div>
    );
}