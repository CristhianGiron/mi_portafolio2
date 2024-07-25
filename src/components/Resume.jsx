import { PuzzlePieceIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Typography, Progress } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
import { useState } from 'react';
import Popup from './Popup';
import PieChart from './PieChart';
import BarChart from './BarChart';
export function Resume() {

    const datos = {

        "educación": [
            {
                "date": '2021-2023',
                "title": 'Ph.D in Horriblensess',
                "description": 'ABC University, Los Angeles, CA'
            },
            {
                "date": '2019 - Present',
                "title": 'Sr. Software Tester',
                "description": 'ABC University, Los Angeles, CA'
            },
            {
                "date": '2021',
                "title": 'Best Developer',
                "description": 'ABC University, Los Angeles, CA'
            },

        ],
        "experiencia": [
            {
                "date": '2017-2021',
                "title": 'Computer Science',
                "description": 'ABC University, Los Angeles, CA'
            },
            {
                "date": '2015-2017',
                "title": 'Cr. Web Developer',
                "description": 'ABC University, Los Angeles, CA'
            },
            {
                "date": '2008',
                "title": 'Best Writter',
                "description": 'ABC University, Los Angeles, CA'
            },

        ]

    };

    const Knowledges = [
        'Digital Design', 'Marketing', 'Social Media', 'Print', 'Time Management', 'Flexibility', 'Print', 'Time Management', 'Print', 'Flexibility', 'Print'
    ]

    const skills = [
        {
            color: 'red',
            title: 'Web Design',
            percentaje: 80
        },
        {
            color: 'purple',
            title: 'Mobile App',
            percentaje: 95
        },
        {
            color: 'blue',
            title: 'Ilustrator',
            percentaje: 65
        },
        {
            color: 'pink',
            title: 'Photoshope',
            percentaje: 75
        },
    ]



    const [popupPosition, setPopupPosition] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (event) => {
        const x = event.pageX;
        const y = event.pageY;

        setPopupPosition({ x, y });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`lg:p-10 p-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Resume <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:p-10 p-5 pt-0'>
                        <div>

                            <div className='mt-10 flex items-center gap-3'>
                                <div className='text-[#00b88a]'>
                                    <PuzzlePieceIcon className='h-10 w-10' />
                                </div>
                                <div className='dark:text-[#D8E9A8] text-[#1E5128] text-2xl'>
                                    Education
                                </div>
                            </div>
                            {datos.educación.map(({ date, title, description }) => (
                                <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#fff4f4] rounded-[12px] p-5 mt-8'>
                                    <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                        {date}
                                    </div>
                                    <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                        {title}
                                    </div>
                                    <div className='text-lg dark:text-gray-500 text-gray-900'>
                                        {description}
                                    </div>
                                </div>
                            ))}
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
                            {datos.experiencia.map(({ date, title, description }) => (
                                <div className='w-full h-auto border-[1px] dark:border-gray-600 border-transparent dark:bg-transparent bg-[#fff4f4] rounded-[12px] p-5 mt-8'>
                                    <div className='pb-3 text-sm dark:text-gray-500 text-gray-700'>
                                        {date}
                                    </div>
                                    <div className='pb-3 text-xl font-bold dark:text-[#D8E9A8] text-gray-900'>
                                        {title}
                                    </div>
                                    <div className='text-lg dark:text-gray-500 text-gray-900'>
                                        {description}
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-28 lg:-mb-10 -mb-5 p-10 pt-20 dark:bg-[#0f0f0f] bg-blue-gray-50'>
                        <div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] text-3xl pb-10 flex items-center gap-2'>
                                Working Skills

                                <div className='cursor-pointer rounded-[50%] border-white border-2 w-4 h-4 text-sm flex justify-center content-center items-center' onClick={handleClick}>
                                    +
                                </div>

                            </div>
                            {skills.map(({ color, title, percentaje }) => (
                                <div className="w-full pb-6">
                                    <div className="mb-2 flex items-center justify-between gap-4">
                                        <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                            {title}
                                        </Typography>
                                        <Typography variant="h6" className='dark:text-[#D8E9A8] text-gray-800'>
                                            {percentaje}%
                                        </Typography>
                                    </div>
                                    <Progress value={percentaje} color={color} className='h-[3px] bg-gray-400' />
                                </div>
                            ))}

                            {showPopup && (
                                <Popup
                                    position={popupPosition}
                                    
                                    content={
                                        <div>
                                            <div className='dark:text-[#D8E9A8] text-gray-800 mb-5'>Working Skills</div>
                                            <div className='lg:flex gap-4 items-end'>
                                                
                                                <BarChart data={skills} width={200} height={150} />

                                                <div className='lg:mt-0 mt-5'>
                                                    {skills.map(({ color, title }) => (
                                                        <div className='flex gap-4 mb-2'>
                                                            <div style={{ backgroundColor: color }} className=' h-5 w-5 rounded-md'> </div>
                                                            <div className='dark:text-[#D8E9A8] text-gray-800'> {title}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    }
                                    onClose={handleClosePopup}
                                />
                            )}

                        </div>
                        <div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] text-3xl pb-10'>
                                Knowledges
                            </div>
                            <div className='flex flex-wrap gap-3'>
                                {Knowledges.map((data) => (
                                    <div className='dark:bg-[#1d1d1d] bg-blue-gray-100 rounded-[12px] w-auto p-2 h-10 flex items-center justify-center'>
                                        <div className='dark:text-[#D8E9A8] text-gray-800'>
                                            {data}
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>

                    </div>

                </div>

            }
        </VisibilitySensor>
    )
}