import {useState, useCallback, useReducer} from 'react'
import Button from './component/button';
import Reduecer from './component/reducer';


function App() {
  const [count , setCount] = useState(0)

  const handleClick = useCallback(() =>{
    setCount(prev => prev + 1)
    console.log('thien' ,count)
  },[])
  return (
    <div className="App">
      
      <Button onIncrease={handleClick} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
