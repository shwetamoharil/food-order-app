import "./Header.scss";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-section-1">
//         <img
//           src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
//           alt="logo"
//         ></img>
//       </div>
//       <div className="header-section-2">
//         <span>Current Addr</span>
//         <span>Current Location</span>
//       </div>
//       <div className="header-section-3">
//         <ul className="list-items">
//           <li>Home</li>
//           <li>About</li>
//           <li>Offers</li>
//           <li>Profile</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={
            "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          }
          alt="logo"
        ></img>
      </div>
      <div className="header__location">
        <span className="header__location__selected-location">WORK</span>
        <span className="header__location__current-location">
          Current Location
        </span>
      </div>
      <div className="header__items">
        <ul>
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
