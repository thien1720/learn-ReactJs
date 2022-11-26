import { ADD_TO_CART, FETCH_PRODUCTS, FETCH_PRODUCT_DETAILS, REMOVE_FROM_CART, UPDATE_CART } from "./constants";
import { fetchProductDetails } from "../../lib/fetch";
import { fetchProducts } from "../../lib/fetch";
import { createAction } from "@reduxjs/toolkit";


const increase = createAction("increase")
const decrease = createAction("decrease")
const reset = createAction("reset")



const addToCart = (product) => {
  return {
    type : ADD_TO_CART,
    payload: { id: product.id, title: product.title, price: product.price , description :product.description, image: product.image ,category: product.category }
  }
}

const removeFromCart = (productId) =>{
  return{
    type : REMOVE_FROM_CART,
    productId: productId
  }

}

const updateCart = (payload) =>{
  return{
    type : UPDATE_CART,
    payload
  }

}

const getProducts = ()  => {
  return {
    type: FETCH_PRODUCTS,
    payload: fetchProducts()
  };
}

const getProductDetails = (productId) => {
  return {
    type: FETCH_PRODUCT_DETAILS,
    payload: fetchProductDetails(productId)
  };
}



export {addToCart, removeFromCart, updateCart, getProductDetails, getProducts}