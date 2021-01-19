import { useState } from "react";

//this is a short way of doing it.

// function Counter() {
//   const [count, setCount] = useState(0);
//   const feedback = count >= 10 ? "Its higher than 10" : "keep counting";
//   function incrementCount() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={incrementCount} className="btn">
//         Add 1
//       </button>
//       <span>{count}</span>
//       <br></br>
//       <span>{feedback}</span>
//     </div>
//   );
// }

//and here is with 3 components

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count >= 10 ? "Its higher than 10" : "keep counting";
  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button onClick={incrementCount} text="Add 1" />
      <Count count={count} />
      <br></br>
      <span>{feedback}</span>
    </div>
  );
}

function Count(props) {
  return <span>{props.count}</span>;
}

function Button(props) {
  return (
    <button onClick={props.onClick} className="btn">
      {props.text}
    </button>
  );
}
export default Counter;
