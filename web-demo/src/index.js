import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import App from './App';
import Home from "./pages/home/Home"
import Header from './compoenent/header/Header';
import Laptop from "./pages/Laptop/Laptop"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route  path="/header" element={<Header />}></Route>

        </Route>

        <Route path="/laptop" element = {<Laptop />}></Route>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
