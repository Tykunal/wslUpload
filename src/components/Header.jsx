import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">SacredSteps</div>
      
      <nav className={isMobileMenuOpen ? "nav active" : "nav"}>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/places'}>Places</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </nav>

      <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Header;
