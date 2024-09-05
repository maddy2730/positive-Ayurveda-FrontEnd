import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Container/navbar/Navbar';
import Landingpage from './Components/Landingpage';
import Aboutus from './Components/Aboutus';
import Shop from './Components/Shop';
import Services from './Components/Services';
// import Pages from './Components/Pages';
import Blog from './Components/Blog';
import LoginSignup from './Components/LoginSignup';
import Contact from './Components/Contact';
import Cart from './Components/Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      // Product already exists in cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Product does not exist in cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((item, i) => i !== index));
  };

  const removeFromCartsubtract = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return null;
      }
      return item;
    }).filter(item => item !== null);

    setCart(updatedCart);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='/pages' element={<Pages />} /> */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeFromCartsubtract={removeFromCartsubtract} />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
