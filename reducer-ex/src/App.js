import { useReducer , useRef } from "react"
import './App.css';


// initState
const initState ={
  job:"",
  jobs:[]
}

// action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload =>{
  return {
    type:SET_JOB,
    payload
  }
}

const addJob = payload =>{
  return {
    type:ADD_JOB,
    payload
  }
}

const deleteJob = payload =>{
  return {
    type:DELETE_JOB,
    payload
  }
}

// reducer 
const reducer = (state, action) =>{
  console.log(action)

  let newState 
  
  switch(action.type) {
    
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
        newState = {
          ...state,
          jobs: [...state.jobs, action.payload]
        }
        break
    case DELETE_JOB : 
        const newJob = [...state.jobs]
        console.log(newJob)

        newJob.splice(action.payload, 1)
        newState ={
          ...state,
          jobs :newJob
        }
        break
    default :
      throw new Error("invalid action ")
  }

  return newState;
}

// dispatch

function App() {

  const [state, dispatch] = useReducer(reducer, initState)
  const inputElement = useRef()
  console.log(state)
  const { job, jobs} = state 


  // ham them 1 iteam iteam tu input
  const handleSubmit = ()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputElement.current.focus()
  }


  // ham xoa 1 iteam

  
  return (
    <div className="App">
      <h1 className="header">Todo app</h1>
      <input 
        className="style-input"
        ref={inputElement}
        value = {job}
        placeholder="Nhập giá trị ...." 

        onChange={e =>{
          dispatch(setJob(e.target.value))
        }}
      />

      <button 
        onClick={handleSubmit} 
        className="sub-iteam"
      >
        Add Todo
      </button>

      <ul>
        {jobs.map((job, i) =>
             <li key={i} className="iteam"> {job} 
                <span 
                  className="delete"
                  onClick={() =>dispatch(deleteJob(i)) }
                >
                  &times;
                </span>
             </li>
        )}

      </ul>
    </div>
  );
}

export default App;
