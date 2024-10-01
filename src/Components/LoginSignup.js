import React, { useState } from 'react';
import './Signup.css';
import img1 from '../Container/Images/BG2.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseURL from './baseUrl'

function LoginSignup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      account: {
        email: formData.email,
        password: formData.password,
      },
    };
  
    try {
      const response = await axios.post(`${baseURL}/accounts/sign_in`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const token = response.headers.authorization?.split(' ')[1];
  
      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        toast.success('Login successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/'); // Navigate to home or landing page
      } else {
        throw new Error('Authentication token not found in response');
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Error logging in. Please try again.';
      toast.error(`Login failed: ${errorMessage}`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <div className="container d-flex align-items-center backcolor">
      <ToastContainer />
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-md-6 ps-3 backcolor login-section d-flex flex-column justify-content-center backpicgreen">
          <div className="text-center pw">
            <div className="mb-5">
              <h2 style={{ color: '#C9F9E2' }}>
                <b>Welcome to Positive Ayurveda</b>
              </h2>
              <p className="text-white">
                Clarity gives you the blocks & components you need to create a truly professional website.
              </p>
            </div>
            <div className="mt-5">
              <div className="stars">
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
              <div>
                <p className="text-white">
                  "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
                </p>
              </div>
              <div className="text-white mt-2">
                <img src={img1} alt="" />
                Devon Lane,
                <br />
                <cite title="Source Title">Co-Founder, Design.co</cite>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ps-3 backcolor login-section d-flex flex-column justify-content-center">
          <div className="login-box">
            <h2 className="mb-4 fs-1" style={{ color: '#306D51' }}>
              <b>Welcome back!</b>
            </h2>
            <p style={{ color: '#306D51' }}>
              Clarity gives you the blocks and components you need to create a truly professional website.
            </p>
            <form onSubmit={handleSubmit}>   
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#306D51' }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#306D51' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder=""
                  value={formData.password}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
              </div>
              <div className="mb-3 form-check d-flex justify-content-between mt-3">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe" style={{ color: '#306D51' }}>Remember me</label>
                </div>
                <div>
                  <a href="#" className="text-decoration-none">Forgot password?</a>
                </div>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: '#306D51', color: 'white', width: '30%' }}
              >
                Log In
              </button>
            </form>
            <div className="mt-3">
              <span className="text-decoration-none" style={{ color: '#306D51' }}>Don't have an account?</span>
              <Link to="/signup" className="text-decoration-none" style={{ color: '#306D51' }}> Create free account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
