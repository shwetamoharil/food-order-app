import { AiOutlineSearch } from "react-icons/ai";
import "./SearchShimmerUI.scss";

const SearchShimmerUI = () => {
  return (
    <div className="search-shimmer-ui">
      <div className="search-shimmer-ui__container">
        <div className="search-shimmer-ui__container__input-box">
          <input type="text"></input>
          <AiOutlineSearch size="1.15em" />
        </div>
        <div className="search-shimmer-ui__container__search-boxes">
          <div className="search-shimmer-ui__container__search-boxes__search-box-1"></div>
          <div className="search-shimmer-ui__container__search-boxes__search-box-list">
            {Array(3)
              .fill(0)
              .map((ele, index) => (
                <div
                  className="search-shimmer-ui__container__search-boxes__search-box-list__single-search"
                  key={index}
                >
                  <AiOutlineSearch size="1.15em" />
                  <div className="search-shimmer-ui__container__search-boxes__search-box-list__single-search__item"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchShimmerUI;
