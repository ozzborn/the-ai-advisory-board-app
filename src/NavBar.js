import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  // Basic structure for the navigation bar
  return (
    <nav style={{ padding: '15px', backgroundColor: '#282c34', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo">The AI Advisory Board</div>
      <div className="nav-links">
        {/* CORRECTED: Using <Link> component instead of <a> tag */}
        <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      </div>
    </nav>
  );
}

export default NavBar;