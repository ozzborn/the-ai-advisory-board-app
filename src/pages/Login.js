// src/pages/Login.js

import React from 'react';
// 💥 CRITICAL FIX: Changed from signInWithRedirect to signInWithPopup 
// to avoid the "missing initial state" error on redirect.
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; 
import { auth } from '../firebase'; // Import the initialized auth object

// --- Style Definitions ---
// Note: 'buttonHoverStyle' has been removed to fix the 'no-unused-vars' build error.
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
};

const cardStyle = {
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
};


function Login() {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      // Uses pop-up sign-in, which avoids the redirect state corruption issue
      await signInWithPopup(auth, provider); 
      // App.js's onAuthStateChanged listener will automatically handle the user login
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>AI Advisory Board Access</h1>
        <p>Sign in to view the private dashboard.</p>
        
        {/* Sign In Button */}
        <button 
          onClick={handleSignIn} 
          style={buttonStyle}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
