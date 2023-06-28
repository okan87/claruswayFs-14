import Content from "./Content"
import { Footer } from "./Footer"
import Header from "./Header"

//! CSS dosylari dogrudan import edilir. Export edilmelerine gerek yoktur.
import "./App.css"

function App() {
  console.log("deneme")
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
