import React from 'react'
import { easeIn, easeInOut,easeOut , motion } from 'framer-motion'

const HorulyForecast = ({ data }) => {
  
  const hourlyData = data?.forecast?.forecastday[0]?.hour;

  const checkAmPm = (time) => {
    let timeCheck = parseInt(time.slice(0, 2))
    return timeCheck >= 12 ? 'PM' : 'AM'
  }

  const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft -= 250;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft += 250;
    }
  

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      transition={{delay:1 , ease:easeOut , duration:.5 }}
      
      className='relative w-full h-full mt-4 bg-whiteBack dark:bg-darkComponentColor rounded-lg p-4 overflow-clip'>
         <h1 className='font-medium dark:text-white  text-primaryColor relative top-4 left-4'>Hourly Forecast</h1>
      <div className=' w-full h-full flex items-center justify-center mb-4   '>
          <button onClick={slideLeft} className='absolute top-[50%] left-2 z-10 font-boldtext-white text-2xl bg-white hover:bg-white/70 transition-all duration-300 ease-in-out w-12 rounded-full h-12'>{ '<' }</button>
        
        <div id='slider' className='bg-gradient-to-l rounded-lg  dark:from-black/20 via-darkComponentColor mt-4 absolute w-[95%] h-[70%]  whitespace-nowrap flex scroll-smooth overflow-x-scroll scrollbar-hide p-2 gap-3'>
          {
            hourlyData?.map(data =>(
              <div  className='dark:odd:bg-[#19191D] odd:bg-white w-full min-w-[200px] flex flex-col justify-center items-center p-4 min-h[150px] h-full rounded-lg gap-1 '>
                <p className='text-primaryColor dark:text-white text-md'>{ data?.time.slice(11 , data?.time.length) } {checkAmPm(data?.time.slice(11 , data?.time.length))} </p>
                <img className='w-[60px]' src={data?.condition?.icon} alt="" />
                <p className='text-primaryColor dark:text-white  text-[0.75rem] whitespace-pre-wrap text-center'>{data?.condition?.text }</p>
                <p className='text-primaryColor dark:text-white text-xl font-bold'>{ data?.temp_c }<sup> C</sup></p>
              </div>
            ))
          }
           
          
          
          
        </div>
          <button onClick={slideRight} className='absolute top-[50%] right-2 z-10 font-boldtext-white text-2xl bg-white hover:bg-white/70 transition-all duration-300 ease-in-out w-12 rounded-full h-12'>{ '>' }</button>
        
       </div> 
    </motion.div>
    

  )
}

export default HorulyForecast