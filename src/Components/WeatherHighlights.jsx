import React, { useState } from 'react'
import { LightIcon, DarkIcon } from '../Components/Assets/Icons/icons'
import WindIcon from '../Components/Assets/Icons/WindIcon.png'
import PressureIcon from '../Components/Assets/Icons/PressureIcon.png'
import HumidityIcon from '../Components/Assets/Icons/HumidityIcon.png'
import UvIndex from '../Components/Assets/Icons/UV.png'
import VIS from '../Components/Assets/Icons/VIS.png'
import { easeInOut, easeOut, motion } from 'framer-motion'

const WeatherHighlights = ({ data }) => {

    const Info = {
        sunrise:data?.forecast?.forecastday[0]?.astro?.sunrise,
        sunset: data?.forecast?.forecastday[0]?.astro?.sunset,
        windK:data?.current?.wind_kph,
        windM: data?.current?.wind_mph,
        windDir: data?.current?.wind_dir,
        pressureMb:data?.current?.pressure_mb,
        pressureIn:data?.current?.pressure_in,
        humidity: data?.current?.humidity,
        UV:data?.current?.uv,
        visK:data?.current?.vis_km,
        visM:data?.current?.vis_miles,
        rainCond: data?.forecast?.forecastday[0]?.day?.daily_will_it_rain,
        pressure:localStorage.pressure,
        vis: localStorage.unit,
        wind:localStorage.unit,
    }
    
  return (
      <motion.div
       initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      transition={{delay:.8 , ease:easeOut , duration:.5 }}
          className='w-[50%] min-w[300px] h-full rounded-lg bg-whiteBack dark:bg-darkComponentColor p-6'>
          <h1 className='dark:text-white text-primaryColor font-medium text-[.9rem]'>Today's Highlight</h1>
          <h1 className='dark:text-red-400 text-primaryColor text-[.9rem] mt-2'>{ Info.rainCond ? 'Looks like you will need an umbrella 😃' : 'No worries go outside and have fun' }</h1>
          <div className='h-full mt-4 flex flex-col gap-3 w-full'>
              
              <div className='w-full h-[20%] bg-sunriseSunset  p-3 rounded-md justify-between flex flex-col items-center'>
                  <h1 className=' text-primaryColor  text-[.8rem] font-bold'>Sunrise & Sunset</h1>
                  <div className='flex justify-between w-[90%] items-center'>
                      <div className='flex flex-col gap-1'>
                          <img src={LightIcon} width={20} height={20} fill="#7C8892 " alt="Sun" className='animate-spin-slow' />
                          <p className=' text-primaryColor/80 font-bold text-[.8rem]'>Sunrise</p>
                          <p className=' text-primaryColor/80 font-medium text-[.75rem]'>{ Info.sunrise }</p>
                      </div>
                      <div className='flex flex-col gap-1' dir='rtl'>
                          <img className='animate-spin-slow' src={DarkIcon} width={20} height={20} fill="#7C8892 " alt="Sun" />
                          <p className=' text-primaryColor/80 font-bold text-[.8rem] '>Sunset</p>
                          <p dir='ltr' className=' text-primaryColor/80 font-medium text-[.75rem]'>{ Info.sunset }</p>
                      </div>
                  </div>
              </div>

              <div  className='  w-full h-auto bg-windSpeed p-3 pl-4 rounded-md justify-between flex flex-col gap-3 '>
                  <h1 className=' text-primaryColor  text-[.8rem] font-bold'>Wind Speed</h1>
                  <div className='flex  items-center gap-2 ml-4'>
                      <img className='w-[24px] ' src={WindIcon} alt="" />
                      <div>
                          <h1 className='text-primaryColor font-bold text-[1rem]'>{Info.wind === 'K' ? Info.windK : Info.windM} <span className='text-[.7rem]'>{ Info.wind === 'K' ? 'KPH' : "MPH" }</span></h1>
                          <p className='text-primaryColor text-[.75rem]'>Wind Dir.. { Info.windDir }</p>
                      </div>
                  </div>
              </div>

              <div className='w-full   h-auto bg-pressure p-3 pl-4   rounded-md justify-between flex flex-col gap-3'>
                  <h1 className=' text-primaryColor font-bold text-[.8rem]'>Pressure</h1>
                  <div className='flex  items-center gap-2 ml-4'>
                      <img className='w-[24px] ' src={PressureIcon} alt="" />
                      <div>
                        <h1 className='text-primaryColor font-bold text-[1rem]'>{Info.pressure ==='MB' ? Info.pressureMb : Info.pressureIn} <span className='text-[.7rem]'>{ Info.pressure === 'MB' ? 'MB' : "IN" }</span></h1>

                      </div>
                  </div>
              </div>

              <div className='w-full h-auto bg-humidity p-3 rounded-md justify-between flex flex-col gap-3 pl-4'>
                  <h1 className=' text-primaryColor font-bold text-[.8rem]'>Humidity</h1>
                  <div className='flex gap-2 items-center ml-4'>
                      <img className='w-[16px] h-[20px] ' src={HumidityIcon} alt="" />
                      
                  <h1 className=' text-primaryColor font-medium text-2xl'>{ Info.humidity }%</h1>
                      </div>
              </div>

              <div className='w-full h-auto rounded-md justify-between flex gap-3 '>
                  
                  <div className='w-full h-auto bg-windSpeed p-3 rounded-md justify-between flex flex-col gap-4 '>
                  <h1 className=' text-primaryColor font-bold text-[.8rem]'>UV Index</h1>
                  <div className='flex gap-2 items-center ml-4'>
                      <img className='w-[26px] ' src={UvIndex} alt="" />
                      
                  <h1 className=' text-primaryColor font-bold text-[1rem] '>{ Info.UV } <span className='text-[.7rem]'>UV</span></h1>
                      </div>
                  </div>

                  <div  className='w-full h-auto bg-sunriseSunset p-3 rounded-md justify-between flex flex-col gap-4   '>
                  <h1 className=' text-primaryColor font-bold text-[.8rem]'>Visibility</h1>
                  <div className='flex gap-2 items-center'>
                      <img className='w-[22px] h-[20px]  ' src={VIS} alt="" />
                      
                  <h1 className=' text-primaryColor font-bold text-[1rem]'>{Info.vis  === 'K' ? Info.visK : Info.visM} <span className='text-[.7rem]'>{ Info.vis === 'K' ? 'KM' : "M" }</span> </h1>
                      </div>
                  </div>
                  
              </div>

          </div>
    </motion.div>
  )
}

export default WeatherHighlights