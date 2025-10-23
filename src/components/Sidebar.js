// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for consistent styling
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

// --- Styling Definitions ---
const sidebarStyle = {
    width: '250px',
    backgroundColor: '#343a40', // Dark background
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
};

const menuTitleStyle = {
    fontSize: '1.4em',
    marginBottom: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #495057',
    paddingBottom: '15px',
};

const linkStyle = {
    display: 'block',
    padding: '12px 15px',
    marginBottom: '5px',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
};

// Add hover effect for better UX
const navHoverStyle = {
    backgroundColor: '#495057', 
};

const signOutButtonStyle = {
    backgroundColor: '#dc3545', // Red for Sign Out
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: 'auto', // Pushes the button to the bottom
    fontSize: '1em',
};

// --- Component Definition ---

function Sidebar() {
    const handleSignOut = () => {
        signOut(auth).catch((error) => {
            console.error("Sign Out Error:", error);
        });
    };

    return (
        <div style={sidebarStyle}>
            <div style={menuTitleStyle}>Dashboard Menu</div>
            <nav>
                {/* Dashboard */}
                <Link to="/dashboard" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = navHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>
                    Dashboard
                </Link>
                
                {/* Submissions */}
                <Link to="/submissions" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = navHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>
                    Submissions
                </Link>
                
                {/* About */}
                <Link to="/about" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = navHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>
                    About
                </Link>
                
                {/* Admin Config - NEW LINK */}
                <Link to="/admin" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = navHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>
                    Admin Config
                </Link>
            </nav>
            
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
