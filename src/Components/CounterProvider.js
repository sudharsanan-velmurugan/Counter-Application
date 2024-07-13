
import { useState,createContext } from "react"

export const CountContext = createContext()


function CountProvider ({ children }) {

  const [count, setCount] = useState(0)

  const increment = () => { setCount(count + 1) }
  const decrement = () => { setCount(count - 1) }

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider