// import {ChevronDownIcon} from 'lucide-react';
// import React from 'react'

// interface DropdownProps {
//     selected: string;
//     setSelected: (option: string) => void;
//     options: string[];
// }

// export default function Dropdown({
//     selected,
//     setSelected,
//     options,
// }: DropdownProps) {
//     return (
//         <div className="relative grid w-full ">
//             <select
//                 value={selected}
//                 onChange={(event) => {
//                     const val: string = event.target.value;
//                     setSelected(val)
//                 }}
//                 name={selected}
//                 aria-label={`Selected, ${selected}`}
//                 className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-6 pl-4 pr-10 text-lg text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryGreen sm:text-base/7"
//             >
//                 {options.map((option) => (
//                     <option key={option} value={option}>
//                         {option}
//                     </option>
//                 ))}


//             </select>
//             <ChevronDownIcon
//                 aria-hidden="true"
//                 className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//             />
//         </div>


//     )
// }


import {ChevronDownIcon} from 'lucide-react';
import React from 'react';

interface DropdownProps {
    selected: string;
    setSelected: (option: string) => void;
    options: string[];
}

export default function Dropdown({
    selected,
    setSelected,
    options,
}: DropdownProps) {
    return (
        <div className="relative grid w-full max-w-full">
            <select
                value={selected}
                onChange={(event) => {
                    const val: string = event.target.value;
                    setSelected(val);
                }}
                name={selected}
                aria-label={`Selected, ${selected}`}
                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-4 pl-4 pr-10 text-sm sm:text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primaryGreen truncate w-full"
            >
                {options.map((option) => (
                    <option key={option} value={option} className="truncate text-lg">
                        {option}
                    </option>
                ))}
            </select>
            <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
        </div>
    );
}