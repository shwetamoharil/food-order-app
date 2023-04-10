import React, { useEffect, useState } from "react";
import SearchShimmerUI from "../ShimmerUI/SearchShimmerUI";
import SearchItem from "./SearchItem";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import "./Search.scss";

const Search = () => {
  const [showPopularCuisines, setPopularCuisines] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchMatches, setSearchMatches] = useState([]);

  useEffect(() => {
    getRecentSearch();
    getPreSearchData();
  }, []);

  useEffect(() => {
    console.log("render");
    const interval = setTimeout(() => {
      if (searchText) getSearchMatch();
    }, 2000);

    return () => clearTimeout(interval);
  }, [searchText]);

  const searchTextHandler = (e) => {
    setSearchText(e.target.value.trim());
  };

  const getSearchMatch = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=20.01093942193059&lng=73.74581806361675&str=${searchText}&trackingId=undefined`
    );
    const json = await res.json();
    console.log(json?.data?.suggestions);
    setSearchMatches(json?.data?.suggestions);
  };

  const getRecentSearch = () => {
    const recentSearches = window.localStorage.getItem(
      "swgy_dweb_recentSearch"
    );
    const recentSearchObj = JSON.parse(recentSearches);
    setRecentSearch(recentSearchObj?.items);
  };

  const getPreSearchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=18.57034453268314&lng=73.78194741904736"
      );
      const json = await res.json();
      const popularCuisines =
        json?.data?.cards[1]?.card?.card?.imageGridCards?.info;
      setPopularCuisines(popularCuisines);
    } catch (e) {
      throw new Error("Could not fetch data");
    }
  };

  return showPopularCuisines.length === 0 ? (
    <SearchShimmerUI />
  ) : (
    <div className="search-container">
      <div className="search-container__search">
        <div className="search-container__search__input-box">
          <input
            type="text"
            value={searchText}
            placeholder="Search for restraurants and food"
            onChange={searchTextHandler}
          ></input>
        </div>
        <div className="search-container__search__icon">
          {searchText.length !== 0 ? (
            <AiOutlineClose size="1.5em" onClick={() => setSearchText("")} />
          ) : (
            <AiOutlineSearch size="1.5em" />
          )}
        </div>
      </div>
      {searchText.length === 0 && recentSearch.length !== 0 && (
        <div className="search-container__recent-search">
          <div className="search-container__recent-search__recent">
            <div className="search-container__recent-search__recent__title">
              Recent Searches
            </div>
            {recentSearch.map((ele, index) => (
              <div
                className="search-container__recent-search__recent__searches"
                key={index}
              >
                <AiOutlineSearch size="1.5em" fill="#686b78" />
                <button>{ele}</button>
              </div>
            ))}
          </div>
        </div>
      )}
      {searchText.length === 0 && (
        <div className="search-container__popular-cuisines">
          <div className="search-container__popular-cuisines_container">
            <div className="search-container__popular-cuisines__container__title">
              <h2>Popular Cuisines</h2>
            </div>
            <div className="search-container__popular-cuisines__container__carousel">
              {showPopularCuisines.map((cuisine, index) => (
                <div
                  className="search-container__popular-cuisines__container__carousel__images"
                  key={cuisine.id}
                >
                  <button>
                    <img
                      src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                        cuisine.imageId
                      }
                    ></img>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {searchText.length !== 0 && (
        <div className="search-container__search-list">
          <div className="search-container__search-list__search-list-container">
            {searchMatches !== undefined ? (
              searchMatches.map((data) => (
                <SearchItem
                  key={data.cloudinaryId}
                  text={data.text}
                  cloudinaryId={data.cloudinaryId}
                  type={data.type}
                />
              ))
            ) : (
              <p>No data</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
