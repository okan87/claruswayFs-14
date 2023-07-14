// import LifeCycleMethods from "./components/LifeCycleMethods"
// import { useState } from "react"
// import UseEffectHook from "./components/UseEffectHook"
import User from "./components/User"

function App() {
  // const [visible, setVisible] = useState(false)
  return (
    <div className="container text-center mt-4">
      {/* <button className="btn btn-danger" onClick={() => setVisible(!visible)}> */}
      {/* Show/Hide
      </button> */}

      {/* {visible && <LifeCycleMethods />} */}

      {/* {visible && <UseEffectHook />} */}

      <User />
    </div>
  )
}

export default App
