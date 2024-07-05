import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Images/NavbarLogo.png";
import './Navbar.css';

export default function Navbar({ cart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg back-groundd">
        <div className="container d-flex justify-content-between div1">
          <img src={Logo} className="logoImg" alt="Logo" />
          <div  className='d-flex navbaricon'>
          <li className="nav-item mauto1">
                <Link className=" fa-solid fa-cart-shopping position-relative" to="/cart">
                  {cart.length > 0 && (
                    <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item mauto1">
                <Link className="fa-solid fa-user" to="/loginsignup"></Link>
              </li>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
            </div>
       
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gapes">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/aboutus">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Pages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item mauto">
                <Link className=" fa-solid fa-cart-shopping position-relative" to="/cart">
                  {cart.length > 0 && (
                    <span className="text-xs cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item mauto">
                <Link className="fa-solid fa-user" to="/loginsignup"></Link>
              </li>
            </ul>
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
              <Link className="nav-link active" aria-current="page" to="/"><b>Home</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/aboutus"><b>About us</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/shop"><b>Shop</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/services"><b>Services</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/blog"><b>Blog</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/pages"><b>Pages</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact"><b>Contact</b></Link>
            </li>
            
           
          </ul>
        </div>
      </div>
    </div>
  );
}
