import React from 'react';
import Navbar from './Navbar';
import './Css/ProductPage.css';

function ProductPage({ user, onLogout }) {
    const handleAddToCart = () => {
        
        alert('Added to cart!');
    };

    return (
        <div>
            <Navbar user={user} onLogout={onLogout} />
            
            <section id="new">
                
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <br />
                <p>Save more with coupons & up to 70% off!</p>
                <br />
                <button>Shop Now</button>
            </section>

            <section id="featurebox" className="section1">
                <div className="feature">
                    <img src="img/f1.png" alt="Free Shipping" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="feature">
                    <img src="img/f2.png" alt="Online Order" />
                    <h6>Online Order</h6>
                </div>
                <div className="feature">
                    <img src="img/f3.png" alt="Save Money" />
                    <h6>Save Money</h6>
                </div>
                <div className="feature">
                    <img src="img/f4.png" alt="Promotions" />
                    <h6>Promotions</h6>
                </div>
                <div className="feature">
                    <img src="img/f5.png" alt="Happy Sell" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="feature">
                    <img src="img/f6.png" alt="24/7 Support" />
                    <h6>24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="img/products/f1.jpg" alt="Cartoon Astronaut T-Shirts" />
                        <div className="description">
                            <span>Adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div className="star">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹499</h4>
                        </div>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    {/* Repeat for other products */}
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% Off</span> - All T-Shirts & Accessories</h2>
                <button className="normal">Explore More</button>
            </section>

            <section id="newsletter" className="section1 section-m1">
                <div className="newstext">
                    <h4>Subscribe For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                    
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email address" />
                    <button className="normal">Subscribe</button>
                </div>
            </section>

            <footer className="section1">
                <div className="col">
                    
                    <h4>Contact</h4>
                    <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Francisco</p>
                    <p><strong>Phone: </strong> +01 2222 365 / (+91) 012345 6789</p>
                    <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>
                <div className="col-install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="img/app3.png" alt="App Store" />
                        <img src="img/app4.png" alt="Google Play" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="img/pay.png" className="pay" alt="Payment Gateways" />
                </div>
            </footer>
        </div>
    );
}

export default ProductPage;
