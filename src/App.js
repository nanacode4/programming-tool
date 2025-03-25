import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Coding from "./pages/Coding"; 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import Dashboard from "./pages/Dashboard";
import LearningPath from "./pages/LearningPath";
import PythonLearn from "./pages/PythonLearn/PythonLearn";





function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learningPath" element={<LearningPath />} />
          <Route path="/python" element={<PythonLearn />} />
        </Routes>
        <Footer />
      </Router>
  );
}


export default App;
