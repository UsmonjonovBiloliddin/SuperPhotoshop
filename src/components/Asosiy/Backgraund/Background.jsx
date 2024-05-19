
import "./Background.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavManuBackround, SignBackraund } from "../../../Slice/BackraundSlice";
const Background = () => {
    const {Signopen ,  Manuopen} = useSelector((state) => state.background)
    const dispatch = useDispatch()
    
    const closeBack = () => {
      if(Manuopen){
        dispatch( NavManuBackround())
      }
      if(Signopen){
        dispatch(SignBackraund())
      }
    }
  return (
    <>
        <div onClick={() => closeBack()} className={Signopen || Manuopen ? "Background active" : "Background"}></div>
    </>
  );
};

export default Background;
