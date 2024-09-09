import React from 'react';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink
import Logo from "../Images/NavbarLogo.png";
import used from "../Images/Admin.png";
import addto from "../Images/Add to Cart.png";
import './Navbar.css';

export default function Navbar({ cart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg back-groundd">
        <div className="container d-flex justify-content-between div1">
        <NavLink className="" to="/">
        <img src={Logo} className="logoImg" alt="Logo" />
        </NavLink>
          <div className='d-flex navbaricon'>
            <li className="nav-item mauto1">
              <NavLink className="nav-link" to="/cart">
                {cart.length > 0 && (
                  <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                  </span>
                )}
                <img src={addto} style={{ width: "40px", height: "40px" }} />
              </NavLink>
            </li>
            <li className="nav-item mauto1">
              <NavLink className="nav-link" to="/loginsignup">
                <img src={used} style={{ width: "40px", height: "40px" }} />
              </NavLink>
            </li>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbaricon">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/aboutus">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className='d-flex me-5'>
              <li className="nav-item pe-2">
                <NavLink className="nav-link" to="/cart">
                  {cart.length > 0 && (
                    <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  )}
                  <img src={addto} style={{ width: "40px", height: "40px" }} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/loginsignup">
                  <img src={used} style={{ width: "40px", height: "40px" }} />
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <img src={Logo} className="logoImg" alt="Logo" />
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/"><b>Home</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/aboutus"><b>About us</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/shop"><b>Shop</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/services"><b>Services</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/blog"><b>Blog</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="#"><b>Pages</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-links" aria-current="page" to="/contact"><b>Contact</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
