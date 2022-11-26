import { Routes, Route, Link } from "react-router-dom";
import ListComponent from "./conponent/ChildHome";
import { useState } from "react";
import "./index.css";

function Home() {

  return (
    <div className="style_name">
      <h1 className="">Home</h1>
      <ListComponent />
    </div>
  );
}

function About() {
  return (
    <>
      <h1 className="content-iteam">About</h1>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1 className="content-iteam">Contact</h1>
    </>
  );
}

function Logins() {
  return (
    <>
      <h1 className="content-iteam">Logins</h1>
    </>
  );
}

function Bar({bar ,setBar}){
  console.log(setBar(bar))
  return (
    <div className="bar">
        <ul className="iteam-bar">
          <li>
            <Link to="/home">
              <p className="nav-ieam">
                <i className="bi bi-house-door"></i>
                Home
                </p> 
                </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="nav-ieam">
              <i className="bi bi-file-earmark-person-fill"></i>
                About
                </p> 
                </Link>
          </li>
          <li>
            <Link to="/contact">
              <p className="nav-ieam">
              <i className="bi bi-person-rolodex"></i>
                Contact
                </p> 
                </Link>
          </li>
          <li>
            <Link to="/login">
              <p className="nav-ieam"> 
              <i className="bi bi-box-arrow-in-right"></i>
                Login
                </p>
                </Link>
          </li>
        </ul>

        <div className="bar-icon" onClick={() => (!bar)}>
          <i className="bi bi-x-lg"></i>
        </div>


        <Routes>
          <Route path="home/*" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Logins />} />
        </Routes>
      </div>
  )
}

function App() {
  const [bar, setBar] =useState(false)
  const ShowSide = () => setBar(!bar)
  
  console.log(bar)
  return (
    <div className="App">
      <div className="nav-icon" onClick={ShowSide}>
        <i className="bi bi-list"></i>
      </div>

      {bar && <Bar 
        bar ={bar}
        setBar= {setBar}

      />}
    </div>
  );
}

export default App;
