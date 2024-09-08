// ProductPage.js
import React from 'react';
import Navbar from './Navbar';
import './Css/ProductPage.css';
import d1 from './image/dress11.jpeg';
import d2 from './image/dress22.jpg';
import d3 from './image/dress33.webp';
import d4 from './image/dress4.webp';
import d5 from './image/dress5.jpeg';
import d6 from './image/dress6.jpg';
import pr1 from './image/pd11.jpg';
import pr2 from './image/pd223.jpg';
import pr3 from './image/pd3.jpg';
import pr4 from './image/pd44.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ProductPage({ user, onLogout }) {
    const handleAddToCart = (productTitle) => {
        alert(`${productTitle} has been added to cart!`);
    };

    const products = [
        { id: 1, img: d1, title: "Hand Made T-Shirts", price: 499 },
        { id: 2, img: d2, title: "Hand Made T-Shirts", price: 499 },
        { id: 3, img: d3, title: "Hand Made T-Shirts", price: 699 },
        { id: 4, img: d4, title: "Hand Made T-Shirts", price: 999 },
        { id: 5, img: d5, title: "Hand Made T-Shirts", price: 599 },
        { id: 6, img: d6, title: "Hand Made T-Shirts", price: 699 },
    ];
    const drawings = [
        { id: 1, img: pr1, title: "Pencil Drawing", price: 99 },
        { id: 2, img: pr2, title: "Hand Made Jewellery", price: 299 },
        { id: 3, img: pr3, title: "Hand Made Jewellery", price: 199 },
        { id: 4, img: pr4, title: "Hand Made Bracelet", price: 99 },
        { id: 5, img: d5, title: "Hand Made T-Shirts", price: 599 },
        { id: 6, img: d6, title: "Hand Made T-Shirts", price: 699 },
    ];

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
                    
                    <h6>Free Shipping</h6>
                </div>
                <div className="feature">
                
                    <h6>Online Order</h6>
                </div>
                <div className="feature">
        
                    <h6>Save Money</h6>
                </div>
                <div className="feature">
        
                    <h6>Promotions</h6>
                </div>
                <div className="feature">
                    
                    <h6>Happy Sell</h6>
                </div>
                <div className="feature">
                
                    <h6>24/7 Support</h6>
                </div>
            </section>

            <section id="product1" className="section1">
                <h2>Featured Products</h2>
                <p>Customize Dress for Men & Women</p>
                <div className="pro-container">
                    {products.map(product => (
                        <div key={product.id} className="pro">
                            <img src={product.img} alt={product.title} />
                            <div className="description">
                                <span>Param-Sanskrit</span>
                                <h5>{product.title}</h5>
                                <div className="star">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>

                                <h4>₹{product.price}</h4>
                            </div>
                            <button className="cart-button" onClick={() => handleAddToCart(product.title)}>
    <FontAwesomeIcon icon={faCartPlus} />
  </button>
                        </div>
                    ))}
                </div>
            </section>

            <section id="product1" className="section1">
    <h2>New Arrived Products</h2>
    <p>Handmade products & Drawings</p>
    <div className="pro-container">
        {drawings.map(drawing => (
            <div key={drawing.id} className="pro">
                <img src={drawing.img} alt={drawing.title} />
                <div className="description">
                    <span>Param-Sanskrit</span>
                    <h5>{drawing.title}</h5>
                    <div className="star">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h4>₹{drawing.price}</h4>
                </div>
                <button className="cart-button" onClick={() => handleAddToCart(drawing.title)}>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        ))}
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
