import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signOut } from 'firebase/auth'; 

// 💥 CRITICAL: ENSURE THESE STYLE OBJECTS ARE DEFINED HERE 💥
const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#343a40', 
  color: 'white',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  position: 'sticky', 
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

function Sidebar() {
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // The onAuthStateChanged listener in App.js will handle the redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div style={sidebarStyle}>
      {/* ... (Menu content) ... */}
      <nav>
        {/* ... (Your existing links) ... */}
      </nav>
      
      {/* Sign Out Button */}
      <button 
        onClick={handleSignOut} 
        style={{
          // Apply some simple button styles here
          width: '100%', 
          marginTop: '30px',
          padding: '10px',
          backgroundColor: '#dc3545', // Red for Sign Out
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
