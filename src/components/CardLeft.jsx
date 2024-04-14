import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import noImage from "../assets/nofoto.png"
import cv from "../assets/curriculumVitae-Ejemplos.pdf"

import {DevicePhoneMobileIcon, MapPinIcon, EnvelopeOpenIcon, CalendarDaysIcon, DocumentIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from "react";
export function CardLeft() {
    const [isFixed, setIsFixed] = useState(true);
    const [scroll, setScroll] = useState(null)
    const divRef = useRef(null);
    const divRefc = useRef(null);
    useEffect(() => {

        const handleScroll = () => {
            let div1 = 0;
            let div2 = 0;
            let diferencia = 0;
            const scrollPosition = window.scrollY;
            if (divRef.current) {
                console.log(divRef.current.clientHeight);
                div1 = divRef.current.clientHeight;
            }

            if (divRefc.current) {
                console.log(divRefc.current.clientHeight);
                div2 = divRefc.current.clientHeight;
            }
            diferencia = div1 - div2;
            if (scrollPosition > diferencia - 112) {
                setIsFixed(false);
                setScroll(diferencia)

            } else {
                setIsFixed(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div ref={divRef} className="relative">
            <Card ref={divRefc} className={`lg:w-[30vw] ${isFixed ? `lg:fixed ` : ''} dark:bg-[#191A19] bg-white`} style={{ marginTop: isFixed ? `${112}px` : `${scroll}px` }}>
                <CardHeader
                    variant="gradient"
                    className="mb-4 grid h-auto place-items-center -mt-28 bg-transparent shadow-none"
                >
                    <img className={`rounded-3xl w-64 h-64 object-cover`} src={noImage} alt="" />

                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Typography className="font-bold text-center text-2xl dark:text-[#D8E9A8] text-[#1E5128]">
                        Cristhian Girón
                    </Typography>
                    <div className="flex items-center justify-center">
                        <div className="dark:bg-[#1d1d1d] bg-white p-2 pl-4 pr-4 rounded-[12px] text-gray-500">
                            Ui/Ux Designer
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <div className="h-10 w-10 dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] flex items-center justify-center hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  div-hover-f cursor-pointer">
                            <svg className="icono-svg-f" height="800px" width="800px" viewBox="0 0 290 290">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M205.807,0h-15.694c-43.62,0-79.107,35.488-79.107,79.108v33.386H84.193c-2.761,0-5,2.239-5,5v40c0,2.761,2.239,5,5,5 h26.811V285c0,2.761,2.239,5,5,5h40c2.761,0,5-2.239,5-5V162.494h39.786c2.761,0,5-2.239,5-5v-40c0-2.761-2.239-5-5-5h-39.786 V79.108c0-16.05,13.058-29.108,29.107-29.108h15.694c2.761,0,5-2.239,5-5V5C210.807,2.239,208.568,0,205.807,0z" />
                                </g>
                            </svg>
                        </div>

                        <div className="h-10 w-10 dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] flex items-center justify-center hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  div-hover-t cursor-pointer">
                            <svg className="icono-svg-t" width="800px" height="800px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <title>twitter</title> <path d="M24 8.531c-0.688 1-1.5 1.844-2.469 2.563 0.031 0.219 0.031 0.438 0.031 0.656 0 6.5-4.938 14-14 14-2.781 0-5.375-0.844-7.563-2.219 0.375 0.031 0.781 0.094 1.188 0.094 2.313 0 4.406-0.813 6.094-2.125-2.188-0.031-3.969-1.5-4.594-3.438 0.281 0.063 0.625 0.094 0.938 0.094 0.438 0 0.906-0.063 1.313-0.188-2.281-0.438-3.969-2.406-3.969-4.781v-0.063c0.688 0.344 1.406 0.563 2.219 0.594-1.313-0.906-2.188-2.406-2.188-4.094 0-0.906 0.25-1.75 0.656-2.5 2.438 2.969 6.063 4.969 10.156 5.156-0.063-0.344-0.125-0.75-0.125-1.125 0-2.719 2.188-4.938 4.906-4.938 1.438 0 2.719 0.625 3.625 1.594 1.125-0.219 2.156-0.656 3.094-1.219-0.344 1.156-1.125 2.156-2.125 2.75 1-0.125 1.906-0.406 2.813-0.813z" /> </g>

                            </svg>
                        </div>
                        <div className="h-10 w-10 dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] flex items-center justify-center hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  div-hover-d cursor-pointer">
                            <svg className="icono-svg-d" version="1.1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512" stroke="#000000">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd11ad5d"> <path d="M467.811,113.129c-9.119-13.548-19.624-26.224-31.164-37.814 c-11.564-11.528-24.29-21.994-37.801-31.151c-13.648-9.245-28.257-17.167-43.402-23.604c-15.433-6.525-31.589-11.527-47.994-14.871 c-16.842-3.443-34.158-5.19-51.461-5.19c-17.316,0-34.632,1.747-51.449,5.19c-16.431,3.343-32.586,8.345-48.006,14.871 c-15.145,6.438-29.767,14.359-43.415,23.604c-13.511,9.157-26.236,19.623-37.776,31.151c-11.552,11.59-22.057,24.266-31.189,37.814 c-9.207,13.624-17.142,28.245-23.554,43.415c-6.538,15.407-11.54,31.575-14.921,48.018C2.259,221.368,0.513,238.684,0.513,256 c0,17.303,1.747,34.582,5.165,51.425c3.381,16.442,8.383,32.586,14.921,48.018c6.412,15.158,14.347,29.767,23.554,43.39 c9.132,13.537,19.637,26.237,31.189,37.814c11.54,11.527,24.265,22.019,37.776,31.189c13.648,9.206,28.27,17.128,43.415,23.554 c15.42,6.512,31.576,11.502,48.006,14.87c16.817,3.469,34.133,5.24,51.449,5.24c17.303,0,34.62-1.771,51.461-5.24 c16.405-3.368,32.562-8.358,47.994-14.87c15.146-6.426,29.754-14.348,43.402-23.554c13.511-9.171,26.236-19.662,37.801-31.189 c11.54-11.577,22.045-24.277,31.164-37.814c9.257-13.623,17.179-28.231,23.566-43.39c6.537-15.432,11.527-31.575,14.896-48.018 c3.455-16.843,5.214-34.122,5.214-51.425c0-17.316-1.759-34.632-5.214-51.438c-3.369-16.443-8.359-32.611-14.896-48.018 C484.989,141.375,477.067,126.753,467.811,113.129z M255.988,37.827c55.242,0,105.68,20.546,144.093,54.418 c-0.537,0.798-31.613,48.106-113.94,78.97C248.827,102.7,207.844,48.332,204.576,43.94 C221.056,39.973,238.26,37.827,255.988,37.827z M203.69,44.165h0.05c-0.25,0.025-0.462,0.05-0.711,0.175 C203.453,44.214,203.69,44.165,203.69,44.165z M162.895,58.648c2.907,3.881,43.253,58.635,81.016,125.729 C139.154,212.211,48.232,211.063,42.48,211.013C56.64,143.445,102.051,87.38,162.895,58.648z M93.705,401.79 C58.948,363.152,37.802,312.052,37.802,256c0-2.346,0.112-4.616,0.175-6.961c3.867,0.149,111.669,2.569,224.011-31.064 c6.25,12.251,12.227,24.677,17.703,37.077c-2.869,0.823-5.764,1.672-8.608,2.62C153.339,295.747,93.63,401.677,93.63,401.677 S93.68,401.74,93.705,401.79z M255.988,474.173c-50.601,0-97.06-17.379-134.063-46.284l-0.038,0.1c0,0-1.983-1.497-4.878-3.843 c1.584,1.348,3.306,2.495,4.916,3.743c0.399-0.849,42.429-91.321,171.19-136.209c0.475-0.174,0.961-0.313,1.447-0.474 c30.702,79.794,43.377,146.613,46.608,165.676C314.984,468.021,286.203,474.173,255.988,474.173z M377.912,436.946 c-2.221-13.149-13.849-77.199-42.468-155.846c70.425-11.291,131.468,8.034,135.959,9.481 C461.697,351.389,426.903,403.886,377.912,436.946z M322.146,246.668c-1.534-3.742-3.106-7.485-4.716-11.303 c-4.528-10.643-9.432-21.233-14.496-31.638c86.144-35.182,121.138-85.746,121.55-86.331 c30.614,37.164,49.116,84.634,49.615,136.357C470.942,253.105,397.099,237.236,322.146,246.668z M203.69,44.165 c0,0-0.237,0.05-0.661,0.175c0.25-0.125,0.461-0.15,0.711-0.175H203.69z M117.01,424.146c1.584,1.348,3.306,2.495,4.916,3.743 l-0.038,0.1C121.888,427.988,119.904,426.491,117.01,424.146z"> </path> </g> </g>

                            </svg>
                        </div>
                        <div className="h-10 w-10 dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] flex items-center justify-center hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  div-hover-l cursor-pointer">
                            <svg className="icono-svg-l" version="1.1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512" >

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g>

                            </svg>
                        </div>

                    </div>
                    <div className="dark:bg-[#1d1d1d] bg-blue-gray-50 p-6 rounded-[12px]">
                        <div className=" flex gap-4 items-center border-b-[1px] dark:border-gray-700 border-gray-300 w-full pb-3">
                            <div className="h-10 w-10 dark:bg-black bg-white hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a] text-pink-300 hover:text-[#D8E9A8] rounded-[12px] flex items-center justify-center cursor-pointer">
                                <DevicePhoneMobileIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm dark:text-gray-600">Phone</div>
                                <div className="dark:text-[#D8E9A8] text-[#1E5128]">
                                    +593 969 644 592
                                </div>
                            </div>

                        </div>
                        <div className=" flex gap-4 items-center border-b-[1px] dark:border-gray-700 border-gray-300 w-full pb-3 pt-3">
                            <div className="h-10 w-10 dark:bg-black bg-white hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  text-blue-300 hover:text-[#D8E9A8] rounded-[12px] flex items-center justify-center cursor-pointer">
                                <MapPinIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm dark:text-gray-600">Location</div>
                                <div className="dark:text-[#D8E9A8] text-[#1E5128]">
                                    Loja Ecuador
                                </div>
                            </div>

                        </div>
                        <div className=" flex gap-4 items-center border-b-[1px] dark:border-gray-700 border-gray-300 w-full pb-3 pt-3">
                            <div className="h-10 w-10 dark:bg-black bg-white hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  text-pink-200 hover:text-[#D8E9A8] rounded-[12px] flex items-center justify-center cursor-pointer">
                                <EnvelopeOpenIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm dark:text-gray-600">Email</div>
                                <div className="dark:text-[#D8E9A8] text-[#1E5128] dark:hover:text-[#00b88a] hover:text-[#00b88a] cursor-pointer">
                                    cristhiang181998@gmail.com
                                </div>
                            </div>

                        </div>
                        <div className=" flex gap-4 items-center border-b-[1px] dark:border-gray-700 border-gray-300 w-full pb-3 pt-3">
                            <div className="h-10 w-10 dark:bg-black bg-white hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  text-purple-300 hover:text-[#D8E9A8] rounded-[12px] flex items-center justify-center cursor-pointer">
                                <CalendarDaysIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-sm dark:text-gray-600">Bithday</div>
                                <div className="dark:text-[#D8E9A8] text-[#1E5128]">
                                    Sep 18, 1998
                                </div>
                            </div>

                        </div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">

                    <a href={cv} target="_blank" rel="noopener noreferrer">
                        <Button className=" flex items-center gap-4 rounded-full h-14 w-56 bg-gradient-to-r from-[#4E9F3D] to-[#00b88a] hover:from-[#00b88a] hover:to-[#4E9F3D] bg-opacity-95 text-[#D8E9A8] normal-case text-xl font-normal">
                            <DocumentIcon className="h-9 w-9" />
                            View CV
                        </Button>
                    </a>
                </CardFooter>
            </Card>

            <div id="desplace"></div>
        </div>

    );
}