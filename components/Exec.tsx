"use client"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Exec = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (

    <>
      <Button onPress={onOpen} size="sm" className="underline decoration-yellow-500 decoration-2" color="warning" variant="light">Click to view</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 underline decoration-yellow-500 decoration-4">Executives</ModalHeader>
              <ModalBody>
                <div className="p-2">
                  <nav aria-label="Main Nav" className="mt-2 flex flex-col space-y-1">
                    <div
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="text-sm font-medium"> President -  Bill Merriman  <span className="text-xs italic font-thin">(outdoorsman12@telus.net)</span> </span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="text-sm font-medium"> Vice President -  Carl Schnurr  <span className="text-xs italic font-thin">(c.schnurr@shaw.ca) </span></span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m14.5 13.5c-.6615287-2.2735217-3.1995581-3.0251263-6-3.0251263-2.72749327 0-5.27073171.8688092-6 3.0251263" /><path d="m8.5 2.5c1.6568542 0 3 1.34314575 3 3v2c0 1.65685425-1.3431458 3-3 3-1.65685425 0-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3z" /></g></svg>

                      <span className="text-sm font-medium"> Secretary Treasurer / Legislative Representative - John Dohrety <span className="text-xs italic font-thin">(Johndohrety106@gmail.com)</span> </span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg height="18" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 2)"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" /><path d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8475766 2.5813505-2 3 .6742649-.91876977 1.0109204-2.0857069 1.0099664-3.50081137s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z" fill="currentColor" /></g></svg>

                      <span className="text-sm font-medium"> Alt Legislative Rep. (Engr.) - Curtis Mellish <span className="text-xs italic font-thin">(curtis444@hotmail.com)</span> </span>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg height="18" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 2)"><path d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z" /><path d="m11.5199327.67783074c1.1547685.41741154 1.9800673 1.52341097 1.9800673 2.82216926v1c0 1.29707884-.8475766 2.5813505-2 3 .6742649-.91876977 1.0109204-2.0857069 1.0099664-3.50081137s-.3309652-2.52222377-.9900337-3.32135789zm4.9800673 14.82216926h1c.5522847 0 1-.4477153 1-1 0-.2427251 0-.4854502 0-.7281753 0-2.1698712-1.7094418-3.82917861-3.8465775-4.66705336 0 0 2.8465775 2.39522866 1.8465775 6.39522866z" fill="currentColor" /></g></svg>

                      <span className="text-sm font-medium"> Alt Legislative Rep. (CTY) - Cody Hoogwerf <span className="text-xs italic font-thin">(Hoogwerf.cody@gmail.com)</span> </span>
                    </div>

                    {/* EngRep */}
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>

                          <span className="text-sm font-medium"> Engineer Reps </span>
                        </div>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#F97316"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Local Chairman -  JP Baril  <span className="text-xs italic font-thin">(jptcrc355@gmail.com)</span> </span>
                        </div>

                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Vice Local Chair -  Steven Joyce <span className="text-xs italic font-thin">(stephendouglas27@gmail.com)</span></span>
                        </div>




                      </nav>
                    </details>
                    {/* CndrRep */}
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>

                          <span className="text-sm font-medium"> Conductor Reps </span>
                        </div>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#F97316"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Local Chairman -  Ever Kelly <span className="text-xs italic font-thin">(everkelly70@gmail.com)</span></span>
                        </div>

                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Vice Local Chair -  Steven Joyce <span className="text-xs italic font-thin">(stephendouglas27@gmail.com)</span> </span>
                        </div>

                        <div>
                          <div
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 opacity-75"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                              />
                            </svg>

                            <span className="text-sm font-medium"> Vice Local Chair -  Tim Stokes <span className="text-xs italic font-thin">(tstokes87@hotmail.com) </span></span>
                          </div>
                        </div>
                      </nav>
                    </details>
                    {/* TrainmenRep */}
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>

                          <span className="text-sm font-medium"> Trainmen Reps </span>
                        </div>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#F97316"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Local Chairman -  Micheal Nilsson <span className="text-xs italic font-thin">(mnil.tcrc355@gmail.com)</span> </span>
                        </div>

                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Vice Local Chair -  Chris Merke <span className="text-xs italic font-thin">(christophermerke@gmail.com)</span> </span>
                        </div>

                        <div>
                          <div
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 opacity-75"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                              />
                            </svg>

                            <span className="text-sm font-medium"> Vice Local Chair -  VACANT</span>
                          </div>
                        </div>
                      </nav>
                    </details>
                    {/* YardRep */}
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary
                        className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>

                          <span className="text-sm font-medium"> Yard Reps </span>
                        </div>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="#F97316"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>

                      <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Local Chairman -  Trent Haug <span className="text-xs italic font-thin">(thaug101@gmail.com)</span> </span>
                        </div>

                        <div
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>

                          <span className="text-sm font-medium">Vice Local Chair -  Scott Mennie <span className="text-xs italic font-thin">(scottjmennie@gmail.com)</span></span>
                        </div>

                        <div>
                          <div
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 opacity-75"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                              />
                            </svg>

                            <span className="text-sm font-medium">Vice Local Chair -  Matthew Gregoris
                              <span className="text-xs italic font-thin"> (majgregoris@gmail.com)</span></span>
                          </div>
                        </div>
                      </nav>
                    </details>
                  </nav>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button size="sm" className="shrink-0 rounded-lg p-1 transition hover:bg-black/20 shadow shadow-red-500/50" variant="light" onPress={onClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>)
}
export default Exec;