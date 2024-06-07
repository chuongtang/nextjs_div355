import Link from 'next/link'
import Image from 'next/image'
import ErrorTrain from "../app/assets/404Train.svg"
import { headers } from 'next/headers'

export default async function NotFound() {
  // const headersList = headers()
  // const domain = headersList.get('host')
  // const data = await getSiteData(domain)
  return (
    <div className="relative h-screen overflow-hidden rounded-lg shadow transition hover:shadow-lg  bg-gradient-to-br from-black to-gray-100">

      <Image
        alt=""
        src={ErrorTrain}
        className="h-28 w-auto absolute right-2"
      />
      
      <div className="p-4 sm:p-6">

        <div className="relative inline-flex group my-2">
          <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <Link href="/" title="Go back and try again"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-700 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button">Go back
          </Link>
        </div>
        <h3 className="mt-10 mb-12 text-4xl text-white">404 Error</h3>
        <p className="mt-2 line-clamp-3 text-xl/relaxed text-white/95">
          Page not-found. Please try different route or contact the web developer
        </p>

      </div>
    </div >
  )
}