import React from 'react';
import {FaBolt, FaSyncAlt, FaSearch} from 'react-icons/fa';

export default function Content() {
    const features = [
        {
            name: 'Lightning-Fast Approvals',
            description: 'Our streamlined process means you can get approved in minutes, not days. When opportunity knocks, we help you answer.',
            icon: FaBolt,
        },
        {
            name: 'Flexible Funding Options',
            description: 'From short-term loans to business capital, we offer tailored solutions that adapt to your unique financial needs.',
            icon: FaSyncAlt,
        },
        {
            name: 'Transparent Terms',
            description: 'No hidden fees, no complicated jargon. We believe in clear, straightforward lending that puts you in control.',
            icon: FaSearch,
        },
    ];

    return (
        <div className=" flex items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primaryGreenDark">
                        Empowering Financial Freedom, One Loan at a Time
                    </h2>
                    <p className="mt-6 text-lg sm:text-2xl text-gray-600">
                        At Company X, we understand that financial opportunities don’t wait. Our mission is to provide fast, flexible, and accessible funding solutions that help you seize the moment.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-20 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(({name, description, icon: Icon}) => (
                        <div key={name} className="flex flex-col items-start text-left">
                            <div className="flex items-center mb-4 justify-center mx-auto">
                                <Icon className="text-3xl text-primaryGreenLight mr-4" />
                                <h3 className="text-xl font-semibold text-primaryGreenDark">{name}</h3>
                            </div>
                            <p className="text-gray-600 text-lg text-center leading-7">{description}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="mt-24 border-t border-gray-200 pt-16 text-center max-w-3xl mx-auto">
                    <blockquote className="text-2xl font-semibold text-primaryGreenDark">
                        “We’re not just lending money. We’re investing in your potential, your dreams, and your future.”
                    </blockquote>
                    <p className="mt-6 text-gray-500 italic text-lg">— The Company X Team</p>
                </div>
            </div>
        </div>
    );
}
