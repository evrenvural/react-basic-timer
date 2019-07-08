import React from 'react';
import './App.css';
import Header from "./components/Header";
import Timer from "./components/Timer/Timer.js";

function App() {
  return (
    <div className="App">
      <Header title = "React Timer" />
      <Timer />
    </div>
  );
}

export default App;
