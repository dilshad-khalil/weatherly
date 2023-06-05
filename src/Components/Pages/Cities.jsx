import React from 'react'
import FetchCities from '../FetchCities'
import { easeIn, easeInOut,easeOut , motion } from 'framer-motion'

const Cities = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity:1 }}
      transition={{ delay: .2, ease: easeOut, duration: .5 }}
      className='w-full h-full p-6     '>
          
          <h1 className='text-xl z-10 dark:text-white text-primaryColor uppercase  font-bold'>Cities</h1>
     
      <motion.div
        initial={{ opacity: 0 , y:'-100px' }}
      animate={{ opacity:1 , y:'0px' }}
        transition={{ delay: .4, ease: easeOut, duration: .5 }}
        className='w-full h-full flex flex-col scrollbar-hide overflow-y-auto py-4  gap-3'>
          <FetchCities city={'Arbil'} />
          <FetchCities city={'Syria'} />
          <FetchCities city={'Baghdad'} />
          <FetchCities city={'Jordan'} />
          <FetchCities city={'America'} />
          <FetchCities city={'Brazil'} />
          <FetchCities city={'France'} />
      </motion.div>
      
          
    </motion.div>
  )
}

export default Cities