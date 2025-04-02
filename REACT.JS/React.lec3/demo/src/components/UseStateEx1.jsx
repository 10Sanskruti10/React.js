import React, { useState } from 'react'

const UseStateEx1 = () => {
    const [count,setCount] = useState(0)
    const [a, setA] = useState(10)
    const [title, setTitle] = useState("Hello")

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}> Increment </button>

      <h2>{a}</h2>
      <button onClick={()=>setA(a+1)}> add </button>

      <h2>{title}</h2>
      <button onClick={()=>setTitle("World :)")}>Login</button>
    </div>
  )
}

export default UseStateEx1
