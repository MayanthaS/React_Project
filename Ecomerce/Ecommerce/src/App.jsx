import axios from 'axios';
import {Routes,Route} from 'react-router';
import { useEffect,useState } from 'react';
import { Homepage } from './pages/home/HomePage'
import { Checkoutpage} from './pages/checkout/Checkoutpage';
import { Orderspage } from './pages/orders/Orderspage';
import { Trackingpage } from './pages/Trackingpage';
import './App.css'


function App() {
 const [cart,setCart] =useState([]);
useEffect(() =>{
   axios.get('/api/cart-items?expand=product')
     .then((response) =>{
        setCart(response.data);
    });
})
 

  return (
    <Routes>
      <Route index element={<Homepage  cart ={cart}/>}/>
      <Route path='checkout' element={<Checkoutpage cart ={cart}/>}/>
      <Route path='orders' element={<Orderspage cart ={cart}/>} />
      <Route path=''/>
      
      
    </Routes>
    
  )
}

export default App
