import { Link } from "react-router-dom";

const HomeScreen = () => {
  let data = JSON.parse(window.localStorage.getItem("gameSession")!);

  console.log(data);
  return (
    <>
      <Link
        to="./game"
        onClick={() => window.localStorage.removeItem("gameSession")}
      >
        start
      </Link>
      <Link to="./game">continue</Link>
    </>
  );
};

export default HomeScreen;
