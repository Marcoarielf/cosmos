import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./share/components/nav/nav";
import Footer from "./share/components/footer/footer";
import Home from "./pages/Home";
import Vfx from "./pages/vfx/vfx";
// import Models3d from "./pages/3d/3d";
import Modelados from "./pages/modelados/modelados";
import Diseno from "./pages/diseno/diseno";
import Webs from "./pages/webs/webs";
import Campanias from "./pages/campanias/campanias";
import Apps from "./pages/apps/apps";

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
          <Route path="/desarrollo-web" element={<Webs />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
          <Route path="/campanias" element={<Campanias />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
