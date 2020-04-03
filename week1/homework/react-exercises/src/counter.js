import React, { useState } from 'react';

const Counter = () => {
    const [count , setCount] = useState(0);
    const feedback = count > 10 ? "It's Higher Than 10" : "Keep counting, you have a long way";

    return (
        <div className='counter'>
            <h2>{feedback}</h2>
            <Button clickHandler={() => setCount(count +1)}/>
            <Count count ={count}/>
        </div>
    )
}

const Button = ({clickHandler}) => {
    return (
        <button onClick={clickHandler}>Add 1!</button>
    )
}

const Count = ({count}) => {
    return (
        <p>The number is {count}</p>
    )
}

export default Counter;