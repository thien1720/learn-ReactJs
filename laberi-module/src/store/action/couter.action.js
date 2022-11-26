// INCEREASE : "counter/increase",
//INCEREASE_BY : "counter/increaseBy",
//DECEREASE : "counter/decrease",
//DECEREASE_BY : "counter/decrease_by",
//RESET : "counter/reset"
import {counter}  from "./countants"
import {createAction} from "@reduxjs/toolkit"

const increase =createAction(counter.INCEREASE)
const increaseBy =createAction(counter.INCEREASE_BY)
const decrease =createAction(counter.DECEREASE)
const decreaseBy =createAction(counter.DECEREASE_BY)
const reset =createAction(counter.RESET)


// const increase = () =>({
//     type:counter.INCEREASE
// })
// const decrease = (value) => ({
//     type:counter.DECEREASE,
//     payload:value
// })
// const reset = (value) => ({
//     type:counter.RESET,
//     payload:value
// })

// const increaseBy = (value) => ({
//     type :counter.DECEREASE_BY,
//     value:value
// })

export {increase, decrease ,decreaseBy, reset ,increaseBy }