import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect , useRef, useCallback, useContext} from 'react'
import {Routes, Route , Link } from "react-router-dom"
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact';
const Appcontext = React.createContext({})

// react router 
// outlet 
// Appcontext.ProductsList.value({})
// Appcontext.Consumer  === useContext(initial)




function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
