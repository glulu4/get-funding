"use client"
import MultiStepForm from '@/components/MuliStep'
import React from 'react'
import FormProvider from "@/context/form-context";

export default function Page() {
  return (
    <div className='pt-10 md:pt-16'>
      
      <FormProvider>
        <MultiStepForm />

      </FormProvider>

    </div>
  )
}
