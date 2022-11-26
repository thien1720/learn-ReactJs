import { createApi } from "@reduxjs/toolkit/dist/query/react";
import {fakeStoreBaseQuery, jsonPlaceHolderBaseQuery} from "./base.service";

const todoApi = createApi({
  reducerPath : "todoApi",
  baseQuery: jsonPlaceHolderBaseQuery,
  endpoints:(builder)=>({
    getAllTodos : builder.query({
      query: (args)=>{
        return "todos"
      }
    })
  })
})

export default todoApi;
export const {useGetAllTodosQuery} = todoApi;