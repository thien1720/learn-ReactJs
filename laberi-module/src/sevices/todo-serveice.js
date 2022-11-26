import {createApi } from "@reduxjs/toolkit/query/react"
import baseQuery from "./base-serveice"

const todoApi = createApi(
    {
        rerducersPath: 'todoApi',
        baseQuery,
        endpoint:(builder) =>({
            getAllTodos: builder.query({ 
                query : () =>{
                    return "todos";
                }
            }),
            createTodo: builder.mutation({ 
                query : ({id}) =>{
                    return "todos";
                }
            })

        })
    }
)