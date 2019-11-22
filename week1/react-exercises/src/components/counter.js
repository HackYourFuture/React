import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const feedback = () => {
        return (count <= 10 ? "Keep counting..." : "It's higher than 10!");
    }

    return (
        <div className="counter">
            <button onClick={() => setCount(count + 1)}>Add 1! </button>
            <p>{count}</p>
            <p>{feedback()}</p>
        </div>
    )
}
export default Counter;