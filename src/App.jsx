import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Settings from './Components/Pages/Settings'
import Nav from './Components/Nav'
import Notifications from './Components/Pages/Notifications'
import Cities from './Components/Pages/Cities'
import Map from './Components/Pages/Map'
const App = () => {
  return (
      <div className=' w-screen h-screen p-[1.5rem] flex overflow-hidden'>
          <BrowserRouter>
           <Nav/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/settings' element={<Settings/>}/>
                  <Route path='/notifications' element={<Notifications/>}/>
                  <Route path='/cities' element={<Cities/>}/>
                  <Route path='/map' element={<Map/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App