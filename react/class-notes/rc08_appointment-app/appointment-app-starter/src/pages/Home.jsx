import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList />
    </main>
  )
}

export default Home
