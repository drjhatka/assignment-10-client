import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/static/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/static/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default App
