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
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
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
                <Link className="nav-link active" aria-current="page" to="/pages">Pages</Link>
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
    </div>
  );
}
