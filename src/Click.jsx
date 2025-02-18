import React from 'react'

const Click = () => {
    const clickfun = () => {
        alert("hello i am click")
    }

  return (
    <>
        <button onClick={clickfun}>click</button>
        <hr />
    </>
  )
}

export default Click