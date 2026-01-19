// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>DEVV_EL</h2>
          <p>
            Premium fashion for modern lifestyles.  
            Designed with elegance and comfort in mind.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Shipping</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to get special offers and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DEVV_EL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
