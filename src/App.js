import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./share/components/nav/nav";
import Footer from "./share/components/footer/footer";
import Home from "./pages/Home";
import Vfx from "./pages/vfx/vfx";
import Modelados from "./pages/modelados/modelados";
import Diseno from "./pages/diseno/diseno";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/modelados" element={<Modelados />}></Route>
          <Route path="/diseno" element={<Diseno />}></Route>
          <Route path="/vfx" element={<Vfx />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
