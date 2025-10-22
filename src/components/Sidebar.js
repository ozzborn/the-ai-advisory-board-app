import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth object
import { signOut } from 'firebase/auth'; // Import the signOut function

// --- Style Definitions ---
// Define all styles outside the component so they can be referenced inside.
const sidebarStyle = {
  width: '250px',
  height: '100vh',
  backgroundColor: '#343a40', // Dark background
  color: 'white',
  padding: '20px',
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  position: 'sticky', // Makes it stick to the side
  top: 0,
  flexShrink: 0, // Prevents sidebar from being compressed
};

const menuTitleStyle = {
  fontSize: '1.5em',
  marginBottom: '30px',
  textAlign: 'center',
  borderBottom: '1px solid #495057',
  paddingBottom: '10px',
};

const linkStyle = {
  display: 'block',
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  fontSize: '1.1em',
  transition: 'background-color 0.2s',
  borderRadius: '4px',
};

const signOutButtonStyle = {
  width: '100%',
  marginTop: '30px',
  padding: '10px',
  backgroundColor: '#dc3545', // Red for Sign Out
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1em',
};

function Sidebar() {
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // App.js handles the user state change and redirects to /login
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
  
        {/* Link to the Admin page - CORRECTED */}
        <Link to="/admin" style={linkStyle}>
            Admin Config
        </Link>
      </nav> // <-- END OF NAVIGATION BLOCK
      
      {/* Sign Out Button */}
      <button 
        onClick={handleSignOut} 
        style={signOutButtonStyle}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Sidebar;
