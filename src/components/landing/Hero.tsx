// "use client"
// import {useId} from 'react'
// import {Container} from '@/components/Container'
// import IPhoneImage from './IPhoneImage'

// function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
//     let id = useId()

//     return (
//         <div {...props}>
//             <svg
//                 viewBox="0 0 1026 1026"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute inset-0 h-full w-full animate-spin-slow"
//             >
//                 <path
//                     d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
//                     stroke="#D4D4D4"
//                     strokeOpacity="0.7"
//                 />
//                 <path
//                     d="M513 1025C230.23 1025 1 795.77 1 513"
//                     stroke={`url(#${id}-gradient-1)`}
//                     strokeLinecap="round"
//                 />
//                 <defs>
//                     <linearGradient
//                         id={`${id}-gradient-1`}
//                         x1="1"
//                         y1="513"
//                         x2="1"
//                         y2="1025"
//                         gradientUnits="userSpaceOnUse"
//                     >
//                         <stop stopColor="#06b6d4" />
//                         <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
//                     </linearGradient>
//                 </defs>
//             </svg>
//             <svg
//                 viewBox="0 0 1026 1026"
//                 fill="none"
//                 aria-hidden="true"
//                 className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
//             >
//                 <path
//                     d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
//                     stroke="#D4D4D4"
//                     strokeOpacity="0.7"
//                 />
//                 <path
//                     d="M913 513c0 220.914-179.086 400-400 400"
//                     stroke={`url(#${id}-gradient-2)`}
//                     strokeLinecap="round"
//                 />
//                 <defs>
//                     <linearGradient
//                         id={`${id}-gradient-2`}
//                         x1="913"
//                         y1="513"
//                         x2="913"
//                         y2="913"
//                         gradientUnits="userSpaceOnUse"
//                     >
//                         <stop stopColor="#06b6d4" />
//                         <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
//                     </linearGradient>
//                 </defs>
//             </svg>
//         </div>
//     )
// }

// export function Hero() {

//     return (
//         <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 min-h-[calc(70vh-4rem)]">
//             <Container>
//                 <div className="lg:grid lg:grid-cols-12 lg:gap-y-20 ">

//                     <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 space-y-12">
//                         <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-serif">
//                             Gett Funded
//                         </h1>
//                         <p className="mt-6 text-lg text-white">
//                             By leveraging insights from our network of industry insiders,
//                             you’ll know exactly when to buy to maximize profit, and exactly
//                             when to sell to avoid painful losses.
//                         </p>

//                     </div>
//                     <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
//                         <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
//                         <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
//                             <IPhoneImage/>
//                         </div>
//                     </div>

//                 </div>
//             </Container>
//         </div>
//     )
// }



"use client";
import {useId} from "react";
import {Container} from "@/components/Container";
import IPhoneImage from "./IPhoneImage";
import MyButton from "../ui/MyButton";
import {ChevronRightIcon, Link} from "lucide-react";
import {config} from "@/config";

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<"div">) {
    let id = useId();

    return (
        <div {...props}>
            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-slow"
            >
                <path
                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M513 1025C230.23 1025 1 795.77 1 513"
                    stroke={`url(#${id}-gradient-1)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-1`}
                        x1="1"
                        y1="513"
                        x2="1"
                        y2="1025"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
            >
                <path
                    d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M913 513c0 220.914-179.086 400-400 400"
                    stroke={`url(#${id}-gradient-2)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-2`}
                        x1="913"
                        y1="513"
                        x2="913"
                        y2="913"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export function Hero() {
    return (

        <div className='overflow-hidden'>
            <div className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8 py-20 flex flex-col sm:flex-row justify-around">

                {/* Text Content */}
                {/* <div className="relative z-10 mx-auto max-w-xl  lg:col-span-7 lg:max-w-xl lg:pt-6 xl:col-span-6 space-y-12"> */}
                <div className='flex flex-col justify-start items-center sm:items-start max-w-xl md:pt-12 space-y-8 mb-16 sm:mb-0 text-center sm:text-left'>
                    <h2 className="text-lg font-semibold text-primaryGreenLight uppercase">
                        Fast & Flexible Funding
                    </h2>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-serif">
                       {config.name.name}
                    </h1>
                    <p className="mt-6 text-lg text-white">
                        Get the funding you need—fast. We provide all types of business and personal funding solutions with quick approval and expert support.

                    </p>
                    <MyButton
                        text='Apply now'
                        arrow
                        href="/apply"
                        invert
                    />
                </div>

                <div className="relative flex items-center justify-center mt-12 sm:mt-0 w-full sm:w-auto">
                    {/* Background Illustration */}
                    <BackgroundIllustration className="absolute top-0 left-1/2 h-[900px] w-[900px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />

                    {/* iPhone Image */}
                    <div className="relative z-30 mx-auto sm:mx-0 lg:h-auto">
                        <IPhoneImage />
                    </div>
                </div>

            </div>
        </div>
    );
}