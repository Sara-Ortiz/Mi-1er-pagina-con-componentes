import React from 'react';
import '../components_style/footer.css'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <p>© 2025 KeyStore. All rigths reserved</p>
        <div className="links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacity Policity</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;