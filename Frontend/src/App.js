import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path='/food_order_app' element={<Home />} />
            <Route path='/food_order_app/cart' element={<Cart />} />
            <Route path='/food_order_app/order' element={<PlaceOrder />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
