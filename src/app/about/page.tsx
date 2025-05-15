'use client'
import {useState} from 'react'
import Hero from '@/components/about/Hero'
import Timeline from '@/components/about/Timeline'
import CoreValues from '@/components/about/CoreValues'
import Review from '@/components/about/Review'
import Content from '@/components/about/Content'
import Apply from '@/components/Apply'

export default function Page() {

  return (
    <div className="">


      <main className=" space-y-24">
        {/* Hero section */}

        <Hero
        title='Get to know Business Name'
        description='Learn more about our mission, values, and how we’re making funding accessible to everyone.'
        imageSrc='/images/about.png'
          // imageSrc="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
          imageAlt='Gett Funded team'

        />


<Content/>


      <CoreValues/>

      {/* <Review/> */}
        {/* Timeline section */}
        <Timeline/>

        {/* Content section */}

      <Apply/>
      </main>
    </div>
  )
}
