import React from "react";
import "./Header.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { SignBackraund } from "../../../Slice/BackraundSlice";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    const dispatch = useDispatch()
    const SignOpen = ()=> {
    dispatch(SignBackraund())
  }
  return (
    <div className="Home_Header">
      <div className="text">
        <h1>
        <TypeAnimation
								sequence={[
									"  Grafik dizaynerlar uchun photoshop videodarslari",
								]}
								speed={50}
                cursor={false}
							/>
        </h1>
      <p>
      Dizaynerlikni boshlamoqchi yoki tajribasini oshirmoqchi bo‘lganlar uchun
      </p>
      
        <div className="about">
          <div className="radio">
            <img src="../images/headerMe 7.png" alt="" />
          </div>
          <p>Sardor Qodirov</p>
        </div>
        <button onClick={() => SignOpen()}>
           <span>bepul darsni sinab ko‘ring</span> <FaArrowRightLong />
        </button>
      </div>
      <div className="imeg">
        <img src="/images/Headerimg.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
