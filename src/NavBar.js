import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  
  // ...
  return (
    <nav style={{ /* ...styles... */ }}>
      <div className="logo">The AI Advisory Board</div>
      <div className="nav-links">
        <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/submissions" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Submissions</Link> {/* New Link */}
        <Link to="/about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      </div>
    </nav>
  );
}


export default NavBar;