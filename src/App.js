import React from "react";
import "./index.css"

//calling pages to main app
import Home from "./routes/Home"
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";




function App() {
  return (
    <div>
    {/* <h1>
      This is a portfolio site.
    </h1>   */}

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/project" element = {<Project />} />
      <Route path="/about" element = {<About />} />
      <Route path="/contact" element = {<Contact />} />
    </Routes>

    </div>
  );
}

export default App;
