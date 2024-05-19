import { FaArrowRightLong, FaTelegram } from "react-icons/fa6";
import "./SignUp.scss";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { SignBackraund } from "../../../Slice/BackraundSlice";
const SignUp = () => {
  const state = useSelector((state) => state.background);
  const [usersucces, setUserSucces] = useState(true);
  const dispatch = useDispatch();
  const Signuser = () => {
    setUserSucces(!usersucces);
  };
  const success = () => {
    dispatch(SignBackraund());
    setUserSucces(!usersucces);
  };
  return (
    <>
      <div className={state.Signopen ? "SignUp active" : "SignUp"}>
        {usersucces == true ? (
          <>
            <div className="SignUp_Sign">
              <h3>Ro‘yhatdan o‘tish</h3>
              <p>
                Ro‘yhatdan o‘ting va operator sizga tez orada aloqaga chiqadi.
                Sotib olishdan oldin <span>bepul darsni</span> sinab
                ko‘rishingiz mumkin.
              </p>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ismingiz"
              />
              <input
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="+998 999 99 99"
              />
              <button onClick={() => Signuser()}>
                Ro’yhatdan o‘tish <FaArrowRightLong />
              </button>
            </div>
            <div className="SignUp_Contact">
              <h3>
                Savollaringing bo‘lsa qo‘ng‘iroq qiling yoki telegramdan yozing
              </h3>
              <div className="buttons">
                <button className="green">
                  <FaPhoneAlt /> +998 90 301 1335
                </button>
                <Link to={"https://t.me/Biloliddin_Usmonjonov"}>
                  <button>
                    <FaTelegram /> Telegram{" "}
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="Success">
            <div className="img">
              <img src="/public/images/.png" alt="" />
            </div>
            <h4>
              Ro‘yhatdan o‘tganingiz uchun rahmat! Tez orada operatorimiz siz
              bilan bog‘lanadi.
            </h4>
            <button onClick={() => success()}>OK</button>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
