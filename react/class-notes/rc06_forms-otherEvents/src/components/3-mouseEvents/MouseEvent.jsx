import { useState } from "react"

const MouseEvent = () => {
  const [visible, setVisible] = useState(false)

  const [coordX, setCoordX] = useState()
  const [coordY, setCoordY] = useState()

  const handleMove = (e) => {
    // console.log("X:", e.pageX)
    // console.log("Y:", e.pageY)

    console.log("RX:", e.nativeEvent.offsetX)
    console.log("RY:", e.nativeEvent.offsetY)

    setCoordX(e.pageX)
    setCoordY(e.pageY)
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        todo item 1
      </div>

      {/* Conditional Rendering */}
      {visible && <div>Hint</div>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        todo item 2
      </div>

      <div
        id="todo-3"
        className="bg-success text-light w-50 p-4 my-4"
        onMouseMove={handleMove}
      >
        todo item 3
      </div>

      <p>
        X: {coordX} and Y:{coordY}
      </p>
    </div>
  )
}

export default MouseEvent
