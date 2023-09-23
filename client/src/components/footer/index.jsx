import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            dolor vehicula, tristique est sit amet, dapibus eros.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +1 (123) 456-7890</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/searchFlight">Flights</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input email" placeholder="Your email address" />
            <textarea
              name="message"
              className="text-input contact-input"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Flight Booking. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
