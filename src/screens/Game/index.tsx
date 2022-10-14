import { useEffect, useState } from "react";

type Card = {
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
  const [flipped, setFlipped] = useState<Card[]>([]);
  const [pairs, setPairs] = useState<Card[]>([]);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    if (flipped.length > 1) {
      if (flipped[0].name === flipped[1].name) {
        setPairs((prev) => [...prev, ...flipped]);
      }
      setTimeout(() => setFlipped([]), 500);
      setRetries(retries + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (pairs.length === cards.length) {
      const score = (pairs.length / 2 / retries) * 100;
      console.log(score);
    }
  }, [pairs]);

  const card = ({ id, name }: Card) => {
    return (
      <button
        key={id}
        onClick={() => {
          if (flipped.length < 2 && !pairs.find((item) => item.id === id)) {
            setFlipped((prev) => [...prev, { id, name }]);
          }
        }}
        style={{
          width: "10%",
          margin: 15,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "5px solid black",
        }}
      >
        {flipped.find((item) => item.id === id) ||
        pairs.find((item) => item.id === id) ? (
          <div
            style={{ backgroundColor: "red", width: "100%", height: "100%" }}
          >
            <p style={{ fontSize: 40, fontWeight: 700, color: "white" }}>
              {name}
            </p>
          </div>
        ) : (
          <p style={{ fontSize: 40, fontWeight: 700, color: "white" }}>{id}</p>
        )}
      </button>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: window.innerHeight,
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {cards.slice(0, 5).map((i) => card(i))}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {cards.slice(5, 9).map((i) => card(i))}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {cards.slice(9, 14).map((i) => card(i))}
      </div>
    </div>
  );
};

export default Game;
