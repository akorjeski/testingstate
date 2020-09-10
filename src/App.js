import React, { useState } from 'react';
import './App.css';

function App() {
  const [fish, setFish] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => setFish(fish + 1)}>
         {fish} 
      </button>
      </header>
    </div>
  );
}

export default App;
