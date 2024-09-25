import { Link } from "react-router-dom";
import "./navBarStyle.scss";
import logo from "../../assets/images/shopping_1162499.png";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="logo">
            <img src={logo} alt="" />
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
