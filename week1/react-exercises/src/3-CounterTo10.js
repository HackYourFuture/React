import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div className="counter_container">
      <Button
        setCount={() => {
          setCount(count + 1);
        }}
      />
      <Count count={count} />
      <p className="counter_notification">{feedback}</p>
    </div>
  );
}

function Count(props) {
  const {count} = props;
  return <h1 className="counter_display">{count}</h1>;
}

function Button(props) {
  const {setCount} = props;
  return (
    <button onClick={setCount} className="add_btn">
      Add 1
    </button>
  );
}

export default Counter;
