import React, { useState } from "react";
import Footer from '../Container/footer/Footer';
import './Shop.css';
import './Blog.css';
import { Link } from 'react-router-dom';
import img1 from '../Container/Images/shopimg1.png';
import img2 from '../Container/Images/shop1.png';
import img3 from '../Container/Images/shop2.png';
import img4 from '../Container/Images/shop3.png';
import img5 from '../Container/Images/shop4.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export default function Shop({ addToCart }) {
  const products = [
    { id: 1, name: 'Himabhi Kesh oil', img: img2, price: 110 },
    { id: 2, name: 'Kesh Sakhti', img: img3, price: 120 },
    { id: 3, name: 'Himabhi Hair Oil', img: img4, price: 100 },
    { id: 4, name: 'Orthoraksha', img: img5, price: 90 },
  ];
  const [active, setActive] = useState(false);
  const handleClick = () => {
    NotificationManager.success('Cart added successfully', 'Success');
    setActive(!active);

  };

  return (
    <div>
      <div className='card bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex  justify-content-center align-items-center'>
            <div>
              <div className='w-100 h-100'>
                <h3 className='rv text-center'>Shop</h3>
              </div>
              <div className='d-flex edit'>
                <Link className="nav-link active" to="/">Home</Link>
                <Link className="nav-link active" to="/shop">Shop</Link>
              </div>
            </div>
          </div>

        </div>


      </div>

      <div className="container-fluid et">
        <div className="m-5">
          <div className="row">
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

            <div className="col-lg-8">
              <div className="row">
                {products.map((product) => (
                  <div key={product.id} className="col-lg-6 col-md-6 mt-3">
                    <div className="card pt-5" style={{ backgroundColor: 'transparent', borderRadius: '15px' }} id="cards">
                      <img src={product.img} className="card-img-top three1" alt={product.name} />
                      <div className="card-body bherbal" id="cards">
                        <p className="card-title mt-1 text-center fs-2" style={{ color: '#306d51' }} id="cards">{product.name}</p>
                        <p className="card-text text-center pt-2" style={{ color: '#306d51' }}>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </p>
                        <div className="d-flex justify-content-center align-items-baseline fs-4">
                          <del className="pe-2">$120</del>
                          <p>{`$${product.price}`}</p>
                        </div>
                        <div className="d-flex justify-content-center" id="what">
                        <button
        className="btn-lg text-success rounded-pill pww mb-2 pt-2 pb-2 pe-3 ps-3"
        type="button"
        style={{ backgroundColor: active ? "white" : "white", borderColor: '#306d51' }}
        id="when"
        onClick={() => { addToCart(product); handleClick(); }}
      >
        ADD TO CART
      </button>
      <NotificationContainer />
                        </div>
                      </div>
                      <i className="fa-regular fa-heart position-absolute top-0 end-0 p-4 fs-3"></i>
                      <i className="fa-solid fa-heart text-danger position-absolute top-0 end-0 fs-3 p-4" id="were"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
