import React from 'react';

const CheckoutPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>Paradise Nursery Checkout</h1>
      <div style={{
        padding: '20px',
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        maxWidth: '600px'
      }}>
        <h2 style={{ color: '#666', marginBottom: '15px' }}>Coming Soon!</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We're currently working on implementing our secure payment system. 
          This feature will be available soon to make your shopping experience even better!
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
