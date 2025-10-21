// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { auth } from '../firebase';

// Import your page components
import Login from './Login'; // The Login page with the sign-in button
import Dashboard from './Dashboard'; // The main secured content
import Submissions from './Submissions'; // An example secured page
import About from './About'; // A simple public page
import Sidebar from '../components/Sidebar';

// -----------------------------------------------------------------------------
// Component to protect routes (if user is not authenticated, redirect to Login)
// -----------------------------------------------------------------------------
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = rest;

  if (loading) {
    return <div>Loading authentication state...</div>; // Show a loading state
  }
  
  // If user is logged in, show the requested element
  return user ? <Element /> : <Navigate to="/login" replace />;
};

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. **Handle Redirect Result First**
    // This is CRITICAL for signInWithRedirect to complete the sign-in process
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          // If a user was successfully signed in via redirect, result.user will exist
          console.log("Redirect sign-in successful:", result.user.email);
          setUser(result.user);
        }
      })
      .catch((error) => {
        // Handle any errors from the redirect process
        console.error("Error during redirect sign-in:", error);
      })
      .finally(() => {
        // 2. **Set up Auth State Listener**
        // This listener will update the user state on every sign-in/sign-out
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });

        // Cleanup subscription on unmount
        return unsubscribe;
      });
  }, []); // Run only once on mount

  return (
    <Router>
      <div className="App">
        {/* The NavBar component would typically be here, 
            and it can conditionally show "Sign Out" or other links based on the 'user' state */}
        <SideBar user={user} />
        
        <div style={{ padding: '20px' }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<About />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            {/* Private/Protected Routes */}
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute element={Dashboard} user={user} loading={loading} />} 
            />
            <Route 
              path="/submissions" 
              element={<ProtectedRoute element={Submissions} user={user} loading={loading} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
