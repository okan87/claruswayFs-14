import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <ContainerCard />
    </Container>
  );
}

export default App;
