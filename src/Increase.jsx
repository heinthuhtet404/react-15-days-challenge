import React, { useState } from 'react'

const Increase = () => {
    const [count,setCount] = useState(0);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>increase</button>
        <button onClick={() => setCount(count-1)}>decrease</button>
        <button onClick={() => setCount(0)}>reset</button>
        <hr />
    </>
  )
}

export default Increase