
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
export function Blog() {
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`p-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Blogs <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 pt-16 gap-10'>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F1.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F1.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                177 April <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Inspiration
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                                How to Own Your Audience by Creating an Email List.
                            </div>
                        </div>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fff0f0] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F2.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F2.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                21 April
                                <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Web Design
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                                The window know to say beside you
                            </div>
                        </div>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F3.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F3.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                27 April
                                <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div>Inspiration
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                            How to Own Your Audience by Creating an Email List.
                            </div>
                        </div>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#eefbff] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F4.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F4.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                000 April
                                <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Inspiration
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                            Everything You Need to Know About Web Accessibility.
                            </div>
                        </div>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F5.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F5.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                27 April
                                <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Inspiration
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                            Top 10 Toolkits for Deep Learning in 2021.
                            </div>
                        </div>
                        <div className='p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#eefbff] border-[2px] rounded-[12px]'>
                            <div className='rounded-[12px] overflow-hidden'>
                                <img className=' w-full transition-all duration-300 hover:scale-110 cursor-pointer' src="https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fblog_images%2Fsmall%2F6.jpg?url=%2Fimages%2Fblog_images%2Fsmall%2F6.jpg&w=384&q=75" alt="" />
                            </div>
                            <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                27 April <div className='h-1 w-1 bg-blue-gray-700 rounded-full'></div> Inspiration
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                            Everything You Need to Know About Web Accessibility.
                            </div>
                        </div>

                    </div>


                </div>

            }
        </VisibilitySensor>
    )
}