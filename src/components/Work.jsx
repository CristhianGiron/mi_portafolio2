import { PuzzlePieceIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Typography, Progress } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
export function Work() {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`p-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Work <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <div className='h-[5rem] flex flex-wrap gap-6 text-gray-600 font-normal'>
                            <div className='hover:text-[#00b88a] cursor-pointer'>
                                All
                            </div>
                            <div className='hover:text-[#00b88a] cursor-pointer'>
                                Video
                            </div> 
                            <div className='hover:text-[#00b88a] cursor-pointer'>
                                Web Design
                            </div>
                            <div className='hover:text-[#00b88a] cursor-pointer'>
                                Logo
                            </div>
                            <div className='hover:text-[#00b88a] cursor-pointer'>
                                Graphic Design
                            </div>
                        </div>
                    </div>

                    <div className='h-96'>

                    </div>


                </div>

            }
        </VisibilitySensor>
    )
}