import "./Card.scss";
const Card = ({ name, cloudinaryImageId, costForTwo, cuisines, rating }) => (
  <div className="card">
    <div className="card__items">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="restraurant-img"
      ></img>
      <div className="card__items__name-details">
        <div className="name">{name}</div>
        <div className="tags">{cuisines.join(",")}</div>
      </div>
      <div className="card__items__rest-details">
        <div className="stars">{rating} stars</div>
        <div className="cost">{costForTwo / 100} FOR TWO</div>
      </div>
    </div>
  </div>
);

export default Card;
