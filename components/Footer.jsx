import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="text-gray-600 body-font w-screen">
      <div className="container px-2 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 ml-4">
          © Copyright 2024 📜 TCRC Division 355
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right mr-2">

            Built by
            {/* <a href="https://chuongtang.com"
              className='underline italic decoration-yellow-500 decoration-2 text-shadow-xs mr-6'
              target="_blank">an avid learner</a> */}
          </p>
          <Popover placement="bottom-end" color="default" >
            <PopoverTrigger>
              <div variant="flat" className="cursor-pointer text-sm underline italic decoration-yellow-500 decoration-2 text-shadow-xs mr-6">
                an avid learner
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">📧Comments or suggestions?</div>
                <div className="text-tiny">Please send it to <span className="underline italic">email@chuongtang.com</span></div>
              </div>
            </PopoverContent>
          </Popover>
        </span>
      </div>
    </footer>

  )
}

export default Footer