import { useState } from "react";
import './Counter.css';
import Button from "./Button";
import Count from "./Count";


export default function Counter() {
   const [count, setCount] = useState(0); 
   const feedBack = count > 10 ? "It's higher than 10!" : "Keep counting...";

   function addOne () {
    setCount((prev) => prev + 1);  
   }

   function decrementOne() {
      if (count > 0) setCount((prev) =>  prev - 1);
     }  
     
     function addTwo () {
      setCount((prev) => prev + 2);  
     }
  
     function decrementTwo () {
        if (count > 1) setCount((prev) =>  prev - 2);
        else setCount(0);
       }  

   return ( <div>
    <p>{feedBack}</p>
    <Count number={count} />
    <Button onClick={addOne} text="Add 1!"/>
    <Button onClick={decrementOne} text="Decrement 1!"/>
    <Button onClick={decrementTwo} text="Decrement 2!"/>
    <Button onClick={addTwo} text="Add 2!"/>
   </div>
   );
}

  