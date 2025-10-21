import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#343a40', // Dark background for contrast
  color: 'white',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  position: 'sticky', // Makes it stick to the side as you scroll content
  top: 0
};

const menuTitleStyle = {
  fontSize: '1.5em',
  marginBottom: '30px',
  textAlign: 'center',
  borderBottom: '1px solid #495057',
  paddingBottom: '10px'
};

const linkStyle = {
  display: 'block',
  color: 'white',
  textDecoration: 'none',
  padding: '10px 0',
  fontSize: '1.1em',
  transition: 'background-color 0.2s',
  borderRadius: '4px'
};

// You can use a state hook (e.g., useState) to manage which link is active,
// but for a clean start, we'll keep it simple.

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={menuTitleStyle}>Dashboard Menu</div>
      <nav>
        {/* Link to the Dashboard page */}
        <Link to="/dashboard" style={linkStyle}>
          Dashboard
        </Link>
        
        {/* Link to the Submissions page */}
        <Link to="/submissions" style={linkStyle}>
          Submissions
        </Link>
        
        {/* Link to the About page */}
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </nav>
      {/* Optional: Add a Sign Out Button here */}
    </div>
  );
}

export default Sidebar;
