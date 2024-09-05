import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import Footer from '../Container/footer/Footer'

export default function Contact() {
  return (
    <div>
      <div className='card bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex  justify-content-center align-items-center'>
         <div>
         <div className='w-100 h-100'>
            <h3>Contact Us</h3>
          </div>
          <div className='d-flex edit'>
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/contact">Contact Us</Link>
          </div>
         </div>
          </div>
         
        </div>


      </div>
      <div className=''>
        <div className='colo pt-5 pb-5' style={{ backgroundColor: ' #C9F9E2', color: '#fff' }}>
        <div className="container   ctn">
      <div className="row ">
        <div className="col-md-6  header" style={{  color: '#fff',}}>
          <h4 className='getin'>GET IN TOUCH</h4>
          <h4 className='weLove mt-3'>We would love to hear from you.</h4>
          <p className='textp mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          <hr className="my-4"/>
          <div>
            <p><strong>Address:</strong><br/>2972 W
            estheimer Rd. Santa Ana, Illinois 85486</p>
            <p><strong>Email:</strong><br/><a href="mailto:tim.jennings@example.com" style={{ color: '#fff' }}>tim.jennings@example.com</a></p>
            <p><strong>Contact:</strong><br/>(480) 555-0103</p>
          </div>
        </div>
        <div className="col-md-6 headers" style={{  }}>
          <h2 className='message'>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
        </div>
        <div class="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="1350" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      

      </div>
     
    

    <Footer/>

    </div>
  )
}
