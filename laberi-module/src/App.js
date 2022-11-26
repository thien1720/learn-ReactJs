import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  reset,
  increaseBy,
} from "./store/action/couter.action";

function App() {
  const dispatch = useDispatch();
  

  const value = useSelector((state) =>state);
  console.log(value)
  const handleClickUp = () => {
    dispatch(increase());
  };
  const handleClickDown = () =>{
    dispatch(decrease());
  }
  const handleClickReset = () =>{
    dispatch(reset());
  }
  

  return (
    <div className="App">
      <input  type="number" />
      <p>count {value}</p>
      <button onClick={handleClickUp}>click up</button>

      <button onClick={handleClickDown} >click downs</button>

      <button onClick={handleClickReset}>click reset</button>
    </div>
  );
}

export default App;
