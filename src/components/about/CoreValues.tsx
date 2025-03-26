import React from 'react'
import {FaHandshake, FaAward, FaLightbulb} from "react-icons/fa"; // Import react-icons


export default function CoreValues() {
  return (
      <div className="mt-24 bg-primaryGreenDark p-10 w-5/6 rounded-lg mx-auto space-y-16">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white">
              Our Core Values
          </h2>
          <p className="mt-4 text-center text-xl text-white max-w-3xl mx-auto">
              At Gett Funded, we put our values into action every day. They guide our decisions and shape our interactions with clients, partners, and each other.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                  <div className="flex justify-center items-center bg-primaryGreenLight rounded-full w-16 h-16 mx-auto">
                      <FaHandshake className="h-8 w-8 text-white" /> {/* New Integrity Icon */}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Integrity</h3>
                  <p className="mt-2 text-gray-200">
                      We believe in doing what’s right, every time. Honesty and transparency are at the heart of our work.
                  </p>
              </div>
              <div className="text-center">
                  <div className="flex justify-center items-center bg-primaryGreenLight rounded-full w-16 h-16 mx-auto">
                      <FaAward className="h-8 w-8 text-white" /> {/* New Excellence Icon */}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Excellence</h3>
                  <p className="mt-2 text-gray-200">
                      Quality craftsmanship and attention to detail define every project we undertake.
                  </p>
              </div>
              <div className="text-center">
                  <div className="flex justify-center items-center bg-primaryGreenLight rounded-full w-16 h-16 mx-auto">
                      <FaLightbulb className="h-8 w-8 text-white" /> {/* New Innovation Icon */}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Innovation</h3>
                  <p className="mt-2 text-gray-200">
                      We leverage the latest technology to deliver energy-efficient and sustainable solutions.
                  </p>
              </div>
          </div>
      </div>
  )
}
