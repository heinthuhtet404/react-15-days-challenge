import React, { useState } from 'react'

const UserInputDisplay = () => {
    const [name,setName] = useState("")

  return (
    <>  
        <br />
        <input type="text" onChange={(event) => setName(event.target.value)}/>
        <p>Hello , {name} !</p>
        <br />
        <hr />
    </>
  )
}

export default UserInputDisplay