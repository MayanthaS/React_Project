import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import { Homepage } from "./pages/home/HomePage";
import { Checkoutpage } from "./pages/checkout/Checkoutpage";
import { Orderspage } from "./pages/orders/Orderspage";
import { Trackingpage } from "./pages/Trackingpage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
  useEffect(() => {
    
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<Checkoutpage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<Orderspage cart={cart} loadCart={loadCart} />} />
      <Route path="" />
    </Routes>
  );
}

export default App;
