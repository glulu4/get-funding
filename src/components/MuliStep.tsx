// "use client";
// import {useState} from "react";
// import {motion, AnimatePresence} from "framer-motion";

// import BusinessType from "./steps/BusinessType";
// import BusinessAge from "./steps/BusinessAge";
// import Purpose from "./steps/Purpose";
// import Money from "./steps/Money";

// const steps = [BusinessType, BusinessAge, Purpose, Money];

// export default function MultiStepForm() {
//     const [stepIndex, setStepIndex] = useState(0);

//     const [direction, setDirection] = useState<"forward" | "backward">("forward");

//     const goNext = () => {
//         setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
//         setDirection("forward");
//     }
//     const goBack = () => {
//         setStepIndex((prev) => Math.max(prev - 1, 0))
//         setDirection("backward");
//     };

//     const StepComponent = steps[stepIndex];

//     return (
//         <div className="relative w-5/6 mx-auto">
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={stepIndex} // This triggers animation when step changes
//                     initial={{x: 300, opacity: 0}} // Slide in from right
//                     animate={{x: 0, opacity: 1}} // Fade in at center
//                     exit={{x: -300, opacity: 0}} // Slide out to left
//                     transition={{duration: 0.4, 
//                         ease:  direction ==="forward" ? "easeIn" : "easeOut"}} // Smooth transition
//                     className="w-full"
//                 >
//                     <StepComponent next={goNext} 
//                     //goBack={goBack} 
//                     />
//                 </motion.div>
//             </AnimatePresence>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between mt-4">
//                 <button onClick={goBack} disabled={stepIndex === 0} className="px-4 py-2 bg-gray-300 rounded">
//                     Back
//                 </button>
//                 <button onClick={goNext} disabled={stepIndex === steps.length - 1} className="px-4 py-2 bg-green-500 text-white rounded">
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }




"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import BusinessType from "./steps/BusinessType";
import Money from "./steps/Money";
import {useForm} from "@/context/form-context";
import Purpose from "./steps/Purpose";
import BusinessStart from "./steps/BusinessStart";
import Revenue from "./steps/Revenue";
import CreditScore from "./steps/CreditScore";
import Industry from "./steps/Industry";
import Zipcode from "./steps/Zipcode";
import BusinessName from "./steps/BusinessName";
import Contact from "./steps/Contact";

const steps = [BusinessType, Money, Purpose,
     BusinessStart, Revenue, CreditScore, Industry, Zipcode, BusinessName, Contact];


export type StepProps = {
    nextFn: () => void;
    backFn: () => void;
};

export default function MultiStepForm() {
    // const [stepIndex, setStepIndex] = useState(0);
    const {state, dispatch} = useForm();
    const [direction, setDirection] = useState<"forward" | "backward">("forward");

    const nextFn = () => {

        dispatch({type:"INCREASE_STEP"})
        // setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
        setDirection("forward");
    };

    const backFn = () => {
        dispatch({type: "DECREASE_STEP"})
        setDirection("backward");
    };

    const StepComponent = steps[state.stepIndex];

    if (!StepComponent) {
        dispatch({type: "DECREASE_STEP"})
        return null;
    }

    // Define animation variants based on direction
    const getAnimationVariants = () => {
        if (direction === "forward") {
            return {
                initial: {x: 300, opacity: 0}, // Slide in from right
                animate: {x: 0, opacity: 1},   // Fade in at center
                // exit: {x: -300, opacity: 0},   // Slide out to left
            };
        } else {
            return {
                initial: {x: -300, opacity: 0}, // Slide in from left
                animate: {x: 0, opacity: 1},    // Fade in at center
                // exit: {x: -300, opacity: 0},     // Slide out to right
            };
        }
    };

    return (
        <div className="relative w-5/6 mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={state.stepIndex} // This triggers animation when step changes
                    initial={getAnimationVariants().initial}
                    animate={getAnimationVariants().animate}
                    // exit={getAnimationVariants().exit}
                    transition={{
                        duration: 0.4,
                        ease: direction === "forward" ? "easeIn" : "easeOut",
                    }}
                    className="w-full"
                >
                    <StepComponent 
                        nextFn={nextFn} 
                        backFn={backFn}
                     />
                </motion.div>
            </AnimatePresence>

        </div>
    );
}