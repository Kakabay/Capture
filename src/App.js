import React from "react";
// Importing Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Importing pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MoviesDetail from "./pages/MovieDetail";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();
  
  return (
    <div className="App">
      {/* Global Styles */}
      <GlobalStyle></GlobalStyle>   

      <Nav></Nav>

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />

          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MoviesDetail />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
