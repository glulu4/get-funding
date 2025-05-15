import {config} from '@/config';
import React, {useState} from 'react';


// const legalText = `
//     By signing above, each of the above listed business and business 
//     owner/officer (individually and collectively, “you”) authorize 
//     (Capital Quickly, LLC) and each of its representatives, successors, 
//     assigns and designees (“Recipients”) that may be involved with or 
//     acquire commercial loans having daily repayment features or purchases 
//     of future receivables including Merchant Cash Advance transactions, 
//     including without limitation the application therefor (collectively, “Transactions”) 
//     to obtain consumer and/or personal, business and investigative reports and other information 
//     about you, including credit card processor statements and bank statements, from one or more 
//     consumer reporting agencies, such as TransUnion, Experian and Equifax, and from other credit
//      bureaus, banks, creditors and other third parties.
//     You also authorize (Capital Quickly, LLC) to transmit this application form, with any of the
//      foregoing information obtained in connection with this application, to any or all of the
//       Recipients for the foregoing purposes. You also consent to the release, by any creditor 
//       or financial institution, of any information relating to any of you, to 
//       (Capital Quickly, LLC) and to each of the Recipients, on its own behalf.
//     I am providing my cellphone number and hereby consent to the receipt of 
//     text messages knowing that msg. and data rates may apply. 
//     I understand that consent to receive texts is not a condition of approval. 
//     I can expect approx. 10 msgs/month. We certify that all the 
//     information contained herein is complete, true and accurate.
//     `



export default function SignatureConsentForm({
    name,
    setName,
    agreed,
    setAgreed,
}: {
    name: string;
    setName: (val: string) => void;
    agreed: boolean;
    setAgreed: (val: boolean) => void;
}) {

    const businessName = config.name.name;

    const para1 = `
    By signing below, 
    each of the above listed 
    business and business owner/officer 
    (individually and collectively, “you”) 
    authorize the Company and each of its 
    representatives, successors, assigns, and designees (“Recipients”) 
    that may be involved with or acquire commercial loans with daily 
    repayment features or purchases of future receivables, including 
    Merchant Cash Advance transactions (collectively, “Transactions”), 
    to obtain consumer and/or personal, business, and investigative reports 
    and other relevant information about you — including but not limited to 
    credit card processor statements and bank statements — from one or more 
    consumer reporting agencies (e.g., TransUnion, Experian, Equifax), 
    banks, creditors, or other third parties.
    `

    const para2 = `
    You also authorize the Company to transmit this application form, 
    along with any information obtained in connection with it, to any or all 
    Recipients for the purposes outlined above. Additionally, you consent 
    to the release of relevant information by any financial institution or creditor 
    to the Company and its Recipients.
    `
    

    const para3 = `
                        I am providing my cellphone number and hereby consent to the receipt of text messages knowing that msg. and data rates may apply. I understand that consent to receive texts is not a condition of approval. I can expect approx. 10 msgs/month. We certify that all the information contained herein is complete, true and accurate.

    `
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4">Electronic Signature Consent</h2>
            <div className="text-sm text-gray-700 mb-6 space-y-3">
                <p>
                    {para1}
                </p>
                <p>
                    {para2}
                </p>
                <p>
                    {para3}
                </p>
            </div>

            <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <div className='py-6'>
                <label className="flex items-start space-x-2">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        className="mt-1"
                    />
                    <span >
                        By clicking this checkbox, I agree that my electronic signature and/or acknowledgement have the same force and effect as my hand written signature
                    </span>
                </label>
            </div>
        </div>
    );
} 
