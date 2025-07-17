import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';

function App() {
    return (
        <Router>
            <nav className="pixel-nav">
                <Link to="/">Home</Link> | <Link to="/experience">Experience and Awards</Link> | <Link to="/projects">Projects</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio_website" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default App;