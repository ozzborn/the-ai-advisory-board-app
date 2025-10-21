import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling

const sidebarStyle = {
  width: '200px',
  height: '100vh', // Full height
  backgroundColor: '#2c3e50', // Darker blue/grey for sidebar
  paddingTop: '20px',
  color: 'white',
  position: 'fixed' // Fix it to the side
};

const linkStyle = {
  display: 'block',
  padding: '10px 20px',
  textDecoration: 'none',
  color: 'white',
  marginBottom: '5px'
};

// Style for the currently active link
const activeStyle = {
  backgroundColor: '#3498db', // Light blue highlight
  fontWeight: 'bold',
  borderRadius: '4px'
};

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Dashboard Menu</h3>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
        end // 'end' ensures it only matches the exact path "/"
      >
        Dashboard
      </NavLink>
      <NavLink 
        to="/submissions" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
      >
        Submissions
      </NavLink>
      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}
      >
        About
      </NavLink>
    </div>
  );
}

export default Sidebar;