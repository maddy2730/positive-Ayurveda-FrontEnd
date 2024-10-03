import React from 'react'
import Footer from '../Container/footer/Footer'
import './Aboutus.css'
import { Link } from 'react-router-dom'
import firstimage from '../Container/Images/Aboutpage1.png'
import secondimage from '../Container/Images/aboutusimg2.png'
import thirdimage from '../Container/Images/aboutus3part1.png'
import forthimage from '../Container/Images/aboutus3part2.png'
import fifthimage from '../Container/Images/aboutus3part3.png'
import sixthimage from '../Container/Images/aboutus3part4.png'
import siventhimage from '../Container/Images/Rectangle101.png'
import eigthimage from '../Container/Images/Rectangle102.png'
import ninethimage from '../Container/Images/Rectangle103.png'
import tenthimage from '../Container/Images/Rectangle104.png'


export default function Aboutus() {
  return (
    <div>
      <div className='card bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex  justify-content-center align-items-center'>
            <div>
              <div className='w-100 h-100'>
                <h3>AboutUs</h3>
              </div>
              {/* <div className='d-flex edit'>
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link active" to="/aboutus">AboutUs</Link>
              </div> */}
            </div>
          </div>

        </div>


      </div>
      <div className='container-fluid err cf'>
        <div className='container contr'>
          <div className='row'>

            <div className='col-lg-6 col-md-12 col-sm-12 '>
              <div className='imgs'>
              <img src={firstimage} className='About-img' />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <img src={secondimage} className='img ms ps-3 pe-2' />
              <div className='leftclass'>
                <h2 className='divhead2 mb-4  ms ps-3 pe-2'><b>WE ARE HERE WITH 25 YEARS OF EXPERIENCE</b></h2>

              </div>
              <p className='peditt   ms ps-3 pe-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='peditt  mt-1  ms ps-3 pe-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='peditt  mt-1  ms ps-3 pe-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            </div>

          </div>
        </div>
      </div>

      <div className='container-fluid rungparent'>
        <div className='container'>
          <div className='row text-center rtx'>
            <div>
            <div className='col-lg-12'>
              <img src={secondimage}/>
              <h4 className='runghead'><b>Benefit From Choosing The Best </b></h4>
              <h5 className='runghead'>Our Recent Achievments</h5>
            </div>
            </div>
        
          </div>
          <div className='row text-center onerows'>
            <div className='col-lg-3 col-md-6 col-sm-12 rung p-4 col-lgs'>
              <img src={thirdimage}/>
              <h2>25</h2>
              <p>Years Experience</p>
              
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 rung p-4 col-lgs'>
              <img src={forthimage}/>
              <h2>50 k+</h2>
              <p>Years Experience</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 rung p-4 col-lgs'>
              <img src={fifthimage}/>
              <h2>800 +</h2>
              <p>Products</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 rung p-4 col-lgs'>
              <img src={sixthimage}/>
              <h2>100 %</h2>
              <p>Product Purity</p>
            
          </div>
          </div>
        </div>
      </div>

      <div className='container-fluid rww'>
        <div className='container'> 
          <div className='firstrow text-center mb-5'>
            <img src={secondimage}/>
            <h2 className='fontsize'><b>Our Experts</b></h2>

          </div>
          <div className='row text-center'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <img src={siventhimage} className='img w-100'/>
              <h4><b>Jane Cooper</b></h4>
              <p>Team Leader</p>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <img src={eigthimage} className='img w-100'/>
              <h4><b>Jenny Wilson</b></h4>
              <p>Farmer</p>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <img src={ninethimage} className='img w-100'/>
              <h4><b>Devon Lane</b></h4>
              <p>Manager</p>

            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <img src={tenthimage} className='img w-100'/>
              <h4><b>Albert Flores</b></h4>
              <p>CEO</p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
