import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar'; // REMOVED the old NavBar
import Sidebar from './components/Sidebar'; // NEW Import

// Import all your page components
import Dashboard from './pages/Dashboard'; 
import Submissions from './pages/Submissions';
import About from './pages/About'; 

function App() {
  return (
    // The main container uses Flexbox to align the Sidebar and the content area
    <div style={{ display: 'flex' }}>
      
      <Sidebar /> {/* The fixed vertical navigation bar */}

      {/* The main content area, offset by the sidebar width (200px) */}
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