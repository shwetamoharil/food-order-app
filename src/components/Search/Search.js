import React from "react";
import Logo from "../../assets/img/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.scss";

const Search = () => {
  const DUMMY_ARRAY = Array(12).fill(0);
  return (
    <div className="search-container">
      <div className="search-container__search">
        <div className="search-container__search__input-box">
          <input
            type="text"
            placeholder="Search for restraurants and food"
          ></input>
        </div>
        <div className="search-container__search__icon">
          <AiOutlineSearch size="1.5em" />
        </div>
      </div>
      <div className="search-container__recent-search">
        <div className="search-container__recent-search__recent">
          <div className="search-container__recent-search__recent__title">
            Recent Searches
          </div>
          <div className="search-container__recent-search__recent__searches">
            <AiOutlineSearch size="1.5em" fill="#686b78" />
            <button>Name</button>
          </div>
        </div>
      </div>
      <div className="search-container__popular-cuisines">
        <div className="search-container__popular-cuisines_container">
          <div className="search-container__popular-cuisines__container__title">
            <h2>Popular Cuisines</h2>
          </div>
          <div className="search-container__popular-cuisines__container__carousel">
            {DUMMY_ARRAY.map((el, index) => (
              <div
                className="search-container__popular-cuisines__container__carousel__images"
                key={index}
              >
                <button>
                  <img src={Logo}></img>
                </button>
              </div>
            ))}
            {/* <div className="search-container__popular-cuisines__container__carousel__images">
              <button>
                <img src={Logo}></img>
              </button>
            </div>
            <div className="search-container__popular-cuisines__container__carousel__images">
              <button>
                <img src={Logo}></img>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
