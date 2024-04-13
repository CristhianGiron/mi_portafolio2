import { ArrowDownTrayIcon, DevicePhoneMobileIcon, MapPinIcon, EnvelopeOpenIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Typography, Progress } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import { Input } from "@material-tailwind/react";
import 'animate.css';
export function Contact() {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`p-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Contact <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 pt-16 gap-10'>

                        <div className='dark:bg-[#1d1d1d] bg-[#fcf4ff] rounded-[12px] p-5 flex'>
                            <div className='mr-5 text-[#00b88a]'>
                                <DevicePhoneMobileIcon className='h-10 w-10' />
                            </div>
                            <div>
                                <div className='dark:text-[#D8E9A8] text-[#1E5128] text-xl pb-3'>
                                    Phone:
                                </div>
                                <div className='text-xl dark:text-gray-400 text-gray-700'>
                                    <div className='pb-3 cursor-pointer'>+452 666 386</div>
                                    <div className='cursor-pointer'>+654 764 878</div>

                                </div>
                            </div>

                        </div>
                        <div className='dark:bg-[#1d1d1d] bg-[#eefbff] rounded-[12px] p-5 flex'>
                            <div className='mr-5 text-[#4E9F3D]'>
                                <EnvelopeOpenIcon className='h-10 w-10' />
                            </div>
                            <div>
                                <div className='dark:text-[#D8E9A8] text-[#1E5128] text-xl pb-3'>
                                    Email:
                                </div>
                                <div className='text-xl dark:text-gray-400 text-gray-700'>
                                    <div className='pb-3 cursor-pointer'>ibthemes@gmail.com</div>
                                    <div className='cursor-pointer'>mailto:xyz@abc.com</div>

                                </div>
                            </div>


                        </div>


                    </div>
                    <div className='dark:border-gray-800 border-transparent dark:bg-transparent bg-blue-gray-50 border-[2px] rounded-[12px] p-14 mt-16'>
                        <div className='text-2xl dark:text-gray-600 text-gray-700 pb-4'>
                            I'm always open to discussing product
                        </div>
                        <div className='dark:text-[#D8E9A8] text-[#1E5128] font-bold text-2xl'>
                            design work or partnerships.
                        </div>
                        <div className="mt-10">
                            <form action="">
                                <div class="relative h-20 w-full min-w-[200px]">
                                    <input placeholder="" required type='text'
                                        class="peer h-full w-full border-b-2 dark:border-gray-800 border-gray-400 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal dark:text-[#D8E9A8] text-gray-800 outline outline-0 transition-all duration-500 placeholder-shown:border-gray-800 focus:border-[#4E9F3D] focus:outline-0 disabled:border-0 disabled:bg-yellow-500 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                    <label
                                        class="after:content[''] pointer-events-none absolute left-0  top-2 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-gray-700 transition-all after:absolute after:bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#4E9F3D] after:transition-transform after:duration-500 peer-placeholder-shown:text-[16px] peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-gray-400 peer-focus:text-[12px] peer-focus:leading-tight dark:peer-focus:text-[#4E9F3D] peer-focus:text-[#4E9F3D] peer-focus:after:scale-x-100 peer-focus:after:border-[#4E9F3D] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-light-blue-900">
                                        Name *
                                    </label>
                                </div>
                                <div class="relative h-20 w-full min-w-[200px]">
                                    <input placeholder="" required type='email'
                                        class="peer h-full w-full border-b-2 dark:border-gray-800 border-gray-400 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal dark:text-[#D8E9A8] text-gray-800 outline outline-0 transition-all duration-500 placeholder-shown:border-gray-800 focus:border-[#4E9F3D] focus:outline-0 disabled:border-0 disabled:bg-yellow-500 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                    <label
                                        class="after:content[''] pointer-events-none absolute left-0  top-2 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-gray-700 transition-all after:absolute after:bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#4E9F3D] after:transition-transform after:duration-500 peer-placeholder-shown:text-[16px] peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-gray-400 peer-focus:text-[12px] peer-focus:leading-tight dark:peer-focus:text-[#4E9F3D] peer-focus:text-[#4E9F3D] peer-focus:after:scale-x-100 peer-focus:after:border-[#4E9F3D] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-light-blue-900">
                                        Email *
                                    </label>
                                </div>
                                <div class="relative h-20 w-full min-w-[200px]">
                                    <input placeholder="" required type='text'
                                        class="peer h-full w-full border-b-2 dark:border-gray-800 border-gray-400 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal dark:text-[#D8E9A8] text-gray-800 outline outline-0 transition-all duration-500 placeholder-shown:border-gray-800 focus:border-[#4E9F3D] focus:outline-0 disabled:border-0 disabled:bg-yellow-500 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                    <label
                                        class="after:content[''] pointer-events-none absolute left-0  top-2 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-gray-700 transition-all after:absolute after:bottom-2 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#4E9F3D] after:transition-transform after:duration-500 peer-placeholder-shown:text-[16px] peer-placeholder-shown:leading-[4.25] dark:peer-placeholder-shown:text-gray-400 peer-focus:text-[12px] peer-focus:leading-tight dark:peer-focus:text-[#4E9F3D] peer-focus:text-[#4E9F3D] peer-focus:after:scale-x-100 peer-focus:after:border-[#4E9F3D] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-light-blue-900">
                                        Message *
                                    </label>
                                </div>

                                <div className='pt-14'>
                                    <button type='submit' className='border-2 border-gray-400 transition-all duration-500 hover:border-transparent p-[6px] pl-6 pr-6 rounded-[10px] text-lg font-bold dark:text-[#D8E9A8] text-gray-800 hover:text-[#D8E9A8] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a] '>Submit</button>
                                </div>
                            </form>


                        </div>


                    </div>


                </div>

            }
        </VisibilitySensor>
    )
}