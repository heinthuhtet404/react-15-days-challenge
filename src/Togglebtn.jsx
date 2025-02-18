import React, { useState } from 'react'

const Togglebtn = () => {
    const [isOn,setisOn] = useState(false)

  return (
    <>
        <p>Status : {isOn ? "On" : "Off"}</p>
        <button onClick={() => setisOn(!isOn)}>
          {isOn ? "Turn Off": "Turn On"}
        </button>
        <hr />
    </>
  )
}

export default Togglebtn