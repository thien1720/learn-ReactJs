import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useCallback , useEffect , useState , createContext } from "react";
import Header from "./compoenent/header/Header";
import './App.css';


export const Appcontext = createContext({})
function App() {
  const [cart ,SetCart ] = useState([])
  const addToCart = useCallback(({id, quantity })=>{
    setCart([...cart , {id, quantity}])
  }
  ,[])
  return (
    <div className="App">
      <Header/>    
      <Appcontext.Provider
        value = {id , quantity} 
      >
        <Outlet />
      </Appcontext.Provider>
    </div>
  );
}

export default App;
