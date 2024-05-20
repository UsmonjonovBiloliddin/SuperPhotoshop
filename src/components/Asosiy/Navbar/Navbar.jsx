import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import "./Navbar.scss"
import { Navbar_Menu } from '../../..';
import { useDispatch } from 'react-redux';
import { NavManuBackround } from '../../../Slice/BackraundSlice';
const Navbar = () => {
  const dispatch = useDispatch()
    const openManu = () => {
        dispatch(NavManuBackround())
    }
  return (
    <div className='Navbar'>
       <Link to={"/"}>
       <div className="left">
            <div className="img">
                <img src="../images/Logo.png" alt="" />
            </div>
            <h3>Super Photoshop</h3>
        </div></Link>
        <div className="right">
            <ul>
                <li><NavLink to={"/"}>Mavzular</NavLink></li>
                <li><NavLink to={"/Bonus"}>Bonus</NavLink></li>
                <li><NavLink to={"/Muallif"}>Muallif haqida</NavLink></li>
                <li><NavLink to={"/O‘quvchilar"}>O‘quvchilar fikri</NavLink></li>
                <li><NavLink to={"/Narx"}>Narx</NavLink></li>
            </ul>
            <button>Bog‘lanish</button>
        </div>
        <div onClick={() => openManu()} className="right-media">
            <div className="radio">
            <FaBars  />
            </div>
        </div>
        <Navbar_Menu />

    </div>
  )
}

export default Navbar