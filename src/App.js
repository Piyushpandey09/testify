import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Footer from './Components/Footer'; 
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar title="Textify" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="content-container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text You Want To Analyze Below" mode={mode} />} />
          </Routes>
        </div>
        <Footer /> {/* Add Footer component here */}
      </div>
    </Router>
  );
}

export default App;
