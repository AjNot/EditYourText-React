import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextEditor3.0" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Routes>
        <Route path="/" exact element={<TextForm Heading="Welcome to TextEditor" mode={mode} />} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;