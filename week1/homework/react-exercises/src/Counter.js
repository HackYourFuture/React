import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div className="counter">
            <Count count={count} />
            <h4>{feedback}</h4>
            <Button onclick={incrementCount} />
        </div>
        );
}