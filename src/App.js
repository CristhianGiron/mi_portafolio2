
import './App.css';
import { Navigation } from './components/Navbar';
import { CardLeft } from './components/CardLeft';
import { CardCorp } from './components/Body';
import { useEffect, useState } from 'react';
import { HomeIcon, DocumentTextIcon, Squares2X2Icon, SwatchIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Spinner } from '@material-tailwind/react';
function App() {
  const [select, setSelect] = useState(0)
  const handleSelectedChange = (newValue) => {
    setSelect(newValue);
  };

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineChange = () => {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', handleOnlineChange);
    window.addEventListener('offline', handleOnlineChange);

    return () => {
      window.removeEventListener('online', handleOnlineChange);
      window.removeEventListener('offline', handleOnlineChange);
    };
  }, []);

  useEffect(() => {
    const handleOnlineStatus = () => {
      if (!isOnline && isLoading) {
        window.location.reload();
      }
    };

    if (!isOnline) {
      window.addEventListener('online', handleOnlineStatus);
    }

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
    };
  }, [isOnline]);

  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };



  return (
    <div>

      <div id={'miApp'} className={`transition-all duration-1000`} >

          <Navigation onSelectedChange={handleSelectedChange} />
          <div className='lg:p-10 grid grid-cols-1 lg:grid-cols-3 bg-transparent'>

            <CardLeft onLoadChange={handleLoad} />

            <div className='col-span-2 lg:m-0 mt-10'>
              <div className="lg:flex justify-end right-0 mb-10 hidden">
                <div className=" flex gap-6 dark:bg-[#191A19] bg-white w-[35rem] h-[9rem] rounded-[12px] p-8">
                  <div className={`dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  h-20 w-20 cursor-pointer flex flex-col justify-center items-center dark:hover:text-white hover:text-white  gap-1 ${select === 0 ? 'bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  text-white' : 'dark:text-gray-500 text-gray-700'}`}
                    onClick={() => handleSelectedChange(0)}>
                    <HomeIcon className="h-5 w-5" />
                    <span className='text-sm'>Home</span>
                  </div>
                  <div className={`dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  h-20 w-20 cursor-pointer flex flex-col justify-center items-center dark:hover:text-white hover:text-white  gap-1 ${select === 1 ? 'bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  text-white' : 'dark:text-gray-500 text-gray-700'}`}
                    onClick={() => handleSelectedChange(1)}>
                    <DocumentTextIcon className="h-5 w-5" />
                    <span className='text-sm'>Resume</span>
                  </div>
                  <div className={`dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  h-20 w-20 cursor-pointer flex flex-col justify-center items-center dark:hover:text-white hover:text-white  gap-1 ${select === 2 ? 'bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  text-white' : 'dark:text-gray-500 text-gray-700'}`}
                    onClick={() => handleSelectedChange(2)}>
                    <Squares2X2Icon className="h-5 w-5" />
                    <span className='text-sm'>Work</span>
                  </div>
                  <div className={`dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  h-20 w-20 cursor-pointer flex flex-col justify-center items-center dark:hover:text-white hover:text-white  gap-1 ${select === 3 ? 'bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  text-white' : 'dark:text-gray-500 text-gray-700'}`}
                    onClick={() => handleSelectedChange(3)}>
                    <SwatchIcon className="h-5 w-5" />
                    <span className='text-sm'>Blogs</span>
                  </div>
                  <div className={`dark:bg-[#1d1d1d] bg-blue-gray-50 rounded-[12px] hover:bg-gradient-to-r hover:to-[#4E9F3D] hover:from-[#00b88a]  h-20 w-20 cursor-pointer flex flex-col justify-center items-center dark:hover:text-white hover:text-white  gap-1 ${select === 4 ? 'bg-gradient-to-r to-[#4E9F3D] from-[#00b88a]  text-white' : 'dark:text-gray-500 text-gray-700'} `}
                    onClick={() => handleSelectedChange(4)}>
                    <EnvelopeIcon className="h-5 w-5" />
                    <span className='text-sm'>Contact</span>
                  </div>
                </div>
              </div>
              <CardCorp select={select} onSelectedChange={handleSelectedChange} />
            </div>

          </div>
      </div>
    </div>


  );
}

export default App;
