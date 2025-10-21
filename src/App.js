import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'; // NEW Import
import { auth } from '../firebase'; // 👈 CHANGED PATH
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'; 

import Sidebar from './components/Sidebar'; 
import Login from './pages/Login'; // NEW Import
import Dashboard from './pages/Dashboard'; 
import Submissions from './pages/Submissions';
import About from './pages/About'; 

function App() {
  // Use the hook to get the user state and loading status
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading Application...</div>;
  }

  // Check if the user is NOT logged in
  if (!user) {
    // If not logged in, render only the Login component
    return <Login />;
  }

  // If logged in (user object exists), render the main application layout
  return (
    <div style={{ display: 'flex' }}>

      <Sidebar /> 

      <main style={{ marginLeft: '200px', flexGrow: 1 }}> 
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
