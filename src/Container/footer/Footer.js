import React from 'react'
import imgfooter from "../Images/NavbarLogo.png"
import './Footer.css'; // Import custom styles
export default function Footer() {
  return (
    <div>
       <footer className="footer mt-auto py-3 text-light">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <img src={imgfooter} alt="Logo" className="mb-2" />
            <p>
              Transform your construction, interior design, and architectural
              dreams into reality with home done well! Contact us today for a
              consultation.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Legal Information</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light">About us</a></li>
              <li><a href="#privacy" className="text-light">Privacy Policy</a></li>
              <li><a href="#terms" className="text-light">Terms & Conditions</a></li>
              <li><a href="#service" className="text-light">Customer Service</a></li>
              <li><a href="#return" className="text-light">Return Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-white">
            <h5>Top Product</h5>
            <ul className="list-unstyled">
              <li><a href="#black-tea" className="text-light">Black Organic Tea</a></li>
              <li><a href="#loose-leaf" className="text-light">Loose Leaf Tea</a></li>
              <li><a href="#green-tea" className="text-light">Green Tea</a></li>
              <li><a href="#sencha-tea" className="text-light">Sencha Tea</a></li>
            </ul>
          </div>
          <div className="col-md-2 mt-4">
            <address>
              A108 Adam street<br />
              New York, NY 535022<br />
              United States<br />
              <abbr title="Phone">Phone:</abbr> +1 4909 09093 23<br />
              <a href="mailto:Info@example.com" className="text-light">Info@example.com</a>
            </address>
          </div>
        </div>
        <div className="text-center mt-4 ">
          <p className="mb-0">© Copyright Nova. All Rights Reserved</p>
          <p className="mb-0">Designed by <a href="https://example.com" className="text-light">VBS TECH</a></p>
        </div>
      </div>
    </footer>
    </div>
  )
}