import React from 'react';
import './App.css'; 
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar /> 

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* New Route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;