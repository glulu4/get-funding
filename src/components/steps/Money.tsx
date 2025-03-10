import React, {useState} from 'react';
import RadioSelect from '../RadioSelect';
import {StepProps} from '../MuliStep';
import ButtonNav from '../ButtonNav';
import Question from '../ui/Question';
import GroupSelect from '../GroupSelect';

// STEP 1
export default function Money({nextFn, backFn}: StepProps) {

  const [selectedAmount, setSelectedAmount] = useState("$10,000");

  const options = [
    "$10,000", "$20,000", "$50,000",
    "$100,000", "$250,000", "$500,000",
    "$1,000,000", "$2,000,000", "$3,000,000"
  ];

  const handleNext = () => {
    // setSelectedAmount(amount);
    nextFn();
  }

  const handleBack = () => {
    backFn()
  }

  return (
    <Question
      question="How much funding do you need?"
      formInput={
        <GroupSelect
          options={options}
          selected={selectedAmount}
          setSelected={setSelectedAmount}
        />
      }
      nextFn={handleNext}
      backFn={handleBack}
    />
  );
}