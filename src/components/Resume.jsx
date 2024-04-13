import { PuzzlePieceIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Typography, Progress } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
export function Resume() {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`pt-0 pb-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4 p-10 pb-0'>
                        Resume <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 p-10 pt-0'>
                        <div>
                            <div className='mt-10 flex items-center gap-3'>
                                <div className='text-[#00b88a]'>
                                    <PuzzlePieceIcon className='h-10 w-10' />
                                </div>
                                <div className='dark:text-[#D8E9A8] text-[#1E5128] text-2xl'>
                                    Education
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#fff4f4] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2021-2023
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Ph.D in Horriblensess
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#fff4f4] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2019 - Present
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Sr. Software Tester
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#fff4f4] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2021
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Best Developer
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mt-10 flex items-center gap-3'>
                                <div className='text-[#00b88a]'>
                                    <AcademicCapIcon className='h-10 w-10' />
                                </div>
                                <div className='dark:text-[#D8E9A8] text-[#1E5128] text-2xl'>
                                    Experience
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#eef5fa] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2017-2021
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Computer Science
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#eef5fa] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2015-2017
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Cr. Web Developer
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                            <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#eef5fa] rounded-[12px] p-5 mt-8'>
                                <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                    2008
                                </div>
                                <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                    Best Writter
                                </div>
                                <div className='text-lg dark:text-gray-500 text-gray-900'>
                                    ABC University, Los Angeles, CA
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-28 -mb-10 p-10 pt-20 dark:bg-[#0f0f0f] bg-blue-gray-50'>
                        <div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] text-3xl pb-10'>
                                Working Skills
                            </div>
                            <div className="w-full pb-6">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        Web Design
                                    </Typography>
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        80%
                                    </Typography>
                                </div>
                                <Progress value={50} color='red' className='h-[3px] bg-gray-400' />
                            </div>
                            <div className="w-full pb-6">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        Mobile App
                                    </Typography>
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        95%
                                    </Typography>
                                </div>
                                <Progress value={50} color='purple' className='h-[3px] bg-gray-400' />
                            </div>
                            <div className="w-full pb-6">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        Illustrator
                                    </Typography>
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        65%
                                    </Typography>
                                </div>
                                <Progress value={50} color='blue' className='h-[3px] bg-gray-400' />
                            </div>
                            <div className="w-full pb-6">
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        Photoshope
                                    </Typography>
                                    <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                        75%
                                    </Typography>
                                </div>
                                <Progress value={50} color='pink' className='h-[3px] bg-gray-400' />
                            </div>

                        </div>
                        <div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] text-3xl pb-10'>
                                Knowledges
                            </div>
                            <div className='flex flex-wrap gap-3'>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Digital Design
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Marketing
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Social Media
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Print
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Time Management
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Flexibility
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Print
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Time Management
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Print
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Flexibility
                                    </div>
                                </div>
                                <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                    <div className='dark:text-[#D8E9A8] text-gray-800'>
                                        Print
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            }
        </VisibilitySensor>
    )
}