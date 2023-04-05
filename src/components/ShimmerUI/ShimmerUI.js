import EmptyCard from "../EmptyCard/EmptyCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./ShimmerUI.scss";

const ShimmerUI = () => {
  const DUMMY_ARRAY = Array(8).fill(0);
  return (
    <div className="shimmer">
      <div className="shimmer__section-1">
        <LoadingSpinner />
        <p>Looking for great food near you</p>
      </div>
      <div className="shimmer__section-2">
        <div className="container">
          {DUMMY_ARRAY.map((ele, index) => (
            <EmptyCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
