import { useReducer,useState  } from "react";
// useReducer 
// 1 Init state
// 2 action up : state + 1 down : state -1 
// 3 reducer 
// 4 dispatch 


const initState = 0

const UP_ACTION = "up"
const DOWN_ACTION = "down"


const reducer = (state, action) =>{
    switch (action){
        case UP_ACTION: 
            return state + 1
        case DOWN_ACTION: 
            return state - 1
        default : 
            throw new Error('Invalid action')
    }
}

function Reduecer (){
    const [count, dispatch] = reducer(reducer, initState)

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => dispatch(UP_ACTION)}>
                Up Action
            </button>


            <button onClick={()=> dispatch(DOWN_ACTION)}>
                Down Action
            </button>
        </>
    )
}

export default Reduecer;