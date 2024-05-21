import { FaArrowRightLong } from "react-icons/fa6"
import "./Prices.scss"
import { useDispatch } from "react-redux"
import { SignBackraund } from "../../../Slice/BackraundSlice"
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
const Prices = ({pref}) => {
    const dispatch = useDispatch()
    const SignOpen = ()=> {
    dispatch(SignBackraund())
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div ref={pref} className='Prices' data-aos="fade-up">
        <div className="Prices_img">
            <img src="../images/Headerimg.png" alt="" />
        </div>
        <div className="Prices_text">
            <h2>Videodarslar narxi</h2>
            <Link><p>Super Photoshop - 280.000 so‘m</p></Link>
            <Link><p>Photoshop Effekt - 125.000 so‘m</p></Link>
            <span>405.000 so‘m</span>
            <h1>300.000 so‘m</h1>
            <button onClick={() => SignOpen()}>Ro’yhatdan o‘tish <FaArrowRightLong /> </button>
        </div>
    </div>
  )
}

export default Prices