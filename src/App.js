import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; // ✅ HashRouter used
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const headerWrapStyle = {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const catTrackStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: 60,
    margin: '0 auto 0.25rem',
  };

  const catImgStyle = {
    position: 'absolute',
    top: 14,
    left: '100%',
    width: 60,
    animation: 'catWalkNav 10s linear infinite',
    zIndex: 2,
  };

  return (
    <Router> {/* ❌ Removed basename */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          margin: '1rem auto 1.25rem',
          display: 'block',
          padding: '0.5rem 1rem',
          fontFamily: 'Arial, sans-serif',
          fontSize: '0.95rem',
          backgroundColor: darkMode ? '#f8ddecff' : '#f8ddecff',
          color: '#000',
          border: darkMode ? '1px solid #999' : '1px solid #caa',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        {darkMode
          ? <span style={{ fontWeight: 'bold' }}>☀️ Light Mode</span>
          : <span style={{ fontWeight: 'bold' }}>🌙 Dark Mode</span>}
      </button>

      <div style={headerWrapStyle}>
        <div style={catTrackStyle}>
          <img
            src={`${process.env.PUBLIC_URL}/cat.png`}
            alt="Pixel Cat"
            style={catImgStyle}
          />
        </div>

        <nav className="pixel-nav"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            padding: '0.75rem 1rem',
            backgroundColor: '#f8ddecff',
            borderRadius: '12px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.1rem',
            textAlign: 'center',
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/experience">Experience and Awards</Link>
          <Link to="/projects">Projects and Publications</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/experience" element={<Experience darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;