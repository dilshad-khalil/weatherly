import React from 'react'
import { Link } from 'react-router-dom'
import RainIcon from './Assets/Icons/RainIcon.png'
const TodayForecast = ({ forecastDay }) => {
      
    const forecast = forecastDay?.forecastday
    const weeksDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date();

    const modifyWeeksDay = (day, index) => {
        weeksDay[date.getDay()] = 'Today' 
        if ((date.getDay() + index) >= weeksDay.length)
            return [weeksDay[0]]
        else {
             return [weeksDay[date.getDay() + index]]
        }
    }

    const trancuateString = (cond) => {
        let str = cond.slice(0, 15);
        str +='..'
        return(str)
    }
    


    return (
        <div className='w-[100%] flex flex-col gap-3 items-center justify-center '>
            {
                
                forecast?.map((cast, index) => (
                    <div title={cast?.day?.condition?.text} className=' dark:hover:bg-darkComponentColor/60 hover:bg-whiteBack/60 w-[100%] cursor-pointer h-[4.6rem] flex items-center justify-between px-5  bg-whiteBack dark:bg-darkComponentColor rounded-lg ' key={index}>
                        <h1 className='font-medium text-sm dark:text-white text-primaryColor'>{modifyWeeksDay(date.getDay , index) }</h1>
              <div className='flex items-center gap-2'>
                  <img className='w-[50px]' src={cast?.day?.condition?.icon} alt="RainIcon" />
                            <h1 className='font-medium dark:text-white text-sm text-primaryColor' >{ trancuateString(cast?.day?.condition?.text) }</h1>
              </div>
              <p className='font-bold dark:text-white text-primaryColor text-sm'>{cast?.day?.maxtemp_c} <span className='font-light'>/ {cast?.day?.mintemp_c}</span></p>
                     
                    </div>
                   
                ))
            }
    </div>
  )
}

export default TodayForecast