import "./Home.scss";
import {
  HomeAbout,
  HomeBonus,
  HomeHeader,
  HomeMavzular,
  HomeNetworks,
  HomePrices,
  HomeThoughts,
  HomeUsega,
  HomeVideo,
  Navbar,
  SignUp,
} from "../..";
import { useRef } from "react";
const Home = () => {
  const mavzuRef = useRef();
  const bonussRef = useRef();
  const authereRef = useRef();
  const thoughtRef = useRef();
  const priceRef = useRef();
  return (
    <div className="Home">
      <Navbar
        mvref={mavzuRef}
        bnref={bonussRef}
        atref={authereRef}
        thref={thoughtRef}
        pcref={priceRef}
      />
      <HomeHeader />
      <HomeVideo />
      <HomeMavzular mref={mavzuRef} />
      <HomeUsega />
      <HomeBonus bRef={bonussRef} />
      <HomeAbout aref={authereRef} />
      <HomeNetworks />
      <HomeThoughts tref={thoughtRef} />
      <HomePrices pref={priceRef} />
      <SignUp />
    </div>
  );
};

export default Home;
