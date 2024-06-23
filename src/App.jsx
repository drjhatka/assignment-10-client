import Navbar from './components/static/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './components/static/Footer'

function App() {

  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default App
