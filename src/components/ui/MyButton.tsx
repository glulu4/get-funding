// import {ChevronRightIcon} from 'lucide-react';
// import Link from 'next/link';
// import React from 'react'


// interface ButtonNavProps {
//     text:string
//     // onClick: () => void;
//     arrow?: boolean;
//     invert?: boolean;
//     href: string;

// }

// export default function MyButton({
//     text,
//     href,
//     // onClick,
//     arrow,
// }: ButtonNavProps) {
//   return (
//       <Link
//       href={href}
//         //   onClick={onClick}
//           className="flex flex-row items-center justify-center  px-8 py-4 rounded-lg text-lg font-semibold text-white hover:bg-primaryGreenLight bg-primaryGreenDark transition-all duration-300"
//       >
//           {text}
//           {arrow && (
//                 <ChevronRightIcon className="w-6 h-6 ml-2" />
//           )}
//       </Link>
//   )
// }
import {ChevronRightIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx' // Optional but makes conditional classes easier

interface ButtonNavProps {
    text: string
    arrow?: boolean
    invert?: boolean
    href: string
}

export default function MyButton({
    text,
    href,
    arrow,
    invert = false,
}: ButtonNavProps) {
    return (
        <Link
            href={href}
            className={clsx(
                'flex flex-row items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300',
                invert
                    ? // Inverted colors
                    'bg-white text-primaryGreenDark hover:bg-gray-100'
                    : // Default colors
                    'bg-primaryGreenDark text-white hover:bg-primaryGreenLight'
            )}
        >
            {text}
            {arrow && <ChevronRightIcon className="w-6 h-6 ml-2" />}
        </Link>
    )
}
