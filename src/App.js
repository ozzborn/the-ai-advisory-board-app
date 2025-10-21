import React from 'react';
import './App.css'; 
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom'; // NEW IMPORT
import Home from './pages/Home'; // Will create this next

function App() {
  return (
    <div className="App">
      <NavBar /> 

      <main>
        {/* DEFINE ROUTES HERE */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here, e.g., <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;