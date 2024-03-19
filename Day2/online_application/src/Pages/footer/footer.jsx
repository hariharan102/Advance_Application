import React from 'react';
import '../footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 Copyrights by S-CARE. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/Privacy">Privacy Policy</a>
          <a href="/Terms">Terms and Conditions</a>
          <a href="/faq">FAQs</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;