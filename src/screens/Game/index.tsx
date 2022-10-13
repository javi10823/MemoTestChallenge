const Game = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const card = (i: any) => {
    return (
      <button
        key={i}
        onClick={() => console.log("asdasd")}
        style={{
          width: "10%",
          margin: 15,
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "10px solid black",
        }}
      >
        <p style={{ fontSize: 40, fontWeight: 700, color: "white" }}>{i}</p>
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
