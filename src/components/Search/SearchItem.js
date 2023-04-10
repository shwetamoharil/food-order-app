import { SEARCH_CDN_URL } from "../../utils/constants";
import "./SearchItem.scss";
const SearchItem = ({ type, cloudinaryId, text }) => {
  return (
    <div className="search-item-list">
      <button className="search-item-list__container">
        <div className="search-item-list__container__image-container">
          <img src={SEARCH_CDN_URL + cloudinaryId} alt="item"></img>
        </div>
        <div className="search-item-list__container__name-container">
          <div className="search-item-list__container__name-container__name">
            <span>{text}</span>
          </div>
          <div className="search-item-list__container__name-container__detail">
            {type}
          </div>
        </div>
      </button>
    </div>
  );
};

export default SearchItem;
