import About from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InstructorDetail from "./pages/InstructorDetail";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
// import {BrowserRouter as Router} from 'react-router-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:id" element={<InstructorDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
