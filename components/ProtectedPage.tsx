"use client"
import Image from "next/image"
import TBD1 from '@/app/assets/TBD1.jpg'
import TBD2 from '@/app/assets/TBD2.jpg'
import TBD3 from '@/app/assets/TBD3.jpg'
import TBD4 from '@/app/assets/TBD4.jpg'
import Exec from "@/components/Exec"
import Bylaw from "@/components/Bylaw"
import Seniority from "@/components/Seniority"
import TieUp from "@/components/TieUp"

const ProtectedContent = () => {
  

  return (


    <div className="xl:container mx-auto px-6 md:px-12">

      <div className="mb-16 md:w-2/3 lg:w-1/2">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-500 from-yellow-400">Members-Only</span> Resources</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here you can find some of the useful resources to assist your daily job</p>
      </div>
      <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
          <Image
            className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src={TBD1}
            alt="Ai train"
            loading="lazy"
            width="640"
            height="805"
          />
          <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            <div>
              <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Local Chairs</h4>
              <span className="block text-sm text-gray-500 underline decoration-yellow-500 decoration-2">
                <Exec />
              </span>
            </div>
            <p className="mt-8 text-gray-300 dark:text-gray-600">Member can contact local reps to discuss current issues, learn about your rights, ask questions and seek advice</p>
          </div>

        </div>
        <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
          <Image
            className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src={TBD2}
            alt="CP train"
            loading="lazy"
            width="640"
            height="805"
          />
          <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            <div>
              <h4 className="text-xl font-semibold dark:text-gray-700 text-white">TCRC By-law</h4>
              <span className="block text-sm text-gray-500 underline decoration-yellow-500 decoration-2">
                <Bylaw />
              </span>
            </div>
            <p className="mt-8 text-gray-300 dark:text-gray-600">A greate reference for Division Rules,Conference Bylaws, General Committee Rules, Legislative Board Rules...</p>
          </div>

        </div>
        <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
          <Image
            className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src={TBD3}
            alt="CP8819"
            loading="lazy"
            width="640"
            height="805"
          />
          <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            <div>
              <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Seniority List</h4>
              <span className="block text-sm text-gray-500 underline decoration-yellow-500 decoration-2">
                <Seniority />
              </span>
            </div>
            <p className="mt-8 text-gray-300 dark:text-gray-600">This lists will be compiled and posted January 1st each year, and will contain a list of all Trainpersons and their seniority standing</p>
          </div>

        </div>
        <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
          <Image
            className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
            src={TBD4}
            alt="CP2306"
            loading="lazy"
            width="640"
            height="805"
          />
          <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
            <div>
              <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Tie-Up Guides</h4>
              <span className="block text-sm text-gray-500 underline decoration-yellow-500 decoration-2">
                <TieUp/>
              </span>
            </div>
            <p className="mt-8 text-gray-300 dark:text-gray-600">A Conductor reference for tie-up based on class of service and the different situations arised during your trip</p>
          </div>

        </div>
      </div>
    </div>


  )
}

export default ProtectedContent