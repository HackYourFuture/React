import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
   const [count, setCount] = useState(0); 
   const feedBack = count > 10 ? "It's higher than 10!" : "Keep counting...";

   return ( <div>
    <p>{feedBack}</p>
    <Count number={count}/>
    <h2>{count}</h2>
    <Button/>
   </div>
   );
}

  /* function addOne() {
     setCount((prev) => prev + 1);
   }

   function decrementOne() {
   if (count > 0) setCount((prev) => prev - 1);
  }
   
  function addTwo() {
    setCount((prev) => prev + 2);
  }

  function decrementTwo() {
  if (count > 1) setCount((prev) => prev - 2);
  else setCount(0);
 }

   return (
    <div>
       <p>{feedBack}</p>
       <Count number={count} />
       <Button onclick={addTwo} text="Add 2!" />
       <Button onclick={decrementTwo} text="Decrement 2!" />
       <Button onclick={decrementOne} text="Decrement 1!" />
       <Button onclick={addOne} text="Add 1!" />
    </div>
   );*/


export default Counter;

