import { Button, Container } from "./styles";

const HomeScreen = () => (
  <Container>
    <Button
      to="./game"
      onClick={() => window.localStorage.removeItem("gameSession")}
    >
      START
    </Button>
    <Button to="./game">CONTINUE</Button>
  </Container>
);

export default HomeScreen;
