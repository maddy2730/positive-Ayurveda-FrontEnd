import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function Cart({ cart, removeFromCart, addToCart, removeFromCartsubtract }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingCharges = 10; // Updated to match screenshot
  const gstRate = 0.15; // Updated to match screenshot GST of 15%
  const totalWithGST = calculateTotal() + shippingCharges + (calculateTotal() * gstRate);

  return (
    <div className="container-fluid" style={{ backgroundColor: '#E0F8E2', padding: '20px' }}>
      <table className="table table-bordered" style={{ backgroundColor: '#E0F8E2' }}>
        <thead style={{ backgroundColor: '#306D51', color: '#fff' }}>
          <tr className="text-center">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
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
                  <input type="number" value={item.quantity} min="1" readOnly style={{ width: '40px', border: '1px solid #306D51', backgroundColor: '#E0F8E2', textAlign: 'center' }} />
                  <button className="pa-add" onClick={() => addToCart(item)}>+</button>
                </div>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="row mt-4">
        <div className="col-12 d-flex justify-content-end">
          <table className="table table-borderless" style={{ width: '40%' }}>
            <tbody>
              <tr>
                <td><b>Sub Total:</b></td>
                <td>${calculateTotal()}</td>
              </tr>
              <tr>
                <td><b>Shipping Charges:</b></td>
                <td>${shippingCharges}</td>
              </tr>
              <tr>
                <td><b>GST (15%):</b></td>
                <td>${(calculateTotal() * gstRate).toFixed(2)}</td>
              </tr>
              <tr>
                <td><b>Grand Total:</b></td>
                <td><b>${totalWithGST.toFixed(2)}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <Link to="/shop" className="btn btn-dark" style={{ backgroundColor: '#306D51', color: '#fff', padding: '10px 20px' }}>Continue Shopping</Link>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <button className="btn btn-dark" style={{ backgroundColor: '#306D51', color: '#fff', padding: '10px 20px' }}>Update Cart</button>
        </div>
      </div>
    </div>
  );
}
