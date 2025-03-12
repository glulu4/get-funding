// "use client"
// // import React from 'react'

// import {ChevronRightIcon} from "lucide-react";
// import MyButton from "./ui/MyButton";
// import Image from "next/image";


// export default function Example() {
//     return (


//         <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center pt-9 sm:space-x-24">

//             <div className="mx-auto max-w-xl lg:mx-0 lg:shrink-0 lg:pt-8 text-center sm:text-left">

//                 <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
//                     Deploy to the cloud with confidence
//                 </h1>
//                 <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                     fugiat veniam occaecat.
//                 </p>
//                 <div className="mt-10 gap-x-6">


//                     <MyButton
//                         text='Apply now'
//                         arrow
//                         href="/apply"
//                     />

//                 </div>
//             </div>
//           <div className="text-center lg:text-left">
//             <Image
//               src="/images/card2.png" // Replace with your actual image
//               alt="Paragon Exterior Team"
//               width={600}
//               height={400}
//               className=""
//             />
//           </div>

//         </div>
//     )
// }

"use client"
// import React from 'react'

import {ChevronRightIcon} from "lucide-react";
import MyButton from "./ui/MyButton";
import Image from "next/image";


export default function Example() {
    return (


        <div className="mt-16 grid grid-cols-1 py-8 md:py-12 gap-12 lg:grid-cols-2 lg:items-center pt-9 sm:space-x-24 space-y-14">

            <div className="mx-auto max-w-xl lg:mx-0 lg:shrink-0 lg:pt-8 text-center sm:text-left">

                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-primaryGreenDark sm:text-7xl">
                    How to get funding
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Fill out our short form to determine if you&#39;re eligible for funding. We provide the resources and guidance you need to succeed.
                </p>
                <div className="mt-10 gap-x-6 flex justify-center lg:justify-start">


                    <MyButton
                        text='Apply now'
                        arrow
                        href="/apply"
                    />

                </div>
            </div>
            <div className="flex justify-center-center lg:text-left">
                <Image
                    src="/images/card2.png" // Replace with your actual image
                    alt="Paragon Exterior Team"
                    width={400}
                    height={200}
                    className="object-cover"
                />
            </div>

        </div>
    )
}





