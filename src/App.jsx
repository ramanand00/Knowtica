import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Components from "./pages/Components";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import Template from "./pages/Template";
import Angular from "./doxpage/Angular";
import Laravel from "./doxpage/Larvel";
import Nextjs from "./doxpage/Nextjs";
import Vue from "./doxpage/Vue";
import ReactRouter from "./doxpage/ReactRouter";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/components" element={<Components />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/dox_Vue" element={<Vue />} />
        <Route path="/dox_Angular" element={<Angular />} />
        <Route path="/dox_Laravel" element={<Laravel />} />
        <Route path="/dox_Nextjs" element={<Nextjs />} />
        <Route path="/dox_ReactRouter" element={<ReactRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
