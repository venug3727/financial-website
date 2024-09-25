import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Services from "./component/Services";
import WhyUs from "./component/WhyUs";
function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={< About/>} />
          <Route exact path="/contact" element={< Blog/>} />
          <Route exact path="/service" element={< Services/>} />
            <Route exact path="/whyus" element={<WhyUs />} />
            
              
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
