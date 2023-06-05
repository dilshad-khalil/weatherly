import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { AppIcon, HomeIcon, CitiesIcon, SettingsIcon, MapIcon, NotificationIcon, LightIcon, DarkIcon } from '../Components/Assets/Icons/icons'
import { easeInOut, motion } from 'framer-motion'

const Nav = () => {
    //toggling darkMode

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        handleLocalStorage();
        if (localStorage.theme === 'light') {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    }, [])

    const handleLocalStorage = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const handleDarkMode = () => {
        setDarkMode(!darkMode)

        if (darkMode) {
            localStorage.theme = 'light'
            handleLocalStorage();

        }

        else if (!darkMode) {
            localStorage.theme = 'dark'
            handleLocalStorage();
        }

    }

    return (
        <motion.div
            
  initial={{ x:'-100px' }}
            animate={{ x: '0px' }}
  
            className=' w-[6rem] h-full bg-whiteBack relative rounded-md py-6 px-2 dark:bg-[#1C1C22] shadow-sm'>
            <div className='flex items-center flex-col gap-1'>
                <AppIcon width={26} height={26} fill={`${darkMode ? '#FFFFFF' : '#374957'}`} stroke='none' />
                <p className='text-primaryColor text-[.8rem] font-semibold dark:text-white'>Weatherly</p>
            </div>
            <div className='flex flex-col items-center  h-[90%] justify-between '>
                <div className=' mt-[4rem] flex flex-col items-center gap-1 relative '>
                    <NavLink to='/'  className='flex flex-col items-center justify-center gap-1 w-full py-[.8rem] hover:bg-white  dark:hover:bg-darkHover   rounded-lg ' >
                        <HomeIcon width={22} height={22} fill="#7C8892" />
                        <p className=' text-secondaryColor text-[.8rem] font-semibold '>Home</p>
                    </NavLink>
                    <NavLink to='/cities' className='flex flex-col items-center justify-center gap-1 w-full py-[.8rem] hover:bg-white  dark:hover:bg-darkHover   rounded-lg' >
                        <CitiesIcon width={22} height={22} fill="#7C8892 " />
                        <p className='text-secondaryColor text-[.8rem] font-semibold'>Cities</p>
                    </NavLink>
                    <NavLink to='/map' className='flex flex-col items-center justify-center gap-1 w-full py-[.8rem] hover:bg-white  dark:hover:bg-darkHover   rounded-lg' >
                        <MapIcon width={22} height={22} fill="#7C8892 " />
                        <p className='text-secondaryColor text-[.8rem] font-semibold'>Map</p>
                    </NavLink>
                    <NavLink to='/notifications' className='inline-flex flex-col items-center justify-center px-2  gap-1 w-full py-[.8rem] hover:bg-white  dark:hover:bg-darkHover   rounded-lg' >
                        <NotificationIcon width={22} height={22} fill="#7C8892 " />
                        <p className='text-secondaryColor text-[.8rem] font-semibold'>Notification</p>
                    </NavLink>
                    <NavLink to='/settings' className='flex flex-col items-center justify-center gap-1 w-full py-[.8rem] hover:bg-white  dark:hover:bg-darkHover   rounded-lg' >
                        <SettingsIcon width={22} height={22} fill="#7C8892 " />
                        <p className='text-secondaryColor text-[.8rem] font-semibold'>Settings</p>
                    </NavLink>
                </div>

                <div className='flex flex-col items-center gap-1 cursor-pointer' onClick={handleDarkMode}>
                    {
                        darkMode ?
                            <>
                                <img src={DarkIcon} width='22px' alt="Dark Mode icon" className='' />
                                <p className='text-primaryColor text-[.8rem] font-semibold'>Dark</p>
                            </> :
                            <><img src={LightIcon} width='22px' alt="Light Mode icon" className='animate-spin-slow' />
                                <p className='text-primaryColor text-[.8rem] font-semibold'>Light</p></>

                    }

                </div>

            </div>
        </motion.div>
    )
}

export default Nav