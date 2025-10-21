// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { auth } from './firebase'; 

// Import Sidebar from the components folder
import Sidebar from './components/Sidebar'; 

// Import your page components (Paths are correct because App.js is in src/ and pages is in src/pages/)
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard'; 
import Submissions from './pages/Submissions'; 
import About from './pages/About'; 

// -----------------------------------------------------------------------------
// Component to protect routes (Redirects unauthenticated users to Login)
// -----------------------------------------------------------------------------
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = rest;

  if (loading) {
    // Show a loading state while Firebase checks authentication
    return <div style={{padding: '20px'}}>Loading authentication state...</div>; 
  }
  
  // If user is logged in, show the requested Element; otherwise, redirect to /login
  return user ? <Element /> : <Navigate to="/login" replace />;
};

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. CRITICAL: Handle Redirect Result to complete signInWithRedirect.
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          console.log("Redirect sign-in successful:", result.user.email);
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Error during redirect sign-in:", error);
      })
      .finally(() => {
        // 2. Set up Auth State Listener (runs after redirect check)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false); // Stop loading once the initial state is set
        });

        // Cleanup subscription on unmount
        return unsubscribe;
      });
  }, []); 

  // If the app is still loading the auth state, display a loading screen
  if (loading) {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            fontSize: '1.2em'
        }}>
            Initializing Application...
        </div>
    );
  }

  // Define the layout based on authentication status
  const appLayout = user ? (
    // AUTHENTICATED LAYOUT: Sidebar + Protected Content
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          {/* Default authenticated route */}
          <Route path="/" element={<Navigate to="/dashboard" />} /> 
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute element={Dashboard} user={user} loading={loading} />} 
          />
          <Route 
            path="/submissions" 
            element={<ProtectedRoute element={Submissions} user={user} loading={loading} />} 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  ) : (
    // UNAUTHENTICATED LAYOUT: Only the Login page
    <Routes>
      {/* All paths redirect to Login when unauthenticated */}
      <Route path="*" element={<Login />} />
    </Routes>
  );

  return (
    <Router>
      {appLayout}
    </Router>
  );
}

export default App;
