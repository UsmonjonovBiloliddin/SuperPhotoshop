import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Background, Home, Navbar } from "../index";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
