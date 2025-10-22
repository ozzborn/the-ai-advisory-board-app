import React from 'react';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase'; // Ensure your firebase config is exported correctly

// --- Style Definitions ---
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

const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Darker blue on hover
};

function Login() {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      // Use signInWithRedirect for a reliable sign-in experience
      await signInWithRedirect(auth, provider);
      // The application will refresh, and App.js will handle the user state.
    } catch (error) {
      console.error("Error during sign in:", error);
      // Optional: Display an error message to the user here
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
          // You could add onMouseOver/onMouseOut handlers here for hover effects
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
