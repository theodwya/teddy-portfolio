import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

const MotionBox = motion(Box);

function App() {
  return (
    <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    p={8}
  >
    <h1 className="text-3xl font-bold">Welcome to Teddy's Portfolio</h1>
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/projects">Projects</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>
  </MotionBox>
  );
}

export default App;
