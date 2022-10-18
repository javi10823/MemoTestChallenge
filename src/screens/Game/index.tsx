import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardNumber,
  Container,
  Modal,
  ModalContent,
  Row,
} from "./styles";

type CardType = {
  id: number;
  name: string;
};

const cards = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "a" },
  { id: 4, name: "b" },
  { id: 5, name: "c" },
  { id: 6, name: "d" },
  { id: 7, name: "c" },
  { id: 8, name: "d" },
  { id: 9, name: "e" },
  { id: 10, name: "f" },
  { id: 11, name: "e" },
  { id: 12, name: "f" },
  { id: 13, name: "h" },
  { id: 14, name: "h" },
];

const Game = () => {
  const [flipped, setFlipped] = useState<CardType[]>([]);
  const [pairs, setPairs] = useState<CardType[]>([]);
  const [retries, setRetries] = useState<number>(0);
  const [score, setScore] = useState("0");
  const [init, setInit] = useState(false);

  useEffect(() => {
    const prev = JSON.parse(window.localStorage.getItem("gameSession")!);
    if (prev) {
      setFlipped(prev.flipped);
      setPairs(prev.pairs);
      setRetries(prev.retries);
    }
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) {
      if (flipped.length > 1) {
        if (flipped[0].name === flipped[1].name) {
          setPairs((prev) => [...prev, ...flipped]);
        }
        setTimeout(() => setFlipped([]), 1000);
        setRetries((prev) => prev + 1);
      }
    }
  }, [flipped]);

  useEffect(() => {
    if (init) {
      if (pairs.length === cards.length) {
        setScore(((pairs.length / 2 / retries) * 100).toFixed());
      }
    }
  }, [pairs]);

  useEffect(() => {
    if (init) {
      window.localStorage.setItem(
        "gameSession",
        JSON.stringify({ pairs, flipped, retries })
      );
    }
  }, [pairs, flipped, retries]);

  const onClickCard = ({ id, name }: CardType) => {
    if (flipped.length < 2 && !pairs.find((item) => item.id === id)) {
      setFlipped((prev) => [...prev, { id, name }]);
    }
  };

  const card = ({ id, name }: CardType) => (
    <Card key={id} onClick={onClickCard.bind(null, { id, name })}>
      {flipped.find((item) => item.id === id) ||
      pairs.find((item) => item.id === id) ? (
        <div style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
          <p style={{ fontSize: 40, fontWeight: 700, color: "white" }}>
            {name}
          </p>
        </div>
      ) : (
        <CardNumber>{id}</CardNumber>
      )}
    </Card>
  );

  return (
    <Container>
      <Row>{cards.slice(0, 5).map((i) => card(i))}</Row>
      <Row>{cards.slice(5, 9).map((i) => card(i))}</Row>
      <Row>{cards.slice(9, 14).map((i) => card(i))}</Row>
      <Modal open={pairs.length === cards.length}>
        <ModalContent>
          <p>Score: {score}</p>
          <Link to="/">Back</Link>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Game;
