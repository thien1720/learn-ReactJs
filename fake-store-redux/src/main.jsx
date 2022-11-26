import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Products from './pages/products/Products'
import Productdt from './pages/product-dt/Productdt'
import Cart from './pages/cart/Cart'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/product' element={<Products />}></Route>
          <Route path='/product/:productId' element={<Productdt />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


// product/1 => id == 1;
