import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Import icons


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Restaurant Info */}
        <div className="footer-section">
          <h2 className="footer-logo">Reddy's Lucious</h2>
          <p>Experience the taste of authentic flavors, made with love and delivered fresh.</p>
        </div>

        {/* Operating Hours */}
        <div className="footer-section">
          <h3>Operating Hours</h3>
          <p>🕒 Monday - Friday: 10 AM - 11 PM</p>
          <p>🕒 Saturday - Sunday: 9 AM - 12 AM</p>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <p>📞 Hotline: +91 98765 43210</p>
          <p>📧 Email: support@reddysrestro.com</p>
          <p>💬 Live Chat Available 24/7</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected with us on social media for updates & offers.</p>
          <div className="social-icons">
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="#"><Twitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        © 2025 Reddy's Lucious. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
