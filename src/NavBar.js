import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  // Basic structure for the navigation bar
  return (
    <nav style={{ padding: '15px', backgroundColor: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo">The AI Advisory Board</div>
      <div className="nav-links">
        <a href="#home" style={{ color: 'white', margin: '0 10px' }}>Home</a>
        <a href="#about" style={{ color: 'white', margin: '0 10px' }}>About</a>
      </div>
    </nav>
  );
}

export default NavBar;