import {createApi } from "@reduxjs/toolkit/query/react"
import baseQuery  from "./base-serveice"

const productApi = createApi({
    reducerPath: "product", 
    endpoint : (buildder) => { 
        getAllProducts(buildder.query({
            query: () =>{ 
                return "products"
            }
        }))
    }
})


// getAllProducts
export default productApi
export const {useGetAllProducts} = productApi