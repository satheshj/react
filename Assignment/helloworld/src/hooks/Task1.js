import React, { useState } from 'react'

function Task1() {
    let [num,setNum] = useState(0)

  return (
    <div>
      <h1>No of clicks = {num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Increase</button>
      <button onClick={()=>setNum(num-1)}>Decrease</button>
    </div>
  )
}

export default Task1
