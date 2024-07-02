import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import Tab from './components/Tab'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<First/>}/>
     <Route path='/r' element={<Reg/>}/>
     <Route path='/t' element={<Tab/>}/>
     <Route path='/u' element={<Statebasics/>}/>
     </Routes>
     
    </>
  )
}

export default App
