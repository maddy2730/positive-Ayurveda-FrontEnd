import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import img1 from '../Container/Images/BG2.png';
import { Link, useNavigate } from 'react-router-dom';
import baseURL from "./baseUrl";

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone number must be 10 digits';
      isValid = false;
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!/(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}/.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one alphabet';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const payload = {
          account: {
            name: formData.name,
            phone_number: formData.phone_number,
            email: formData.email,
            password: formData.password,
          }
        };

        const response = await axios.post(`${baseURL}/accounts`, payload, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });

        // Clear token to avoid any conflict
        localStorage.removeItem('token');

        setFormStatus('Account created successfully! Redirecting to sign in...');
        setTimeout(() => {
          navigate('/loginsignup'); // Redirect to the sign-in page
        }, 2000);
      } catch (error) {
        if (error.response) {
          setFormStatus(`Error: ${error.response.data.message || 'Failed to create the account'}`);
        } else {
          setFormStatus('Error creating the account. Please try again.');
        }
      }
    }
  };

  return (
    <div className="container d-flex align-items-center backcolor">
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
              <b>Create your account</b>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ color: '#306D51' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone_number" className="form-label" style={{ color: '#306D51' }}>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_number"
                  placeholder="Enter your 10-digit phone number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
                {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{ color: '#306D51' }}>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={{ color: '#306D51' }}>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ backgroundColor: 'transparent', border: '1px solid #306D51' }}
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: '#306D51', color: 'white', width: '30%' }}
              >
                Sign Up
              </button>
              {formStatus && <div className="text-success mt-3">{formStatus}</div>}
            </form>
            <div className="mt-3">
              <span className="text-decoration-none" style={{ color: '#306D51' }}>Already have an account?</span>
              <Link to="/loginsignup" className="text-decoration-none" style={{ color: '#306D51' }}> Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
