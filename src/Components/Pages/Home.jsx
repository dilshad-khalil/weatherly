import React, { useEffect } from 'react'
import { useState } from 'react'
import SearchIcon from '../Assets/Icons/searchIcon.png'
import WeatherState from '../WeatherState'
import WeatherHighlights from '../WeatherHighlights'
import HorulyForecast from '../HorulyForecast'
import Introduction from '../Introduction'
import  axios  from 'axios'
import Requests from '../Requests'
import { easeIn, easeInOut, motion } from 'framer-motion'

const Home = () => {
  //configuring the search bar
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('Arbil');
  const [data, setData] = useState({});
  //handles the input change and assigns it to the value
  const handleChange = (e) => {
    let el = e.target.value; 
    setInput(el)
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  }
  const fetchWeathetData = async () => {
    await axios.request(Requests.WeatherForecast).then((resp) => {
      setData(resp.data)
      
    }).catch((err) => {
      // console.log(err);
    })
  }

  useEffect(() => {
    setQuery(localStorage.city)
    fetchWeathetData();
  } , [])
  

  useEffect(() => {
    localStorage.city = query;
    Requests.WeatherForecast.params.q = query;
    fetchWeathetData();
  },[query])

  return (
    <div className='w-screen h-full gap-4 flex flex-col ml-4 '>

    <div className='w-full flex gap-4 h-full  '>
      <div className='flex flex-col w-full justify-between  ' >
          <motion.div
            initial={{ y:'-100px' }}
            animate={{ y: '0px' }}
            transition={{ delay: .4 }}
            className=''>
          <form onSubmit={hanldeSubmit} className='flex items-center'>
              <input className='w-[100%] outline-none border-none focus:border capitalize focus:border-[#c2c2c225] focus:border-solid  bg-whiteBack dark:bg-darkComponentColor h-16 rounded-lg p-[1rem] placeholder:text-[#AAAAAA] placeholder:text-sm text-[#AAAAAA] min-w-[400px] relative pl-[3rem] font-medium' placeholder='Search Cities...' type="text" name='Search' value={input} onChange={handleChange} />
              <img src={SearchIcon} className='w-[22px] h-auto absolute ml-4' alt="" />
          </form>
        </motion.div>
        <WeatherState data={data} />        
         <HorulyForecast data={data} />

      </div>
      <WeatherHighlights data={data} />
      </div>
      
    </div>
  )
}

export default Home