import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import qrCode from '../assets/qr code.png'; 
// import googlePlay from '../assets/googleplay.png';
import appStore from '../assets/appstore.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="footer-input-group">
                        <input type="email" placeholder="Enter your email" />
                        <button>&#10148;</button>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Support</h3>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-BBBBB-9999</p>
                </div>

                <div className="footer-column">
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>

                <div className="footer-column">
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                <div className="footer-column">
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div className="footer-apps">
                        <img src={qrCode} alt="QR Code" className="qr-img" />
                        <div className="app-links">
                            {/* <img src={googlePlay} alt="Google Play" /> */}
                            <img src={appStore} alt="App Store" />
                        </div>
                    </div>
                    <div className="footer-social">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <p className="footer-bottom">© Copyright Rimel 2022. All right reserved</p>
        </footer>
    );
};

export default Footer;
