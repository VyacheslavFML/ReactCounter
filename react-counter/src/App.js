import './App.css';
import { useState } from "react";

function App() {
    const [count ,setCount]=useState(0);

    const handlePlus=()=>{
            setCount(count+1);
        }
    const handleMinus=()=>{
            setCount(count-1);
        }
    const handlePlusTwo=()=>{
            setCount(count+2);
        }
    const handleReset=()=>{
            setCount(0);
        }
  return (
      <div className="counter">
          <div className="counter-number">
            <div class="counter_show">{count}</div>
            <button className="button_plus" onClick={handlePlus}>Plus</button>
            <button className="button_minus" onClick={handleMinus}>Minus</button>
            <button className="button_plustwo" onClick={handlePlusTwo}>+2</button>
            <button className="button_reset" onClick={handleReset}>Reset</button>
            </div>
      </div>
  );
}

export default App;
