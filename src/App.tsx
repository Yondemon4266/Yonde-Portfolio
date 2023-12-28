import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Contact from "./pages/Contact";
import Project4 from "./pages/Project4";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import Project6 from "./pages/Project6";
import Project5 from "./pages/Project5";
import Project7 from "./pages/Project7";
const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet-1" element={<Project1 />} />
          <Route path="/projet-2" element={<Project2 />} />
          <Route path="/projet-3" element={<Project3 />} />
          <Route path="/projet-4" element={<Project4 />} />
          <Route path="/projet-5" element={<Project5 />} />
          <Route path="/projet-6" element={<Project6 />} />
          <Route path="/projet-7" element={<Project7 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
