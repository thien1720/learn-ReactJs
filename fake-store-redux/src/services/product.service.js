import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {fakeStoreBaseQuery} from "./base.service";

const productApi = createApi({
  reducerPath:"product",
  baseQuery: fakeStoreBaseQuery,
  endpoints:(builder) =>({
    getAllProducts: builder.query({
      query:()=>{
        return "products"
      },
    })
  }),

});


// useQuery
// useGetAllProductsQuery

export const {useGetAllProductsQuery} = productApi;
export default productApi;