import React from 'react';
import { useSelector } from 'react-redux';

const DummyCheckout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => {
    return sum + (parseFloat(item.cost.replace('$', '')) * item.quantity);
  }, 0).toFixed(2);

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2>Checkout (Coming Soon)</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <h3>Order Summary</h3>
        <p>Total Amount: ${total}</p>
      </div>
      
      <form style={{marginTop: '20px'}}>
        <h3>Shipping Information</h3>
        <div style={{marginBottom: '15px'}}>
          <label>Full Name:</label>
          <input type="text" disabled style={{
            width: '100%',
            padding: '8px',
            marginTop: '5px'
          }} />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Address:</label>
          <textarea disabled style={{
            width: '100%',
            padding: '8px',
            marginTop: '5px'
          }} />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Payment Method:</label>
          <select disabled style={{
            width: '100%',
            padding: '8px',
            marginTop: '5px'
          }}>
            <option>Credit Card</option>
            <option>PayPal</option>
          </select>
        </div>
        <button disabled style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'not-allowed',
          opacity: '0.7'
        }}>
          Complete Purchase
        </button>
        <p style={{
          color: '#666',
          marginTop: '15px',
          fontStyle: 'italic'
        }}>
          This is a demo checkout page. Payment processing and order fulfillment will be implemented in an upcoming update.
        </p>
      </form>
    </div>
  );
};

export default DummyCheckout;
