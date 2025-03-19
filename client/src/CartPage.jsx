import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/CartPage.css'; // Make sure to import your CSS file

function CartPage({ cartItems, setCartItems }) {
    const navigate = useNavigate();

    // Calculate the total price
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Function to handle buying an item
    const handleBuyNow = (item) => {
        navigate('/payment', { state: { items: [item] } }); // Pass item as an array for consistency
    };

    // Function to handle buying all items
    const handleBuyAll = () => {
        navigate('/payment', { state: { items: cartItems } });
    };

    // Function to handle quantity changes
    const handleQuantityChange = (itemId, delta) => {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === itemId) {
                    const newQuantity = item.quantity + delta;
                    return { ...item, quantity: Math.max(1, newQuantity) }; // Prevent quantity < 1
                }
                return item;
            });
        });
    };

    // Function to handle item removal
    const handleRemoveItem = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== itemId));
    };

    // Save cart items to local storage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.img} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h4>{item.title}</h4>
                                <p>Description: {item.description}</p>
                                <p>Price: ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</p>
                                <div className="cart-item-actions">
                                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                    <button className="buy-button" onClick={() => handleBuyNow(item)}>Buy Now</button>
                                    <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className="total">Total: ₹{total}</h3>
                    <button className="buy-all-button" onClick={handleBuyAll}>Buy All</button>
                </div>
            )}
        </div>
    );
}

export default CartPage;