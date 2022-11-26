import React , { useState, createContext, useContext } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';


export const CartContext = createContext();
const Layout =(props)=>{
  return(
    <>
      <Provider store={store}>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
      </Provider>
    </>
  )
}

export default Layout;

