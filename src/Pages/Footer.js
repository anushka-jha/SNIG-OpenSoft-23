import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-email">
        <h3>Subscribe to our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-panels">
        <div className="panel">
          <h3>Panel 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="panel">
          <h3>Panel 2</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="panel">
          <h3>Panel 3</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
