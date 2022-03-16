import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  function decrement(): void {
    setCount(count - 1)
  }
  function increment(): void {
    setCount(count + 1)
  }
  return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
  );
};

export default Counter;