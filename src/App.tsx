import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import LandingPage from './pages/LandingPage'; // import landing page
import Resume from './pages/Resume'; // import resume page
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MotionBox = motion(Box);

function App() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      p={8}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add other routes here */}
          {/* <Route path="/projects" element={<Projects />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
          {/* Add other routes here */}
        </Routes>
      </Router>
    </MotionBox>
  );
}

export default App;