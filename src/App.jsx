// import { useState } from "react";
import About from "./Components/about";
import Contact from "./Components/contact";
import Header from "./Components/header";
import Home from "./Components/home";
import Services from "./Components/services";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'

// library.add(...all)

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={

              <>
                <Header />
                <Home />
                
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Header />
                <Services />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />

          <Route
            path="*"
            element={<div className="text-2xl text-blue-">404 Not found</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
