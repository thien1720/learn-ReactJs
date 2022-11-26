import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const fakeStoreBaseQuery = fetchBaseQuery({
  baseUrl : "https://fakestoreapi.com/",

  // prepareHeaders : ()

});

const jsonPlaceHolderBaseQuery = fetchBaseQuery({
  baseUrl : "https://jsonplaceholder.typicode.com/",

  // prepareHeaders : ()

});
export {jsonPlaceHolderBaseQuery,fakeStoreBaseQuery}