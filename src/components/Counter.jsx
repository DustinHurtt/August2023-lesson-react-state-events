import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    let decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

  return (
    <div className="Counter">
      <h2>Counter</h2>
 
      <p>You clicked {count} times</p>
 
      <button onClick={() => decrement()}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
    </div>
  )
}

export default Counter