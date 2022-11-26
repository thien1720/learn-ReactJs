import {useStore , actions} from "./store"
import clsx from "clsx"
import style from './App.module.css';


function App() {
  
  const [state, dispatch] = useStore()
  const {todos , todoInput} = state

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput))
  }
  
  console.log(todos)
  return (
    <div className={style.App}>
      <input 
        type="text"
        className={style.styleInput}
        value={todoInput}
        placeholder="Nhap du lieu"
        onChange={e =>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />

      <button 
        onClick={handleSubmit}
        className={clsx(style.dart , style.light)}
      >Add Event
      </button>
      {todos.map((todo, index) => (
        <li 
          key={index}
          className={style.listName}
        >{todo}
        </li>
      ))}
    </div>
  );
}

export default App;
