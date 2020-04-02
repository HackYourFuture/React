import React, {useState} from 'react';
import Button from './Button';
import Count from './Count';







const Counter = () =>{
  const [count, setCount] = useState(0);
  function increaseCount(){
      setCount(count+1 )
  }
  return (
      <div>
        <h3> Counter Forever</h3>
      <Button increaseCount = {increaseCount}/>
      <Count count={count}/> 
      </div> 
  )
}

export default Counter;

// <button onClick={()=> setCount(count+1 )}>
// 'You have clicked{count}'
// </button>
// )
