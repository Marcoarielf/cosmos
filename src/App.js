import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./share/components/nav/nav";
import Footer from "./share/components/footer/footer";
import Home from "./pages/Home";
import Vfx from "./pages/vfx/vfx";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vfx" element={<Vfx />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
