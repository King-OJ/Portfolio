import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Socials from "./components/Socials";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";


function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=" relative h-screen flex flex-col">
      <Navbar toggleMenu={toggleMenu}/>
        <Socials />
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact' element={<Contact /> }/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
