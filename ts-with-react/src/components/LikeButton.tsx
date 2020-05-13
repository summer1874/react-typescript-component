import React, { useState } from 'react'
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(1)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setLike(like + 1)}>{like}</button>
    </>
  );
}

export default Counter