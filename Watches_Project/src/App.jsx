import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navibar from './Components/Navigationbar/Navibar'
import Home from './Components/HomePage/Home'
import Dealinfo from './Components/Dealinfo'
import SellerProduct from './Components/BestSeller/SellerProduct'
import MenWatch from './Components/MenWatch/MenWatch'
import WomenWatch from './Components/WomenWatch/WomenWatch'
import KidsWatchGirl from './Components/KidsWatch/KidsWatchGirl'
import Router from './router/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navibar /> */}
      {/* <Home /> */}
      {/* <Dealinfo /> */}
      {/* <SellerProduct /> */}
      {/* <MenWatch /> */}
      {/* <WomenWatch /> */}
      {/* <KidsWatchGirl /> */}
      <Router />
    </>
  )
}

export default App
