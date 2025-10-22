// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

// This component checks if the user is logged in before rendering the requested page.
const ProtectedRoute = ({ component: Component, user, loading }) => {
    // If auth status is still loading, render nothing or a loading message (handled in App.js usually)
    if (loading) {
        return null;
    }
    
    // If the user is logged in, render the target component (e.g., Dashboard, Submissions)
    if (user) {
        return <Component />;
    }
    
    // If the user is NOT logged in, redirect them to the login page
    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
