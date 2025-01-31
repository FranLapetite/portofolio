import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path based on your folder structure
import Home from "./pages/Home"; 
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import the new Privacy Policy page
import Footer from "./components/Footer"; 

function App() {
  const basename = process.env.NODE_ENV === "production" ? "/" : "/";

  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* New route added */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;