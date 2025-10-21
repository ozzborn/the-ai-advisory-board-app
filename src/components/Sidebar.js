// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
// 💥 CRITICAL: Import auth and the signOut function 💥
import { auth } from '../firebase'; 
import { signOut } from 'firebase/auth'; 

// ... (your existing styles and constants)

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
