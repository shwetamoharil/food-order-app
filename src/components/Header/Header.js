import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { LOGO_URL } from "../../utils/constants";
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
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
