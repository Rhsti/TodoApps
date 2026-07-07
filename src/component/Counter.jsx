import { useState } from "react"

function Counter() {
    let [count, setCount] = useState(0)
    const handleClick = () => {
             setCount(count + 1)
     }
  return (
  
    <>
    <button onClick={handleClick }>Increase</button>;
    <button>{count}</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>

    <button onClick={() => setCount(0)}>Reset</button>

    </>
)
}

export default Counter