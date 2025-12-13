import { useState } from 'react';
import Count from './Count';
import Button from './Button';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    return (
        <div>
            <Count count={count} />
            <Button increment={increment} />
            <p>{feedback}</p>
        </div>
    );
}
