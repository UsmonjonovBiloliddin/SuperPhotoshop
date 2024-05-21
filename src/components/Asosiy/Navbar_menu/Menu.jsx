import React from "react";
import { FaArrowRightLong, FaTelegram } from "react-icons/fa6";
import "./Menu.scss";
import { IoCloseSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround, SignBackraund } from "../../../Slice/BackraundSlice";
const Menu = ({ openBars , mvref, atref, thref, pcref }) => {
  const state = useSelector((state) => state.background);
  const dispatch = useDispatch();

  const SignOpen = () => {
    dispatch(SignBackraund());
  };
  const closeManu = () => {
    dispatch(NavManuBackround());
  };
  const handleScroll = (ref, position = "start") => {
    dispatch(NavManuBackround());
    ref.current?.scrollIntoView({ behavior: "smooth", block: position });
  };
  return (
    <div className={state.Manuopen ? "Menu active " : "Menu"}>
      <div className={openBars ? "open active" : "open"}>
        <div className="close">
          <div className="img">
            <img src="../images/Logo.png" alt="" />
          </div>
          <h3>Super Photoshop</h3>
          <div className="radio" onClick={() => closeManu()}>
            <IoCloseSharp />
          </div>
        </div>
        <div className="categorys">
          <NavLink onClick={() => handleScroll(mvref)}>
            <div className="category">
              <p>Mavzular</p>
              <FaArrowRightLong />
            </div>
          </NavLink>
        <NavLink onClick={() => handleScroll(atref)}>
        <div className="category">
            <p>Muallif</p>
            <FaArrowRightLong />
          </div>
        </NavLink>
         <NavLink onClick={() => handleScroll(thref)}>
         <div className="category">
            <p>O‘quvchilar fikri</p>
            <FaArrowRightLong />
          </div>
         </NavLink>
        <NavLink onClick={() => handleScroll(pcref)}>
        <div className="category">
            <p>Narx</p>
            <FaArrowRightLong />
          </div>
        </NavLink>
        </div>
        <button onClick={() => SignOpen()}>
          Ro’yhatdan o‘tish <FaArrowRightLong />
        </button>
        <div className="contact">
          <p>Savollaringing bo‘lsa qo‘ng‘iroq qiling yoki telegramdan yozing</p>
          <a href="">
            <button className="green">
              <FaPhoneAlt /> +998 90 301 1335
            </button>
          </a>
          <Link to={"https://t.me/Biloliddin_Usmonjonov"}>
            <button>
              <FaTelegram /> Telegram{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
