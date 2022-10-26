import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  Card,
  CardNumber,
  Container,
  Modal,
  ModalContent,
  Row,
  Score,
  BackButton,
} from "./styles";

type CardType = {
  id: number;
  name: string;
};

const Game = () => {
  const [flipped, setFlipped] = useState<CardType[]>([]);
  const [pairs, setPairs] = useState<CardType[]>([]);
  const [retries, setRetries] = useState<number>(0);
  const [score, setScore] = useState("0");
  const [cards, setCards] = useState<string[]>([]);
  const [init, setInit] = useState(false);

  const { loading, error, data } = useQuery(gql`
    query GetTests {
      tests {
        data {
          id
          name
          images
        }
      }
    }
  `);

  useEffect(() => {
    const prev = JSON.parse(window.localStorage.getItem("gameSession")!);
    if (prev) {
      setFlipped(prev.flipped);
      setPairs(prev.pairs);
      setRetries(prev.retries);
      setCards(prev.cards);
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
        JSON.stringify({ pairs, flipped, retries, cards })
      );
    }
  }, [pairs, flipped, retries]);

  useEffect(() => {
    const prev = JSON.parse(window.localStorage.getItem("gameSession")!);
    if (data && !loading && !prev) {
      console.log(data?.tests?.data[0]);
      setCards(
        JSON.parse(data?.tests?.data[0].images)
          .map((i: string) => [i, i])
          .flat()
          .sort(() => 0.5 - Math.random())
      );
    }
  }, [data]);

  const onClickCard = ({ id, name }: CardType) => {
    if (flipped.length < 2 && !flipped.find((item) => item.id === id)) {
      setFlipped((prev) => [...prev, { id, name }]);
    }
  };

  const card = ({ id, name }: CardType) => (
    <Card key={id} onClick={onClickCard.bind(null, { id, name })}>
      {flipped.find((item) => item.id === id) ||
      pairs.find((item) => item.id === id) ? (
        <div style={{ width: "100%", height: "100%" }}>
          <img src={name} alt="" width="100%" height="100%" />
        </div>
      ) : (
        <CardNumber>{id}</CardNumber>
      )}
    </Card>
  );

  return (
    <Container>
      <Row>
        {cards.slice(0, 5).map((i, index) => card({ id: index + 1, name: i }))}
      </Row>
      <Row>
        {cards.slice(5, 9).map((i, index) => card({ id: index + 6, name: i }))}
      </Row>
      <Row>
        {cards
          .slice(9, 14)
          .map((i, index) => card({ id: index + 10, name: i }))}
      </Row>
      <Modal open={pairs.length === cards.length && cards.length > 0}>
        <ModalContent>
          <Score>Score: {score}</Score>
          <BackButton
            to="/"
            onClick={() => window.localStorage.removeItem("gameSession")}
          >
            Back
          </BackButton>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Game;
