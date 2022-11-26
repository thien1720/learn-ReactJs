import { createAction } from "@reduxjs/toolkit";

const increase = createAction("increase")
const decrease = createAction("decrease")
const reset = createAction("reset")


export default {increase,decrease,reset}