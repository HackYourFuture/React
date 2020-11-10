import React, { useState } from 'react';

const Count = (props) => {
    return <p>You clicked {props.count} times</p>;
};

const Button = (props) => {
    return (
        <button className='button-add' onClick={props.addingFunction}>Add 1!</button>
    );
};

const ResetButton = (props) => {
    return(
        <button className='button-reset' onClick={props.reset}>Reset Counting</button>
    );
};

function Counter(props) {
    const [count, setCount] = useState(0);
    const addOne = () => setCount(count + 1);
    const feedback = (count >= 10) ? "It's higher than 10" : "Keep counting...";
    const initialState = 0;
    const resetAmount = () => {
        setCount(initialState);
    }
  
    return (
      <div className='counter'>
        <Count count={count} />
        <p>{feedback}</p>
        <div className='button-container'>
            <Button addingFunction={addOne} />
            <ResetButton reset={resetAmount} />
        </div>
      </div>
    );
}

export default Counter;