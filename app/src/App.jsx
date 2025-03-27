// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2Create from './components/Page2create';
import Dashboard from './components/Dashboard'; // ✅ חדש
import './components/Page1.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create" element={<Page2Create />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ קישור לדאשבורד */}
      </Routes>
    </Router>
  );
};

export default App;
