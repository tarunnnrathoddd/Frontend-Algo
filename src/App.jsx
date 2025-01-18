import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stocks from "./components/Stocks"; // Import the Stocks component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stocks/:stockName" element={<Stocks />} />{" "}
        {/* Add Route for Stocks */}
      </Routes>
    </Router>
  );
};

export default App;
