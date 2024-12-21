import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import your Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; // Import Footer if you have one

const App = () => {
  return (
    <Router basename="/portofolio">
      <Navbar /> {/* This will display the Navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add Footer to display on all pages */}
    </Router>
  );
};

export default App;