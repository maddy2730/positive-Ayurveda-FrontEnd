import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Footer from '../Container/footer/Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setformdata({
      ...formdata,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formdata.name,
      email: formdata.email,
      subject: formdata.subject,
      message: formdata.message
    };

    try {
      const response = await axios.post('https://e7b4-2401-4900-1c5f-2af0-1653-4ed4-7958-f236.ngrok-free.app/contacts', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      
      toast.success(' form successfully! Submited', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setformdata({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);

      toast.error('Failed to send the message. Please try again.', {
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
    <div>
      <ToastContainer />
      <div className='card bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex  justify-content-center align-items-center'>
            <div>
              <div className='w-100 h-100'>
                <h3>Contact Us</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='colo pt-5 pb-5' style={{ backgroundColor: ' #C9F9E2', color: '#fff' }}>
          <div className="container ctn">
            <div className="row">
              <div className="col-md-6 header" style={{ color: '#fff' }}>
                <h4 className='getin'>GET IN TOUCH</h4>
                <h4 className='weLove mt-3'>We would love to hear from you.</h4>
                <p className='textp mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <hr className="my-4" />
                <div>
                  <p><strong>Address:</strong><br />2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                  <p><strong>Email:</strong><br /><a href="mailto:tim.jennings@example.com" style={{ color: '#fff' }}>tim.jennings@example.com</a></p>
                  <p><strong>Contact:</strong><br />(480) 555-0103</p>
                </div>
              </div>
              <div className="col-md-6 headers">
                <h2 className='message'>Send us a message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={formdata.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={formdata.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" width="1350" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
