"use client";
import {useForm} from "@/context/form-context";
import React, {useEffect} from "react";
import Confetti from "react-confetti-boom";
import FormProvider from "@/context/form-context";

export default function Page() {
  return (
    <FormProvider> {/* ✅ Ensures useForm() is wrapped correctly */}
      <CongratulationsPage />
    </FormProvider>
  );
}

function CongratulationsPage() {
  const {dispatch} = useForm(); // ✅ Now safely inside <FormProvider>

  useEffect(() => {
    dispatch({type: "CLEAR_STATE"});
  }, [dispatch]);

  return (
    <div className="mx-auto px-5 min-h-screen">
      <Confetti mode="boom" particleCount={500} colors={['#ff577f', '#ff884b', "#FFFF00"]} />

      <div className="flex flex-col items-center justify-center space-y-8 text-primaryGreenDark mt-20">
        <h1 className="font-serif font-semibold text-4xl sm:text-6xl">
          Congratulations
        </h1>
        <p className="text-lg sm:text-xl text-center">
          Someone will be reaching out to you shortly.
        </p>
      </div>
    </div>
  );
}
