import { FaArrowRightLong } from "react-icons/fa6";
import "./Bonus.scss";
import { useDispatch } from "react-redux";
import { SignBackraund } from "../../../Slice/BackraundSlice";
const Bonus = () => {
  const dispatch = useDispatch()
  const SignOpen = ()=> {
  dispatch(SignBackraund())
}
  return (
    <div className="Bonus">
      <div className="Bonus_top">
        <div className="Bonus_img">
          <img src="../images/Bonus_top.png" alt="" />
        </div>
        <div className="Bonus_text">
          <h2>
            <span>BONUS!</span> “Photoshop Effekt” videodarslari
          </h2>
        </div>
      </div>
      <div className="Bonus_block">
        <div className="Bonus_block_img">
          <img src="../images/Bonus.png" alt="" />
        </div>
        <div className="Bonus_block_text">
          <h2>Ushbu darslikda:</h2>
          <ul>
            <li>
              Konturniy svetlar bilan effektlar xosil qilish (oddiy sichqoncha
              yordamida)
            </li>
            <li>Komponovka va kompozitsiyalarni tanlash</li>
            <li>Ranglar va shriftlarni tanlash o‘rgatilgan</li>
          </ul>
          <h2>Mundarija:</h2>
          <ol>
            <li>iPhone uchun SMM dizayn (25 min)</li>
            <li>Apple Watch uchun poster dizayn (20 min)</li>
            <li>Game kanal uchun Youtube prevyu 1-dizayn (33 min)</li>
            <li>Youtube prevyu 2-dizayn (39 min)</li>
            <li>Yangiliklar kanali uchun prevyu 3-dizayn (34 min)</li>
            <li>
              Futbol kanali (250k) uchun 4-prevyu dizayn. Xayrulla Hamidov
              menejeri bilan muloqot (26 min)
            </li>
          </ol>
        </div>
      </div>
      <div className="btn">
        <button onClick={ () => SignOpen()}><span>Ro’yhatdan o‘ting </span> <FaArrowRightLong /></button>
      </div>
    </div>
  );
};

export default Bonus;
