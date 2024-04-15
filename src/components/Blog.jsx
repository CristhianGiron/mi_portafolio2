
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
import { useState } from 'react';
import { Spinner } from '@material-tailwind/react';
export function Blog() {

    const data = [
        {
            date: '177 April',
            description: 'How to Own Your Audience by Creating an Email List.',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F1.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F1.jpg&w=384&q=75'
        },
        {
            date: '21 April',
            description: 'The window know to say beside you',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F2.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F2.jpg&w=384&q=75'
        },
        {
            date: '27 April',
            description: 'How to Own Your Audience by Creating an Email List.',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F3.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F3.jpg&w=384&q=75'
        },
        {
            date: '000 April',
            description: 'Everything You Need to Know About Web Accessibility.',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F4.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F4.jpg&w=384&q=75'
        },
        {
            date: '27 April',
            description: 'Top 10 Toolkits for Deep Learning in 2021.',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F5.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F5.jpg&w=384&q=75'
        },
        {
            date: '27 April',
            description: 'Everything You Need to Know About Web Accessibility.',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F6.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F6.jpg&w=384&q=75'
        }
    ]
    const [isLoading, setIsLoading] = useState(true);
    const handleOnLoad = () => {
        setIsLoading(false)

    }
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div onLoad={handleOnLoad} className={`p-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Blogs <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 pt-16 gap-10'>
                        {
                            data.map(({ date, description, image }) => (
                                <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px]'>
                                    <div className='rounded-[12px] overflow-hidden flex items-center justify-center'>
                                    {isLoading &&
                                            <Spinner className="h-16 w-16 text-[#4E9F3D]" />
                                        }
                                        <div className={`${isLoading ?'hidden': 'block'}`}>
                                            <img className='w-full transition-all duration-300 hover:scale-110 cursor-pointer' src={image} alt="" />
                                        </div>

                                    </div>
                                    <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                        {date} <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Inspiration
                                    </div>
                                    <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                                        {description}
                                    </div>
                                </div>

                            ))
                        }

                    </div>


                </div>

            }
        </VisibilitySensor>
    )
}