"use client"

import Train from '../app/assets/FrontPgTrain.webp'
import Image from "next/image";
import { useTypingText } from "@/components/TypingTexts/useTypingTexts";
import Footer from "@/components/Footer";
export const runtime = 'edge';
export default function Index() {

  const { word} = useTypingText(
    ["Conductors", "Engineers", "Trainpersons"], 130, 20
  );
  return (
    <div className="flex-1 w-full h-1/2 flex flex-col gap-20 items-center">
      <div className="bg-gradient-to-b from-gray-400 to-gray-100">
        
        <section className="py-4 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  TCRC Calgary
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#BBD1E7]"></span>
                    <h1 className="mx-8 relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl"> Div. 355</h1>
                  </div>
                </h1>
                <p className="mt-8 text-base text-black sm:text-xl">Proudly serving
                  <span className="bg-amber-500 p-1 font-bold text-white">{word}</span>
                  employed by CPKC from Calgary.</p>
                  <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a className="underline decoration-yellow-500 decoration-4 text-shadow-sm inline-flex items-center mt-6 text-base transition-all duration-200 sm:mt-0 hover:opacity-80"
                  href='/login'>
                  <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#F97316" stroke="#F97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  Log in to access member resources
                </a>
              </div>
              </div>
              <div>
                <Image className="w-full h-full hover:grayscale"
                  src={Train} alt="Train photo"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
