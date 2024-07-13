import { useContext } from "react"
import {CountContext} from "./CounterProvider"
const Counter = () => {
    const {count, increment, decrement} = useContext(CountContext)
    return (
      <div className="counter-container">
        <h1 >{count}</h1>
        <button className="button" onClick={increment}>+</button>
        <button className="button" onClick={decrement}>-</button>
      </div>
    )
  }

  export default Counter