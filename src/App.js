import React from 'react';
import './App.css';
import NavBar from './NavBar'; // New line added

function App() {
  return (
    <div className="App">
      <NavBar /> {/* The new navigation bar component is rendered here */}

      <main>
        {/* You can add a main content placeholder here */}
        <h1>Application Content Goes Here</h1>
      </main>
    </div>
  );
}

export default App;