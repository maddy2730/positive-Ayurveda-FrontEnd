import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Container/navbar/Navbar';
import Landingpage from './Components/Landingpage';
import Aboutus from './Components/Aboutus';
import Shop from './Components/Shop';
import Services from './Components/Services';
import Blog from './Components/Blog';
import LoginSignup from './Components/LoginSignup';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';

const AuthRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to='/loginsignup' />;
};

const AppRoutes = ({ cart, addToCart, removeFromCart, removeFromCartsubtract, isAuthenticated, loading, setIsAuthenticated }) => {
  const location = useLocation();
  const hideNavbar = ['/signup', '/loginsignup','/cart'].includes(location.pathname);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!hideNavbar && <Navbar cart={cart} />}
      <Routes>
        <Route path='/' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Landingpage />} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/aboutus' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Aboutus />} />} />
        <Route path='/shop' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Shop addToCart={addToCart} />} />} />
        <Route path='/services' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Services />} />} />
        <Route path='/blog' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Blog />} />} />
        <Route path='/contact' element={<AuthRoute isAuthenticated={isAuthenticated} element={<Contact />} />} />
        <Route path='/cart' element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} removeFromCartsubtract={removeFromCartsubtract} />} />
        <Route path='/loginsignup' element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    
    setLoading(false);
  }, []);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
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
        <AppRoutes 
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeFromCartsubtract={removeFromCartsubtract}
          loading={loading}
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated} 
        />
      </BrowserRouter>
    </div>
  );
}
