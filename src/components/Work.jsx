import { PuzzlePieceIcon, AcademicCapIcon, DocumentPlusIcon, CodeBracketSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { Typography, Progress, Spinner, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import 'animate.css';
import { useState } from 'react';
import CarLeader from '../assets/work/CarLeader.png'
import MenuCrysis from '../assets/work/MenuCrysis.png'
import Statistic from '../assets/work/Estatistic.png'
import GameQuestions from '../assets/work/GameQuestions.png'
import InvFact from '../assets/work/InvFact.png'
import Blog from '../assets/work/Blog.png'
import BookLife from '../assets/work/BookLife.png'
export function Work() {
    const data = [
        /*{
            type: 'video',
            title: 'Video',
            description: 'Chul urina',
            image: 'https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fwork_images%2Fsmall%2F1.jpg?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75',
            project: 'Website',
            languages: 'After Efects',
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'
        },*/
        {
            type: 'webdesign',
            title: 'Web Design',
            description: 'Car market',
            image: CarLeader,
            project: 'Website',
            languages: 'React, HTML, CSS, Javascript',
            client: 'Vectus',
            preview: 'themeforest.net',
            intro: 'Car market is a clean modern professional Car Dealer and Business HTML5 Template. You can Build your business site based on vectus which provides you a list of unlimited options and features. It’s Fully Responsive which can adopt any screen size. VECTUS is built on of best know grid system which is skeleton to make your life easy. Our team are working hard to save your time.'
        },
        {
            type: 'desktop',
            title: 'App Desktop',
            description: 'StatCalc Electron',
            image: Statistic,
            project: 'Statistic Calculator',
            languages: 'Electron, React, Javascrip, HTML, CSS',
            client: 'Personal',
            preview: 'www.freepik.com',
            intro: 'This project is a statistics calculator developed with Electron, which allows you to enter data and automatically calculate statistical values ​​such as mean, median, mode, range and amplitude. The application also generates a frequency table and a bar graph to visualize the distribution of the data, offering an interactive and visually attractive tool for statistical analysis.'
        },
        {
            type: 'webdesign',
            title: 'Web Design',
            description: 'BookLife',
            image: BookLife,
            project: "Website",
            languages: "React, Javascript, HTML, CSS",
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'
        },
        /*
        {
            type: 'video',
            title: 'Video',
            description: 'Aura Dione',
            image: 'https://bostami-nextjs.netlify.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F5.jpg&w=384&q=75',
            project: 'Website',
            languages: 'After Efects',
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'

            ,
        },*/
        {
            type: 'webdesign',
            title: 'Web Design',
            description: 'Crysis Interface Reborn',
            image: MenuCrysis,
            project: 'Website',
            languages: 'React, Javascript, HTML, CSS',
            client: 'Personal',
            preview: 'www.envato.com',
            intro: 'This project consists of recreating the Crysis 3 game menu, faithfully replicating its graphical interface, interactive elements and visual aesthetics. Includes options such as "New Campaign", "Load" and "Tutorial", as well as detailed statistics of the player´s progress. The goal is to achieve high visual fidelity and create a fluid interactive experience, providing an educational platform to learn about interface design and video game development, as well as to enjoy a nostalgic and entertaining project.'
        }
        ,
        {
            type: 'webdesign',
            title: 'Web Design',
            description: 'Game Questions',
            image: GameQuestions,
            project: 'Website',
            languages: 'React, Javascript, HTML, CSS',
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'
        }
        ,
        {
            type: 'desktop',
            title: 'App Desktop',
            description: 'InvFact',
            image: InvFact,
            project: 'Inventary and billing',
            languages: 'Electron, React, html, css, javascript',
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'
        }
        ,
        {
            type: 'webdesign',
            title: 'Web Design',
            description: 'Blog',
            image: Blog,
            project: 'Website',
            languages: 'Astro, Javascript, CSS, HTML',
            client: 'Envato',
            preview: 'www.envato.com',
            intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.'
        }
    ]
    const [isLoading, setIsLoading] = useState(true);
    const handleOnLoad = () => {
        setIsLoading(false)

    }
    const [selectedType, setSelectedType] = useState("All");

    const filteredData = data.filter(item => selectedType === "All" || item.type === selectedType);


    const getColumnData = (columnIndex) => {
        const columnData = [];
        for (let i = columnIndex; i < filteredData.length; i += 2) {
            columnData.push(filteredData[i]);
        }
        return columnData;
    };

    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState([]); // Estado para almacenar el contenido dinámico del diálogo

    const handleOpen = (content) => {
        setDialogContent(content);
        setOpen(!open);
    };
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div onLoad={handleOnLoad} className={`lg:p-10 p-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        Work <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <div className='h-[3rem] flex flex-wrap gap-6 text-gray-600 font-normal'>
                            <div className={`hover:text-[#00b88a] cursor-pointer ${selectedType === "All" ? 'text-[#00b88a]' : ''}`} onClick={() => setSelectedType("All")}>
                                All
                            </div>
                            {/**
                                <div className={`hover:text-[#00b88a] cursor-pointer ${selectedType === "video" ? 'text-[#00b88a]' : ''}`} onClick={() => setSelectedType("video")}>
                                    Video
                                </div>
                             */}
                         
                            <div className={`hover:text-[#00b88a] cursor-pointer ${selectedType === "webdesign" ? 'text-[#00b88a]' : ''}`} onClick={() => setSelectedType("webdesign")}>
                                Web Design
                            </div>
                            <div className={`hover:text-[#00b88a] cursor-pointer ${selectedType === "desktop" ? 'text-[#00b88a]' : ''}`} onClick={() => setSelectedType("desktop")}>
                                App Desktop
                            </div>
                            {/**
                                <div className={`hover:text-[#00b88a] cursor-pointer ${selectedType === "graphicdesign" ? 'text-[#00b88a]' : ''}`} onClick={() => setSelectedType("graphicdesign")}>
                                    Graphic Design
                                </div>
                             */}



                        </div>

                    </div>
                    <div className='flex justify-end'>
                        <div className='dark:text-gray-500 dark:bg-gray-800 bg-gray-300 text-gray-700 text-xs rounded-md text-center min-w-10'>{filteredData.length}</div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-4 h-full">
                        <div>
                            {getColumnData(0).map(({ title, description, image, project, languages, client, preview, intro }, index) => (
                                <div key={index} className={`mt-4 p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px] ${index % 2 === 0 ? 'lg:col-span-1 col-span-2' : 'lg:col-span-2 col-span-1'}`}>
                                    <div className='rounded-[12px] overflow-hidden flex items-center justify-center'>

                                        <Spinner className={`h-16 w-16 text-[#4E9F3D] ${isLoading ? 'block' : 'hidden'}`} />

                                        <div className={`${isLoading ? 'hidden' : 'block'}`}>
                                            <img onClick={() => handleOpen([title, project, languages, client, preview, intro, image])} className='w-full transition-all duration-300 hover:scale-110 cursor-pointer' src={image} alt="" />
                                        </div>
                                    </div>
                                    <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                        {title}
                                    </div>
                                    <div onClick={() => handleOpen([title, project, languages, client, preview, intro, image])} className='font-bold text-xl dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                                        {description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {getColumnData(1).map(({ title, description, image, project, languages, client, preview, intro }, index) => (
                                <div key={index} className={`mt-4 p-5 dark:border-gray-800 border-transparent dark:bg-transparent bg-[#fcf4ff] border-[2px] rounded-[12px] ${index % 2 === 0 ? 'lg:col-span-1 col-span-2' : 'lg:col-span-2 col-span-1'}`}>
                                    <div className='rounded-[12px] overflow-hidden flex items-center justify-center'>

                                        <Spinner className={`h-16 w-16 text-[#4E9F3D] ${isLoading ? 'block' : 'hidden'}`} />

                                        <div className={`${isLoading ? 'hidden' : 'block'}`}>
                                            <img onClick={() => handleOpen([title, project, languages, client, preview, intro, image])} className='w-full transition-all duration-300 hover:scale-110 cursor-pointer' src={image} alt="" />
                                        </div>
                                    </div>
                                    <div className='dark:text-gray-500 text-gray-700 flex gap-2 items-center pt-5 pb-2'>
                                        {title}
                                    </div>
                                    <div onClick={() => handleOpen([title, project, languages, client, preview, intro, image])} className='font-bold text-xl dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer'>
                                        {description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Dialog
                        open={open}
                        handler={handleOpen}
                        size="lg"
                        className='dark:bg-[#191A19] bg-white p-5'
                    >
                        <DialogHeader className='dark:text-[#00b88a] text-[#4E9F3D] flex items-center justify-center'>
                            <div>
                                {dialogContent[0]} Project
                            </div>
                            <div onClick={() => handleOpen([])} className='absolute lg:-right-12 -right-4 rotate-45 font-normal text-5xl rounded-full border-2 dark:border-white border-black dark:text-white text-black h-10 w-10 flex items-center justify-center transition-all duration-500 hover:rotate-90 cursor-pointer lg:-top-6 -top-2 lg:bg-transparent dark:bg-black bg-white'>
                                +
                            </div>
                        </DialogHeader>
                        <DialogBody className='h-[72vh] overflow-y-scroll'>
                            <div className='grid lg:grid-cols-2 grid-cols-1 darkAA.
                            :text-[#D8E9A8] text-[#4E9F3D] '>
                                <div>
                                    <div className='flex items-center gap-4 pb-4'>
                                        <DocumentPlusIcon className='h-6 w-6' />Project: {dialogContent[1]}
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <CodeBracketIcon className='h-6 w-6' /> Languages: {dialogContent[2]}
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-4 pb-4'>
                                        Client: {dialogContent[3]}
                                    </div>
                                    <div className='flex items-center gap-4 pb-4'>
                                        Preview: {dialogContent[4]}
                                    </div>
                                </div>
                            </div>
                            <div className='dark:text-[#D8E9A8] text-[#1E5128] mt-10'>
                                {dialogContent[5]}
                            </div>
                            <div className='mt-10 flex items-center justify-center'>
                                <img className='h-64 object-cover bg-gray-200' src={dialogContent[6]} alt="" />
                            </div>
                        </DialogBody>

                    </Dialog>
                </div>

            }
        </VisibilitySensor>
    )
}