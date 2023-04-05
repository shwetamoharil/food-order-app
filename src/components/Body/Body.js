import "./Body.scss";
import Card from "../Card/Card";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import restraurantList from "../../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [allRestraurants, setAllRestraurants] = useState([]);
  const [filteredRestraurants, setFilteredRestraurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.57034453268314&lng=73.78194741904736&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(res);
    setAllRestraurants(res?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraurants(res?.data?.cards[2]?.data?.data?.cards);
  };

  return allRestraurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="top-rated">
          <button
            onClick={() => {
              const filteredList = allRestraurants.filter(
                (res) => res.data?.avgRating > 4
              );
              setFilteredRestraurants(filteredList);
            }}
          >
            Top Rated Restraurants
          </button>
          <button
            onClick={() => {
              setFilteredRestraurants(allRestraurants);
            }}
          >
            Cancel
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterList = allRestraurants.filter((res) =>
                res?.data?.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
              setFilteredRestraurants(filterList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="restraurant-container">
        {filteredRestraurants.map((res) => (
          <Card
            key={res.data.id}
            name={res.data.name}
            cloudinaryImageId={res.data.cloudinaryImageId}
            costForTwo={res.data.costForTwo}
            cuisines={res.data.cuisines}
            rating={res.data.avgRating}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Body;
