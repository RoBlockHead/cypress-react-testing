import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <button onClick={decrement} data-testid={"counter-decrement"}>-</button>
      {count}
      <button onClick={increment} data-testid={"counter-increment"}>+</button>
    </div>
  )
}
export default Counter;