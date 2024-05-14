import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FloatingNavDemo from "./components/header/FloatingNavDemo";
import Home from "./components/Home";
import { DarkModeProvider } from "./store/DarkModeContext";
// Import the correct component for About
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Community from "./components/Community/Community";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <DarkModeProvider>
          <FloatingNavDemo />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Use the correct component for the About route */}
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </DarkModeProvider>
      </Router>
    </>
  );
};

export default App;
