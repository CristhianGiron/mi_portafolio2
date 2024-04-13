import { HomeIcon, DocumentTextIcon, Squares2X2Icon, SwatchIcon, EnvelopeIcon, RectangleGroupIcon, PhotoIcon, CameraIcon, Cog8ToothIcon, CodeBracketIcon, PuzzlePieceIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import { Typography, Progress } from '@material-tailwind/react';
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
        img: imagen //Reemplazar por las imagenes correctas
    },
    {
        img: imagen //Reemplazar por las imagenes correctas
    },
    {
        img: imagen //Reemplazar por las imagenes correctas
    },
    {
        img: imagen //Reemplazar por las imagenes correctas
    },
    {
        img: imagen //Reemplazar por las imagenes correctas
    },
    {
        img: imagen //Reemplazar por las imagenes correctas
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <VisibilitySensor partialVisibility>
            {({ isVisible }) =>
                <div className={`p-10 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                    <div className='text-5xl font-bold dark:text-[#00b88a] text-[#4E9F3D] flex items-center gap-4'>
                        About Me <div className='w-52 h-[2px] bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  '></div>
                    </div>
                    <div className='pt-7 dark:text-gray-500 text-gray-800'>
                        <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br /><br />

                            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
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
                    <div className="mt-5 dark:bg-[#1d1d1d] bg-blue-gray-50 h-52 rounded-[12px]">
                        <Slider {...settings}>
                            {client.map(({ img, index }) => (
                                <div id={index} className='w-32 h-52 p-5'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <img src={img} alt="" />
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