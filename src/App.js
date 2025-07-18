import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';

function App() {
    return (
        <Router basename="/portfolio">
            <nav className="pixel-nav" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#f9cfe1',
                borderRadius: '12px',
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.7rem',
                textAlign: 'center'
            }}>
                <Link to="/">Home</Link>
                <Link to="/experience">Experience and Awards</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio_website" element={<Home />} />
                <Route path="/portfolio" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;