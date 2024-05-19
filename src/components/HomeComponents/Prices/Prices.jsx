import { FaArrowRightLong } from "react-icons/fa6"
import "./Prices.scss"
import { useDispatch } from "react-redux"
import { SignBackraund } from "../../../Slice/BackraundSlice"
const Prices = () => {
    const dispatch = useDispatch()
    const SignOpen = ()=> {
    dispatch(SignBackraund())
  }
  return (
    <div className='Prices'>
        <div className="Prices_img">
            <img src="/public/images/Headerimg.png" alt="" />
        </div>
        <div className="Prices_text">
            <h2>Videodarslar narxi</h2>
            <p>Super Photoshop - 280.000 so‘m</p>
            <p>Photoshop Effekt - 125.000 so‘m</p>
            <span>405.000 so‘m</span>
            <h1>300.000 so‘m</h1>
            <button onClick={() => SignOpen()}>Ro’yhatdan o‘tish <FaArrowRightLong /> </button>
        </div>
    </div>
  )
}

export default Prices