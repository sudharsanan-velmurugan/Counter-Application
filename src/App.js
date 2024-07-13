
import "./App.css"
import AppContainer from "./Components/AppContainer"
import CountProvider from "./Components/CounterProvider"
import Counter from "./Components/Counter"

const App = () => {
  return (
    <div className="app-container" >
      <AppContainer/>
      <CountProvider>
          <Counter/>
        </CountProvider>
    </div>
  )
}

export default App