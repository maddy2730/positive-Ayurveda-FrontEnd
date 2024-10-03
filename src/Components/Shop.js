import React, { useState, useEffect } from "react";
import Footer from '../Container/footer/Footer';
import './Shop.css';
import './Blog.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import baseURL from './baseUrl'
// Images
import img1 from '../Container/Images/shopimg1.png';

export default function Shop({ addToCart }) {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState([]);

  const handleClick = (product) => {
    NotificationManager.success('Cart added successfully', 'Success', 1000);
    setActive(!active);
    addToCart(product);
  };

  // Fetch Categories
  useEffect(() => {
    fetch(`${baseURL}/categories`, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    })
      .then(response => response.json())
      .then(data => {
        const fetchedCategories = data.data.map(category => ({
          id: category.attributes.id,
          name: category.attributes.name,
        }));
        setCategories(fetchedCategories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Fetch Products when a category is selected
  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetch(`${baseURL}/items?category_id=${selectedCategoryId}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      })
        .then(response => response.json())
        .then(data => {
          const fetchedProducts = data.data.map(item => ({
            id: item.attributes.id,
            name: item.attributes.name,
            price: item.attributes.price,
            img: item.attributes.image.url,
          }));
          setProducts(fetchedProducts);
        })
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [selectedCategoryId]);

  return (
    <div>
      {/* Shop Header */}
      <div className='bg-dark text-white modify'>
        <div className='container w-100 h-100 d-flex justify-content-center'>
          <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
            <h3 className='rv text-center'>Shop</h3>
          </div>
        </div>
      </div>

      {/* Shop Body */}
      <div className="container-fluid et cf">
        <div className=" ">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product.id} className="col-lg-6 col-md-6 mt-3">
                      <div className="shopcard pt-5" style={{ backgroundColor: 'transparent', borderRadius: '15px' }} id="cards">
                        <img src={product.img} className="card-img-top three1" alt={product.name} />
                        <div className="card-body bherbal" id="cards">
                          <p className="card-title mt-1 text-center fs-2" style={{ color: '#306d51' }} id="cards">{product.name}</p>
                          <div className="d-flex justify-content-center align-items-baseline fs-4">
                            <p>{`$${product.price}`}</p>
                          </div>
                          <div className="d-flex justify-content-center" id="what">
                            <button
                              className="btn-lg text-success rounded-pill pww mb-2 pt-2 pb-2 pe-3 ps-3"
                              type="button"
                              style={{ backgroundColor: active ? "white" : "white", borderColor: '#306d51' }}
                              id="when"
                              onClick={() => handleClick(product)}
                            >
                              ADD TO CART
                            </button>
                            <NotificationContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products available for this category.</p>
                )}
              </div>
            </div>

            {/* Sidebar with Categories */}
            <div className="col-lg-4 mt-2 text-success shadow p-3 rounded brd">
              <div className="col-lg-12 mt-3 text-start" style={{ color: '#1E520C' }}>
                <h2><b>Categories</b></h2>
                {categories.length > 0 ? (
                  categories.map(category => (
                    <div
                      key={category.id}
                      style={{ display: 'flex', justifyContent: 'space-between', height: '40px', cursor: 'pointer' }}
                      onClick={() => setSelectedCategoryId(category.id)} // Update selected category on click
                    >
                      <h6 className="fs-5 m-3" style={{ color: '#1E520C' }}>{category.name}</h6>
                    </div>
                  ))
                ) : (
                  <p>Loading categories...</p>
                )}
              </div>

              {/* Other Sidebar Sections */}
              {/* Top Products */}
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

              {/* Tags */}
              <div className="col-lg-12 mt-2 text-start" style={{ color: '#1E520C' }}>
                <h3><b>Tags</b></h3>
                {['Products', 'Herbal', 'Trending', 'Ayurveda'].map((tag, index) => (
                  <p key={index} className="border border-success p-1 m-1">{tag}</p>
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
