// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { auth } from './firebase'; // Confirmed path is './firebase' since firebase.js is in src/
// 💥 NEW: Import Sidebar from components and REMOVE NavBar 💥
import Sidebar from './components/Sidebar'; 

// Import your page components
import Login from './pages/Login'; 
import Dashboard from './pages/Dashboard'; 
import Submissions from './pages/Submissions'; 
import About from './pages/About'; 

// -----------------------------------------------------------------------------
// Component to protect routes
// -----------------------------------------------------------------------------
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = rest;

  if (loading) {
    return <div>Loading authentication state...</div>;
  }
  
  return user ? <Element /> : <Navigate to="/login" replace />;
};

// -----------------------------------------------------------------------------
// Main Application Component
// -----------------------------------------------------------------------------
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. CRITICAL: Handle Redirect Result to complete signInWithRedirect
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
        // 2. Set up Auth State Listener
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return unsubscribe;
      });
  }, []); 

  // If the user is logged in, show the full app layout (Sidebar + Content)
  const appLayout = user ? (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route 
            path="/dashboard" 
            element={<ProtectedRoute element={Dashboard} user={user} loading={loading} />} 
          />
          <Route 
            path="/submissions" 
            element={<ProtectedRoute element={Submissions} user={user} loading={loading} />} 
          />
          <Route path="/about" element={<About />} />
          {/* Note: /login is intentionally not shown when the user is logged in */}
        </Routes>
      </main>
    </div>
  ) : (
    // If the user is NOT logged in, only show the Login page
    <Routes>
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
