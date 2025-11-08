import {Routes,Route} from 'react-router';
import { Homepage } from './pages/HomePage'
import { Checkoutpage} from './pages/Checkoutpage';
import { Orderspage } from './pages/Orderspage';
import { Trackingpage } from './pages/Trackingpage';
import './App.css'

function App() {


  return (
    <Routes>
      <Route index element={<Homepage />}/>
      <Route path='checkout' element={<Checkoutpage />}/>
      <Route path='orders' element={<Orderspage/>} />
      <Route path=''/>
      
      
    </Routes>
    
  )
}

export default App
