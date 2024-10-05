import { HomeIcon, DocumentTextIcon, Squares2X2Icon, SwatchIcon, EnvelopeIcon, RectangleGroupIcon, PhotoIcon, CameraIcon, Cog8ToothIcon, CodeBracketIcon, PuzzlePieceIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Typography, Progress, Spinner } from '@material-tailwind/react';
import VisibilitySensor from 'react-on-screen';
import { useEffect, useState } from 'react';
import 'animate.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imagen from "../assets/Image_not_available.png"


const data = [
    {
        icon: <SwatchIcon className='h-12 w-12' />,
        title: "Ui/Ux Design",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#fcf4ff]",
        color: "text-purple-300"
    },
    {
        icon: <RectangleGroupIcon className='h-12 w-12' />,
        title: "App Development",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#fefaf0]",
        color: "text-amber-300"
    },
    {
        icon: <PhotoIcon className='h-12 w-12' />,
        title: "Photography",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#fcf4ff]",
        color: "text-indigo-300"
    },
    {
        icon: <CameraIcon className='h-12 w-12' />,
        title: "Photography",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#fff4f4]",
        color: "text-red-300"
    },
    {
        icon: <Cog8ToothIcon className='h-12 w-12' />,
        title: "Managment",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#fff0f8]",
        color: "text-pink-300"
    },
    {
        icon: <CodeBracketIcon className='h-12 w-12' />,
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
        link: "",
        colorBg: "bg-[#f3faff]",
        color: "text-blue-300"
    },
]

const client = [
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fslider%2Fbrand-1.png?url=%2Fimages%2Fslider%2Fbrand-1.png&w=256&q=75"
    },
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fslider%2Fbrand-2.png?url=%2Fimages%2Fslider%2Fbrand-2.png&w=256&q=75"
    },
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fslider%2Fbrand-3.png?url=%2Fimages%2Fslider%2Fbrand-3.png&w=256&q=75"
    },
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fslider%2Fbrand-4.png?url=%2Fimages%2Fslider%2Fbrand-4.png&w=384&q=75"
    },
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_384,q_75/%2Fimages%2Fslider%2Fbrand-5.png?url=%2Fimages%2Fslider%2Fbrand-5.png&w=384&q=75"
    },
    {
        img: "https://bostami-nextjs.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fslider%2Fbrand-2.png?url=%2Fimages%2Fslider%2Fbrand-2.png&w=256&q=75"
    },

]
export function About() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
    };

    const [isLoading, setIsLoading] = useState(true);
    const handleOnLoad = () => {
        setIsLoading(false)

    }
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div onLoad={handleOnLoad} className={`lg:p-10 p-5 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        About Me <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='pt-7 dark:text-gray-500 text-gray-800'>
                        <p>I'm a web developer from Ecuador, passionate about building digital experiences that are both functional and impactful. I specialize in solving complex problems with simple, efficient solutions, with expertise in both front-end and back-end development. <br/><br/>

My goal is to bring your message and identity to life in the most creative way, turning ideas into reality through code. I've had the privilege of working on various web development projects, helping brands stand out and connect with their audiences effectively.</p>
                    </div>
                    <div className='mt-12 dark:text-[#D8E9A8] text-[#1E5128] text-4xl font-semibold'>
                        What I do!
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                        {data.map(({ icon, title, description, link, colorBg, color, index }) => (
                            <div id={index} className={`flex border-[1px] dark:border-gray-600 border-transparent ${colorBg} dark:bg-transparent h-auto  rounded-[12px] p-4`}>
                                <div className={`mr-3 ${color}`}>
                                    {icon}
                                </div>
                                <div>
                                    <div className='dark:text-[#D8E9A8] text-[#1E5128] font-semibold text-xl'>
                                        {title}

                                    </div>
                                    <div className='dark:text-gray-500 text-gray-700 mt-3 leading-9'>
                                        {description}
                                    </div>
                                </div>

                            </div>
                        ))}


                    </div>
                    <div className='mt-12 dark:text-[#D8E9A8] text-[#1E5128] text-4xl font-semibold'>
                        My Client!
                    </div>
                    <div className="mt-5 dark:bg-[#1d1d1d] bg-blue-gray-50 h-40 rounded-[12px]">
                        <Slider {...settings}>
                            {client.map(({ img, index }) => (
                                <div id={index} className='w-32 h-40 p-5'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        {isLoading &&
                                            <Spinner className="h-16 w-16 text-[#4E9F3D]" />
                                        }
                                        <div className={`${isLoading ? 'hidden' : 'block'}`}>
                                            <img className='w-20' src={img} alt="" />
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </div>

            }
        </VisibilitySensor>
    )
}