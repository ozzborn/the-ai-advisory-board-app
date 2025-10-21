import React from 'react';
import './App.css'; 
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
//import Home from './pages/Home'; 
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Submissions from './pages/Submissions';

function App() {
  return (
    <div className="App">
      <NavBar /> 

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/submissions" element={<Submissions />} /> {/* New Route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;