import { useState } from "react";
import "./style.css";
function Counter(){
    const [count, setCount] = useState(0);
    
    function increment(){
        setCount(count + 1);
    }

    function decrement(){
         if (count > 0) {
    setCount(count - 1);
  }}

   function reset(){
    setCount(0);
   }



    return(<div  className="container">

        <h1  style={{ marginBottom: "20px" }}>Counter App</h1>

        <h1 className="counter-number">{count}</h1>

        {count === 0 && (
        <p className="warning">
          Minimum limit reached
        </p>)}
        
        <div className="buttons">
        <button className="increment-button" onClick={increment}  >+</button>

        <button className="decrement-button" onClick={decrement}  >-</button>

        <button className="reset-button" onClick={reset} >Reset</button>
        </div>
        </div>
        )
}

export default Counter;