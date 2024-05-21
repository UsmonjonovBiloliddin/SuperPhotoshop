import {
  FaBehanceSquare,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import "./Networks.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Networks = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="Networks" data-aos="fade-up">
      <div className="Networks_text">
        <h3>Sardor Qodirovning ijtimoiy tarmoqlari:</h3>
      </div>
      <div className="Networks_All">
        <Link to={"https://www.youtube.com/@kadirovgroup"}>
          {" "}
          <div className="Networks_Network bir">
            <FaYoutube className="youtobe" />
            <h4>Youtube (16k)</h4>
          </div>
        </Link>
        <Link to={"https://t.me/kompyuter_grafika_darslari"}>
          <div className="Networks_Network ikki">
            <FaTelegram className="telegram even" />
            <h4>Telegram (6,7k)</h4>
          </div>
        </Link>
        <Link to={"https://www.instagram.com/kadirovgroup/"}>
          <div className="Networks_Network bir">
            <FaInstagram className="instagram" />
            <h4>Instagram (4k)</h4>
          </div>
        </Link>
        <Link>
          <div className="Networks_Network ikki">
            <FaBehanceSquare className="telegram even" />
            <h4> Behance</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Networks;
