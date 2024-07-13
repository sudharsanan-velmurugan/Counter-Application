
import "./App.css"
const { createContext, useState, useContext, Children } = require("react");

const CountContext = createContext()


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

// function useCount(){
//   const context = useContext(CountContext)
//   return context
// }

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
const App = () => {
  return (
    <div className="app-container" >
      <h1 className="title">Counter Application</h1>
      <p className="sub-description">A simple counter app using Context API</p>
      <CountProvider>
        <Counter/>
      </CountProvider>
    </div>
  )
}

export default App