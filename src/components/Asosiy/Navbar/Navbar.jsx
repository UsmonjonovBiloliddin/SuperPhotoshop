import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import "./Navbar.scss";
import { Navbar_Menu } from "../../..";
import { useDispatch } from "react-redux";
import { NavManuBackround } from "../../../Slice/BackraundSlice";
const Navbar = ({ mvref, bnref, atref, thref, pcref }) => {
  const dispatch = useDispatch();
  const openManu = () => {
    dispatch(NavManuBackround());
  };
  const handleScroll = (ref, position = "start") => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: position });
  };
  return (
    <div className="Navbar">
      <Link to={"/"}>
        <div className="left">
          <div className="img">
            <img src="../images/Logo.png" alt="" />
          </div>
          <h3>Super Photoshop</h3>
        </div>
      </Link>
      <div className="right">
        <ul>
          <NavLink onClick={() => handleScroll(mvref)}>
            <li>Mavzular</li>
          </NavLink>
          <NavLink>
            <li onClick={() => handleScroll(bnref)}>Bonus</li>
          </NavLink>
          <NavLink>
            <li onClick={() => handleScroll(atref , "start")}>
              Muallif haqida
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => handleScroll(thref, "center")}>
              O‘quvchilar fikri
            </li>
          </NavLink>
          <NavLink>
            <li onClick={() => handleScroll(pcref, "center")}>Narx</li>
          </NavLink>
        </ul>
        <button>Bog‘lanish</button>
      </div>
      <div onClick={() => openManu()} className="right-media">
        <div className="radio">
          <FaBars />
        </div>
      </div>
      <Navbar_Menu
        mvref={mvref}
        bnref={bnref}
        atref={atref}
        thref={thref}
        pcref={pcref}
      />
    </div>
  );
};

export default Navbar;
