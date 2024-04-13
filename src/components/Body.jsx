
import { useEffect, useState } from 'react';

import { About } from './About';
import { Resume } from './Resume';
import { Work } from './Work';
import { Blog } from './Blog';
import { Contact } from './Contact';
export function CardCorp(select) {
    const [selected, setSelected] = useState(0);

    const handleItemClick = (index) => {
        setSelected(index);

    };

    useEffect(() => {
        const selection = select;
        console.log("El valor de 'select' ha cambiado:", selection.select);
        handleItemClick(selection.select);
    }, [select]);

    return (
        <>

            <div id='home' className={`w-auto h-auto bg-transparent lg:ml-7 `}>

                <div className={`dark:bg-[#191A19] bg-white h-auto rounded-t-[12px] `}>

                    {selected === 0 &&
                        <About />
                    }
                    {selected === 1 &&
                        <Resume />
                    }
                    {selected === 2 &&
                        <Work />
                    }
                    {selected === 3 &&
                        <Blog />
                    }
                    {selected === 4 &&
                        <Contact />
                    }
                </div>
                <div id='miDivY' className='h-16  rounded-b-[12px] dark:bg-black bg-blue-gray-50 dark:text-[#D8E9A8] text-gray-700 flex items-center justify-center'>
                    <div>
                        © 2024 All Rights Reserved by ib-themes.
                    </div>

                </div>


            </div>

        </>
    )
}