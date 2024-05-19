import React from "react";
import { FaArrowRightLong, FaTelegram } from "react-icons/fa6";
import "./Menu.scss";
import { IoCloseSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround } from "../../../Slice/BackraundSlice";
const Menu = ({  openBars}) => {
  const state = useSelector((state) => state.background)
  const dispatch = useDispatch()
    const closeManu = () => {
        dispatch(NavManuBackround())
    }
  return (
    <div className={state.Manuopen ? "Menu active " : "Menu"}>
      <div className={openBars ? "open active" : "open"}>
        <div className="close">
          <div className="img">
            <img src="/public/images/Logo.png" alt="" />
          </div>
          <h3>Super Photoshop</h3>
          <div className="radio">
            <IoCloseSharp onClick={() => closeManu()} />
          </div>
        </div>
        <div className="categorys">
          <div className="category">
          <p>Mavzular</p><FaArrowRightLong />
          </div>
          <div className="category">
          <p>Muallif</p><FaArrowRightLong />
          </div>
          <div className="category">
          <p>O‘quvchilar fikri</p><FaArrowRightLong />
          </div>
          <div className="category">
          <p>Narx</p><FaArrowRightLong />
          </div>
        </div>
        <button>
          Ro’yhatdan o‘tish <FaArrowRightLong />
        </button>
        <div className="contact">
            <p>
            Savollaringing bo‘lsa qo‘ng‘iroq qiling yoki telegramdan yozing
            </p>
            <a href=""><button className="green"><FaPhoneAlt /> +998 90 301 1335</button></a>
            <Link to={"https://t.me/Biloliddin_Usmonjonov"}><button><FaTelegram /> Telegram </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
