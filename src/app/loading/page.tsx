// "use client"

// import {useForm} from '@/context/form-context';
// import React, {useEffect, useState} from 'react'

// export default function page() {


//     // const [isSubmit]

//     const {state, dispatch} = useForm();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {

//         const submit = async () => {
//             await handleSubmit()
//         }
        
//         submit()


//     }, [])


//     const handleSubmit = async () => {

//         setLoading(true);
//         const formData = {
//             ...state
//         }

//         try {
//             const response = await fetch("/api/sendInfo", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({formData}),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.error || "Something went wrong");
//             }

//             alert("Message sent successfully!");
//             // setFormData({name: "", email: "", message: ""}); // Reset form
//         } catch (error) {
//             alert(error instanceof Error ? error.message : "Failed to send message");
//         } finally {
//             setLoading(false);

//         }
//     };


//     if (loading) {
//         return <div>Loading...</div>
//     }
//   return (
//     <div>page</div>
//   )
// }
