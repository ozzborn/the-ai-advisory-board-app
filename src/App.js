// src/App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is included
import { auth } from './firebase'; 
import { onAuthStateChanged } from 'firebase/auth';

// Component Imports
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Submissions from './pages/Submissions';
import About from './pages/About'; 
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute'; // Assuming this component exists

// Styles
const appContainerStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa' // Light background color for the main content area
};

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Firebase Auth listener to track user login status
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    // While Firebase is checking the auth status
    if (loading) {
        return <div style={{ padding: '50px', fontSize: '1.5em', textAlign: 'center' }}>Loading authentication status...</div>;
    }

    // Define the application layout based on authentication status
    const appLayout = user ? (
        // AUTHENTICATED LAYOUT: Sidebar + Protected Content
        <div style={appContainerStyle}>
            <Sidebar />
            <main style={{ flexGrow: 1, padding: '20px' }}>
                <Routes>
                    {/* Default authenticated route: Redirects to Dashboard */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    
                    {/* Protected Routes using the correct component={Component} syntax */}
                    <Route 
                        path="/dashboard" 
                        element={<ProtectedRoute component={Dashboard} user={user} loading={loading} />} 
                    />
                    <Route 
                        path="/submissions" 
                        element={<ProtectedRoute component={Submissions} user={user} loading={loading} />} 
                    />
                    
                    {/* Publicly accessible route within the authenticated layout */}
                    <Route path="/about" element={<About />} />
                    
                    {/* Catch-all for authenticated user: Redirect to Dashboard */}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </main>
        </div>
    ) : (
        // UNAUTHENTICATED LAYOUT: Only the Login page
        <Routes>
            path="/admin"
            <Route path="*" element={<Login />} />
        </Routes>
    );

    return (
        // The outer Router component is correctly placed in src/index.js,
        // so we just return the layout here.
        <>
            {appLayout}
        </>
    );
}

export default App;
