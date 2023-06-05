import React, { useEffect } from 'react'
import WeatherIcon from './Assets/Icons/WeatherState.png'
import HorulyForecast from './HorulyForecast'
import TodayForecast from './TodayForecast'
import { useState } from 'react'
import SunIcon from '../Components/Assets/Icons/DaySun.png'
import MoonIcon from '../Components/Assets/Icons/NightMoon.png'
import { easeInOut, motion } from 'framer-motion'

const WeatherState = ({ data }) => {
  const Info = {
    condition: data?.current?.condition?.text,
    feelsLikeC: data?.current?.feelslike_c,
    feelsLikeF: data?.current?.feelslike_f,
    conditionIcon: data?.current?.condition?.icon,
    tempC: data?.current?.temp_c,
    tempF: data?.current?.temp_f,
    isDay: data?.current?.is_day,
    city: data?.location?.region,
  }



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay:.6 , ease:easeInOut}}
      
      
        className='ml-4 '>
      <div className=' w-[100%] '>
            <div className=' flex  w-full  min-w-[400px] mt-4 '>
          
          <div className='flex items-center ml-8 w-[100%] '>
              <div className='flex flex-col items-center'>
                  <img className='w-[180px] ' src={Info.isDay ? SunIcon : MoonIcon} alt={Info.isDay ? 'SunIcon' : 'MoonIcon'}  />
                  <div className='flex gap-2'>
                      <p className='text-primaryColor dark:text-white font-semibold text-sm text-center'>{Info.condition}</p>
                      <p className='text-primaryColor dark:text-white/80 text-sm'>Feels Like {localStorage.temp === 'Celsius' ? Info.feelsLikeC : Info.feelsLikeF}<sup> {localStorage.temp === 'Celsius' ? 'C' : 'F'}</sup></p>
                  </div>
              </div>
              <div className='flex flex-col items-center gap-4 ml-4'>
                  <div className='flex mt-9'>
                        <h1 className='font-bold text-2xl dark:text-white text-primaryColor uppercase text-center'>{ Info.city }</h1>
                      <p>  </p>
                  </div>
                    <h1  className='font-bold text-3xl text-primaryColor text-center dark:text-white'>{localStorage.temp === 'Celsius' ? Info.tempC : Info.tempF}
                     <sup className=' font-medium'> {localStorage.temp === 'Celsius' ? 'C' : 'F'}</sup></h1>
              </div>
          </div>
                <TodayForecast forecastDay={data?.forecast} />
                </div>
      </div>

        </motion.div>
      
  )
}

export default WeatherState