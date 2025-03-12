import {
    AdjustmentsHorizontalIcon,
    ArrowPathIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'

// const features = [
//     {
//         name: 'Quick Approval',
//         description:
//             'Get funding approved in record time with our streamlined process and minimal paperwork.',
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: 'Flexible Options',
//         description:
//             'We offer a wide range of funding solutions—from short-term loans to long-term financing—tailored to your needs.',
//         icon: ArrowPathIcon,
//     },
//     {
//         name: 'Expert Support',
//         description:
//             'Our experienced team is here to guide you every step of the way, ensuring you secure the best deal possible.',
//         icon: FingerPrintIcon,
//     },
//     {
//         name: 'Competitive Rates',
//         description:
//             'Enjoy competitive interest rates and repayment terms that are designed to work for your business.',
//         icon: LockClosedIcon,
//     },
// ]


const features = [
    {
        name: 'Quick Approval',
        description:
            'Get funding approved in record time with our streamlined process and minimal paperwork.',
        icon: CheckBadgeIcon,
    },
    {
        name: 'Flexible Options',
        description:
            'We offer a wide range of funding solutions—from short-term loans to long-term financing—tailored to your needs.',
        icon: AdjustmentsHorizontalIcon,
    },
    {
        name: 'Expert Support',
        description:
            'Our experienced team is here to guide you every step of the way, ensuring you secure the best deal possible.',
        icon: UserGroupIcon,
    },
    {
        name: 'Competitive Rates',
        description:
            'Enjoy competitive interest rates and repayment terms that are designed to work for your business.',
        icon: BanknotesIcon,
    },
]

export default function Features() {
    return (
        <div className="rounded-sm py-24 sm:py-32">
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-primaryGreen">
                        Fast & Flexible Funding
                    </h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-primaryGreenDark  sm:text-5xl lg:text-balance">
                        Our Funding Solutions
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We offer a variety of funding options to empower your business growth. Whether you need a quick cash injection or long-term financing, we&#39;ve got you covered.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base/7 font-bold text-primaryGreenDark ">
                                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryGreenLight">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
