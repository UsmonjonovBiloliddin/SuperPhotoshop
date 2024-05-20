import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Background, Home, Navbar } from "../index";
import { FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react";
const App = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {if (window.scrollY > 155) {setScroll(true);} else {setScroll(false);}});
  return (
    <div className="App">
      <Navbar />
      <div onClick={() => { document.documentElement.scrollTop = 0;}}className={scroll ? "top active" : "top"}><FaArrowUpLong /></div>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
