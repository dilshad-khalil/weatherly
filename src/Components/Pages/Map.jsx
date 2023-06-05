import React from 'react'
import { easeIn, easeInOut,easeOut , motion } from 'framer-motion'

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      transition={{delay:.2, ease:easeOut , duration:.5 }}
      className='w-full h-full p-6 flex flex-col gap-4 justify-center     '>
          
          <h1 className='text-xl dark:text-white text-primaryColor uppercase  font-bold'>Map</h1>

          <div className='w-full h-[95%] flex items-center justify-center  text-center p-3 dark:bg-darkComponentColor rounded-lg bg-whiteBack'>
              <motion.p
              initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      transition={{delay:.4, ease:easeInOut , duration:.3 }}
          className='text-primaryColor dark:text-slate-500 text-sm'>Couldn't get Google Maps API Key , was askin for a credit card broooo 🥲</motion.p>
          </div>
          
    </motion.div>
  )
}

export default Map