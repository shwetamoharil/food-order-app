import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="header__location">
        <span className="header__location__selected-location">WORK</span>
        <span className="header__location__current-location">
          Current Location
        </span>
      </div>
      <div className="header__items">
        <ul>
          <NavLink to="/search">
            <li>Search</li>
          </NavLink>

          <NavLink to="/">
            <li>Home</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
