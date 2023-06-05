import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Requests from './Requests';

const FetchCities = ({ city }) => {

  const [data, setData] = useState({});

  const Info = {
    cityName:data?.location?.region,
    country: data?.location?.country,
    maxtemp_c:data?.forecast?.forecastday[0]?.day?.maxtemp_c,
    mintemp_c:data?.forecast?.forecastday[0]?.day?.mintemp_c,
    maxtemp_f:data?.forecast?.forecastday[0]?.day?.maxtemp_f,
    mintemp_f: data?.forecast?.forecastday[0]?.day?.mintemp_f,
    icon: data?.current?.condition?.icon,
    condition:data?.current?.condition?.text,
  }
 

  
  const fetchWeathetData = async () => {
    await axios.request(Requests.WeatherForecast).then((resp) => {
      setData(resp.data)
      
    }).catch((err) => {
      console.log(err);
    })

    
  }

  
  useEffect(() => {
    Requests.WeatherForecast.params.q = city;
    fetchWeathetData();
  } , [])

  
  
  return (
      <div className='w-full h-[90px] rounded-lg bg-whiteBack dark:hover:bg-darkHover  dark:bg-darkComponentColor flex px-6 py-3 justify-between items-center'>
        <div className='flex items-center gap-2'>
          <img className='w-14' src={Info.icon} alt="" />
            <div>
              <h1 className='dark:text-white font-bold text-xl text-darkComponentColor'>{Info.cityName}</h1>
            <p className='dark:text-white   text-darkComponentColor'>{Info.country}</p>
          </div>
        </div>
          <p className='dark:text-white font-medium  text-darkComponentColor'>{ Info.condition }</p>

        <p className='font-bold dark:text-white text-primaryColor text-xl'>{localStorage.temp === 'Celsius' ? Info.maxtemp_c : Info.maxtemp_f}<span className='font-medium text-sm'>/
          {localStorage.temp === 'Celsius' ? Info.mintemp_c : Info.mintemp_f} { localStorage.temp === 'Celsius' ? 'C' : 'F' }</span></p>
        
      </div>
  )
}

export default FetchCities