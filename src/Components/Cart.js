import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Cart({ cart, removeFromCart, addToCart, removeFromCartsubtract }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#C9F9E2', padding: '20px' }}>
      <table className="table table-bordered" style={{ backgroundColor: '#C9F9E2' }}>
        <thead style={{ backgroundColor: '#306D51', color: '#C9F9E2' }}>
          <tr className="text-center">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="text-center" style={{ borderBottom: '1px solid #306D51' }}>
              <td>
                <img src={item.img} alt="Product" className="cardimd" style={{ height: '76px', width: 'auto' }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <div className="pa-cart-quantity">
                  <button className="pa-sub" onClick={() => removeFromCartsubtract(item.id)}>-</button>
                  <input type="number" value={item.quantity} min="1" readOnly style={{ width: '40px', border: '1px solid #306D51', backgroundColor: '#c9f9e2', textAlign: 'center' }} />
                  <button className="pa-add" onClick={() => addToCart(item)}>+</button>
                </div>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button className="pa-delete" onClick={() => removeFromCart(index)}>
                  <FaTrash color="#306D51" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-lg-12 d-flex justify-content-end">
          <h5><b>Sub Total:</b></h5> <h5>${calculateTotal()}</h5>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-lg-8 d-flex justify-content-start">
          <Link to="/shop" className="pa-btn" style={{ backgroundColor: '#306D51', color: '#fff', padding: '10px 20px', textDecoration: 'none' }}>Continue Shopping</Link>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px', borderTop: '1px solid #306D51', paddingTop: '20px' }}>
        <div className="col-lg-12 d-flex justify-content-end">
          <h5><b>Shipping charges:</b></h5>  <h5>$20</h5>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-lg-12 d-flex justify-content-end">
          <h5><b>GST:</b></h5> <h5>18%</h5>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-lg-12 d-flex justify-content-end">
          <h5><b>Grand total:</b></h5> <h5>${calculateTotal() + 20}</h5>
        </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }}>
        <div className="col-lg-12 d-flex justify-content-center">
          <a href="checkout.html" className="pa-btn" style={{ backgroundColor: '#306D51', color: '#fff', padding: '10px 20px', textDecoration: 'none' }}>Proceed to checkout</a>
        </div>
      </div>
    </div>
  );
}
