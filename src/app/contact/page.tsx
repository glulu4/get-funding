"use client";

import TextInput from '@/components/TextInput';
import clsx from 'clsx';
import React, {useState} from 'react';
import Confetti from 'react-confetti-boom';
import toast from 'react-hot-toast';

export type MyFormData = {
    name: string;
    email: string;
    message: string;
};

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({email: "", message: ""});
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);




    const handleSubmit = async () => {


        toast('This has been disabled',
            {
                icon: '🚫',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
          );
        return;
        // Reset success state and mark as loading
        setSuccess(false);
        setIsLoading(true);

        // Validate required fields; if any are missing, show an alert and stop
        if (!name) {
            alert("Please enter your name.");
            setIsLoading(false);
            return;
        }
        if (!email) {
            alert("Please enter your email.");
            setIsLoading(false);
            return;
        }
        if (!message) {
            alert("Please enter your message.");
            setIsLoading(false);
            return;
        }

        // Build the form data
        const formData: MyFormData = {name, email, message};
        let submissionSuccessful = false;

        try {
            // Send the form data to the API
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({formData}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Form submitted:", data);
            submissionSuccessful = true;
            alert("Your message has been sent successfully!");
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("Failed to send your message. Please try again later.");
            setErrors({
                email: "Invalid email address",
                message: "Message is required",
            });
        } finally {
            // Reset loading state and set success flag
            setIsLoading(false);
            setSuccess(submissionSuccessful);

            // If successful, reset the form fields
            if (submissionSuccessful) {
                setName("");
                setEmail("");
                setMessage("");
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center m-3">
            {/* Main content with bottom padding to avoid footer overlap */}

            {success && (
                <Confetti mode="boom" particleCount={500} colors={['#ff577f', '#ff884b', "#FFFF00"]} />

            )}
            <main className="flex-1 ">
                <div>
                    <h1 className="text-3xl sm:text-4xl text-primaryGreenDark font-bold text-center pt-10 md:pt-24">
                        Contact Us
                    </h1>

                    <p className="mt-4 text-center text-lg font-semibold text-primaryGreenDark max-w-3xl mx-auto  py-8">
                        Someone from our team will get back to you as soon as possible. Please fill out the form below and we will reach out to you shortly.
                        </p>

                    <div className="mt-10 w-full max-w-3xl mx-auto px-4">


                        <div className="flex flex-col space-y-12">
                            {/* Name and Email Fields */}
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div className="flex-1">
                                    <TextInput
                                        label="Name"
                                        value={name}
                                        setValue={setName}
                                        placeholder="Enter your name"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="flex-1">
                                    <TextInput
                                        label="Email"
                                        value={email}
                                        setValue={setEmail}
                                        placeholder="Enter your email"
                                        required
                                        type="email"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className='flex flex-col'>
                                <label className="text-md font-semibold text-primaryGreenDark mb-2 ">Message</label>
                                <div className="relative flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-primaryGreenLight">


                                    <textarea

                                        rows={4}
                                        className={clsx(
                                            "w-full text-lg font-semibold text-gray-600 bg-transparent focus:outline-none"
                                        )}

                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Enter your message"
                                        name="message"
                                        required

                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                    )}
                                </div>
                            </div>


                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="bg-primaryGreenDark text-white font-semibold py-3 px-6 rounded-lg hover:bg-primaryGreenLight transition-colors"
                                >
                                    {isLoading ? "Loading" :"Send Message"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}