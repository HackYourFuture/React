// Counter practice

function App() {
  const [count,setCount] = useState(0);
  function add(){
    const newCount = count +1;
    setCount(newCount)
  }
  function des(){
    const newCount = count -1;
    setCount(newCount)
  }
  function reset(){
    const newCount = 0;
    setCount(newCount)
  }

return (
   <div>
     <input type='number' placeholder='inputSth' value={count} ></input>
     <button onClick={add} type='button'>+</button>
     <button onClick={des} type='button'>-</button>
     <button onClick={reset} type='button'>reset</button>

</div> 
  )
}
