import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
//import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4">
        <HeroSection />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

/*function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;
*/
