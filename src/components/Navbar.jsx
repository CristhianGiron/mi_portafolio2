import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

import icon from "../assets/icono.svg"

function NavList({ onSelectedChange }) {
    const handleClick = (newValue) => {
        onSelectedChange(newValue);
    };

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium"
                onClick={() => handleClick(0)}
            >
                <a href="#desplace" className="flex items-center dark:hover:text-[#00b88a] hover:text-[#00b88a] dark:text-[#D8E9A8] text-gray-700 transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                onClick={() => handleClick(1)}
                className="p-1 font-medium"
            >
                <a href="#desplace" className="flex items-center dark:hover:text-[#00b88a] hover:text-[#00b88a] dark:text-[#D8E9A8] text-gray-700 transition-colors">
                    Resume
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                onClick={() => handleClick(2)}
                className="p-1 font-medium"
            >
                <a href="#desplace" className="flex items-center dark:hover:text-[#00b88a] hover:text-[#00b88a] dark:text-[#D8E9A8] text-gray-700 transition-colors">
                    Work
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                onClick={() => handleClick(3)}
                className="p-1 font-medium"
            >
                <a href="#desplace" className="flex items-center dark:hover:text-[#00b88a] hover:text-[#00b88a] dark:text-[#D8E9A8] text-gray-700 transition-colors">
                    Blogs
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                onClick={() => handleClick(4)}
                className="p-1 font-medium"
            >
                <a href="#desplace" className="flex items-center dark:hover:text-[#00b88a] hover:text-[#00b88a] dark:text-[#D8E9A8] text-gray-700 transition-colors">
                    Contact
                </a>
            </Typography>
        </ul>
    );
}

export function Navigation({ onSelectedChange }) {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const [isTop, setIsTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 50) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleSelectedChange = (newValue) => {
        onSelectedChange(newValue);
        setOpenNav(false)
    };

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        return "light";
    });

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };


    const agregarClase = () => {
        const miApp = document.getElementById('miApp');
        if (miApp) {
            miApp.classList.add('app');
            miApp.classList.remove('appb');
        }
    };

    const quitarClase = () => {
        const miApp = document.getElementById('miApp');
        if (miApp) {
            miApp.classList.add('appb');
            miApp.classList.remove('app');
        }
    };

    useEffect(() => {
        if (theme === "dark") {
            agregarClase()
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
            quitarClase()
        };
    }, [theme]);

    const gradientStyle = {
        background: 'linear-gradient(45deg, #4E9F3D 30%, #00b88a 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      };

    return (
        <div>
            <div className="lg:h-32 h-60"></div>
            <Navbar className="mx-auto max-w-full lg:px-32 py-3 dark:bg-[#191A19a9] bg-white  shadow-none border-none top-0 fixed rounded-none filter-none z-[1000]">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer text-4xl font-bold market text-white flex"
                        style={gradientStyle}
                    >

                        <img className="h-9 mr-1" src={icon} alt="" />
                        <div>HG</div> <div className=""><div className="font-normal">Labs</div> <div className="w-[68px] h-1 bg-gradient-to-r from-[#4E9F3D] to-[#00b88a] rounded-full -mt-2"></div></div>
                    </Typography>

                    <div className="flex gap-5">
                        <Typography
                            as="li"
                            variant="small"
                            className="ml-auto p-1 font-medium w-8 h-8 bg-white hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a] rounded-full hover:text-[#D8E9A8] cursor-pointer"
                            onClick={(handleChangeTheme)}
                        >
                            {theme === 'dark' ?
                                <SunIcon />
                                :
                                <MoonIcon />
                            }

                        </Typography>

                        <IconButton
                            variant="text"
                            className="ml-auto h-8 w-8 text-inherit bg-gradient-to-r to-[#4E9F3D] from-[#00b88a] focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-10 w-10 bg-gradient-to-r to-[#4E9F3D] from-[#00b88a] rounded-[12px] text-[#D8E9A8] " strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-10 w-10 bg-gradient-to-r to-[#4E9F3D] from-[#00b88a] rounded-[12px] text-[#D8E9A8]" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>

                </div>
                <Collapse open={openNav}>
                    <NavList onSelectedChange={handleSelectedChange} />

                </Collapse>
            </Navbar>
        </div>

    );
}