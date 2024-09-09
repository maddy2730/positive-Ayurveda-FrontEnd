import React from 'react'
import Footer from '../Container/footer/Footer'
import { Link } from 'react-router-dom'
import Topimg from '../Container/Images/Rectangletop.png'
import './Blog.css'
import card1 from '../Container/Images/Rectangle01.png'
import card2 from '../Container/Images/Rectangle02.png'
import img1 from '../Container/Images/shopimg1.png';

export default function Blog() {
  return (
    <div>
            <div className='card bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex  justify-content-center align-items-center'>
         <div>
         <div className='w-100 h-100'>
            <h3 className='e text-center'>Blog</h3>
          </div>
          {/* <div className='d-flex edit'>
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link active" to="/blog">Blog</Link>
          </div> */}
         </div>
          </div>
         
        </div>


      </div>
      <div className='container-fluid et'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
              <div className='col-lg-6 col-lg  col-md-6 col-sm-12 mt-3'>
              <img src={card1}/>
              <div className='p-4 Ayurveda_med'>
              <p className='head mt-0'>Ayurveda Medicine</p>
              <p className='head1'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b> </p>
              <p className='date mt-2'>20 June, 2024</p>
              <hr />
              <p>
                <i class="fa-regular fa-heart me-2"></i>900
                <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
              </p>
            </div>
              
            </div>
            <div className='col-lg-6 col-lg col-md-6 col-sm-12 card-2 mt-3 '>
              <img src={card2}/>
              <div className='Ayurveda_med p-4'>
              <p className='head mt-0'>Ayurveda Medicine</p>
              <p className='head1'> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b></p>
              <p className='date mt-2'>20 June, 2024</p>
              <hr />
              <p>
                <i class="fa-regular fa-heart me-2"></i>900
                <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
              </p>
            </div>
              
            </div>
            <div className='col-lg-6 col-lg  col-md-6 col-sm-12 mt-3'>
              <img src={card1}/>
              <div className='p-4 Ayurveda_med'>
              <p className='head mt-0'>Ayurveda Medicine</p>
              <p className='head1'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b> </p>
              <p className='date mt-2'>20 June, 2024</p>
              <hr />
              <p>
                <i class="fa-regular fa-heart me-2"></i>900
                <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
              </p>
            </div>
              
            </div>
            <div className='col-lg-6 col-lg col-md-6 col-sm-12 card-2 mt-3'>
              <img src={card2}/>
              <div className='Ayurveda_med p-4'>
              <p className='head mt-0'>Ayurveda Medicine</p>
              <p className='head1'> <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</b></p>
              <p className='date mt-2'>20 June, 2024</p>
              <hr />
              <p>
                <i class="fa-regular fa-heart me-2"></i>900
                <i class="fa-solid fa-eye ms-2 me-2"></i> 830
                <i class="fa-solid fa-share-nodes me-2 ms-2"></i>share
              </p>
            </div>
              
            </div>
           
                

              </div>
            </div>
            <div className="col-lg-4 mt-2 text-success shadow p-3 mb-5 rounded brd">
              <form className="d-flex bg-white p-1 mt-3" style={{ border: '1px solid rgba(0,0,0,.125)', borderRadius: '20px', height: '50px' }}>
                <div className="search ms-auto" style={{ color: 'whitesmoke' }}>
                  <input className="form-control me-2" type="search" placeholder="" aria-label="" style={{ color: '#0FA958', borderRadius: '20px', backgroundColor: '#1E520C', width: '163px' }} />
                  <div className="d-flex" style={{ justifyContent: 'space-around', position: 'relative', top: '-30px' }}>
                    <p className="text-white">Search</p>
                    <span className="fa fa-search fs-5"></span>
                  </div>
                </div>
              </form>

              <div className="col-lg-12 mt-3 text-start" style={{ color: '#1E520C' }}>
                <h2><b>Categories</b></h2>
                {[
                  { title: 'Total Products', count: 4 },
                  { title: 'Total Products', count: 5 },
                  { title: 'Latest Products', count: 6 },
                  { title: 'New Arrivals', count: 2 },
                  { title: 'Recently added', count: 9 },
                  { title: 'Pure Ayurveda', count: 7 },
                ].map((category, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', height: '40px' }}>
                    <h6 className="fs-5 m-3" style={{ color: '#1E520C' }}>{category.title}</h6>
                    <button style={{ height: 'fit-content', marginTop: '12px', borderRadius: '8px', backgroundColor: '#1E520C', color: 'white', padding: '2px 5px' }}>{category.count}</button>
                  </div>
                ))}
              </div>

              <div className="mt-3" style={{ color: '#1E520C' }}>
                <h2><b>Top Products</b></h2>
                {[img1, img1, img1, img1].map((product, index) => (
                  <div key={index} className="d-flex pt-2">
                    <img src={product} alt="" style={{ width: 'auto', border: '1px solid #0FA958', borderRadius: '5px' }} />
                    <div className="ps-3 pt-2">
                      <h6>The Balance Hair Malt</h6>
                      <h6>Ut enim ad minim veniam, quis nostrud exercitation</h6>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-12 mt-2 text-start" style={{ color: '#1E520C' }}>
                <h3><b>Tags</b></h3>
                {[
                  ['Products', 'Herbal', 'Trending', 'Herbal'],
                  ['Ayurveda', 'Pure', 'Healthy', 'Studio'],
                  ['Ayurveda', 'Pure'],
                ].map((tagRow, index) => (
                  <div key={index} className="d-flex">
                    {tagRow.map((tag, tagIndex) => (
                      <p key={tagIndex} className="border border-success p-1 m-1">{tag}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  )
}
