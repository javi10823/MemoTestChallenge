import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameScreen, HomeScreen } from "./screens";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
