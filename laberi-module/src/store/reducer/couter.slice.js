import {counter} from "../action/countants"
import {increase, decrease ,decreaseBy, reset ,increaseBy } from "../action/couter.action"
import {createReducer ,createSlice} from "@reduxjs/toolkit"
// const initialState = {
//     value:0
// }

// const counterSlice = createReducer(0, (builder) =>{
//     // buidler.addCase là dùng để tách ra trường hợp riêng cho action
//     builder.addCase(increase , (state, action) =>{
//         return state + 1
//     })
//     builder.addCase(increaseBy , (state, action) =>{
//         return state + action.payload
//     })
//     builder.addCase(decrease , (state, action) =>{
//         return state - 1  
//     })
//     builder.addCase(reset , (state, action) =>{
//         return 0  
//     })
// })

// const counterSlice = (state=initialState, action ) => {
    
//     console.log(action.type ,state.value)
//     switch (action.type){
//         case counter.INCEREASE :{
//             return {
//                 value: state.value + 1
//             }
//         }
//         case counter.DECEREASE:{
//             return{
//                 value: state.value - 1
//             }
//         }
//         case counter.RESET :{
//             return initialState
//         }
//         case counter.DECEREASE_BY :{
//             return {value:state.value + action.value}
//         }
        
//         default :
//             return state
        
//     }
// }
// export {initialState}

const counterSlice = createSlice({
    name:"counter",
    innitialState:0,
    reducer:{
        incerease:(state) =>{
            return state + 1
        },
        incereaseBy:(state,payload)=>{
            return state + payload
        },
        decerease:(state)=>{
            return state - 1
        },
        decereaseBy:(state,payload)=>{
            return state - payload
        },
        reset:()=>{
            return 0
        },
    }
})
export default counterSlice.reducer
export const {increase, increaseBy, decrease,decreaseBy, reset} = counterSlice.reducer

// selecterAllProducts
//  selecterById 

