

import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import { Header} from './components/header'
import Home from './pages/Home'


function App() {

  return (

 <div className='font-primary'>
    <Header/>

{/* <Home/> */}
<Outlet/>
<Footer/>
    </div>
  )
}

export default App
