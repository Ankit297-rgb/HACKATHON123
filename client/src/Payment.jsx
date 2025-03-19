import React from 'react';
import { useLocation } from 'react-router-dom';
import './Css/Payment.css'; // Make sure to import the CSS file

function Payment() {
    const { state } = useLocation();
    const items = state?.items || []; // Use optional chaining to avoid errors

    if (items.length === 0) {
        return <div className="no-items">No items found for payment.</div>; // Handle no items case
    }

    const handlePayment = (method) => {
        alert(`Redirecting to ${method}`);
        // Implement redirection logic here (e.g., to a payment gateway)
    };

    return (
        <div className="payment-container">
            <h2>Payment Details</h2>
            {items.map(item => (
                <div key={item.id} className="payment-item">
                    <h3>Payment for {item.title}</h3>
                    <img src={item.img} alt={item.title} className="payment-item-image" />
                    <p>Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                </div>
            ))}
            <h3>Select Payment Method</h3>
            <div className="payment-options">
                <button className="payment-button" onClick={() => handlePayment("Google Pay")}>Google Pay</button>
                <button className="payment-button" onClick={() => handlePayment("Phone Pay")}>Phone Pay</button>
                <button className="payment-button" onClick={() => handlePayment("Paytm")}>Paytm</button>
                <button className="payment-button" onClick={() => handlePayment("Cash on Delivery")}>Cash on Delivery</button>
            </div>
        </div>
    );
}

export default Payment;