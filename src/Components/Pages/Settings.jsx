import React, { useEffect, useState } from 'react'
import { SettingsIcon } from '../Assets/Icons/icons'
import { easeIn, easeInOut,easeOut , motion } from 'framer-motion'
import Introduction from '../Introduction'

const Settings = () => {
    const [temp, setTemp] = useState('Celsius')
    const [unit, setUnit] = useState('K')
    const [pressure , setPressure] = useState('MB')

    useEffect(() => {
        setTemp(localStorage.temp)
        setUnit(localStorage.unit)
        setPressure(localStorage.pressure)
    },[ ])

    
    console.log(temp)
    
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
          transition={{ delay: .2, ease: easeOut, duration: .5 }}
          className='w-full h-full p-6 '>
          
          <h1 className='text-xl dark:text-white text-primaryColor uppercase  font-bold'>Settings</h1>
          
          <motion.div
          initial={{ opacity: 0 , y:'-100px' }}
      animate={{ opacity:1 , y:'0px' }}
              transition={{ delay: .4, ease: easeOut, duration: .5 }}
              className='w-full h-auto dark:bg-darkComponentColor bg-whiteBack p-6 rounded-lg mt-2 gap-4 flex flex-col'>
              
                  <div className=''>
                  <h1 className='text-md dark:text-white text-primaryColor font-medium'>Tempreature</h1>
                      
                  <div className='flex gap-2 dark:bg-darkHover bg-white p-2 rounded-lg w-full h-auto justify-between mt-2'>
                      
                      <div onClick={() => {
                          setTemp('Celsius')
                          localStorage.temp = 'Celsius';
                      }} className={`w-full h-10 flex justify-center items-center font-medium text-primaryColor dark:text-white cursor-pointer ${temp === 'Celsius' ? 'bg-blue-400' : ''}     rounded-md `}>Celsius</div>

                      <div onClick={() => {
                          setTemp('Fahrenheit')
                          localStorage.temp = 'Fahrenheit';
                      }} className={`w-full h-10 flex justify-center text-primaryColor dark:text-white  ${temp === 'Celsius' ? '' : 'bg-blue-400'}  items-center font-medium cursor-pointer    rounded-md `}>Fahrenheit</div>
                      
                  </div>
              </div>
                  
              <div className=''>
                  <h1 className='text-md font-medium dark:text-white text-primaryColor'>Unit</h1>
                      
                  <div className='flex gap-2 dark:bg-darkHover bg-white p-2 rounded-lg w-full h-auto justify-between mt-2 '>
                      
                      <div onClick={() => {
                          setUnit('K')
                          localStorage.unit = 'K';
                      }} className={`w-full h-10 flex justify-center items-center font-medium text-primaryColor dark:text-white cursor-pointer ${unit === 'K' ? 'bg-blue-400' : ''}     rounded-md `}>Kilometers</div>

                      <div onClick={() => {
                          setUnit('M')
                          localStorage.unit = 'M';
                      }} className={`w-full h-10 flex justify-center text-primaryColor dark:text-white  ${unit === 'K' ? '' : 'bg-blue-400'}  items-center font-medium  cursor-pointer    rounded-md `}>Miles</div>
                      
                  </div>
              </div>

              <div className=''>
                  <h1 className='text-md font-medium dark:text-white text-primaryColor'>Pressure</h1>
                      
                  <div className='flex gap-2 dark:bg-darkHover bg-white p-2 rounded-lg w-full h-auto justify-between mt-2 '>
                      
                      <div onClick={() => {
                          setPressure('MB')
                          localStorage.pressure = 'MB';
                      }} className={`w-full h-10 flex justify-center items-center font-medium text-primaryColor dark:text-white cursor-pointer ${pressure === 'MB' ? 'bg-blue-400' : ''}     rounded-md `}>Milibar</div>

                      <div onClick={() => {
                          setPressure('IN')
                          localStorage.pressure = 'IN';
                      }} className={`w-full h-10 flex justify-center text-primaryColor dark:text-white  ${pressure === 'MB' ? '' : 'bg-blue-400'}  items-center font-medium  cursor-pointer    rounded-md `}>Atmospheric unit</div>
                      
                  </div>
              </div>

              <Introduction/>

              
          </motion.div>

                  

          

    </motion.div>
  )
}

export default Settings