import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { restraurantList } from "./constants";
import "./App.scss";

const AppLayout = () => {
  return (
    <div className="body">
      <Header />
      <div className="restraurant-container">
        {restraurantList.map((res) => (
          <Card
            name={res.name}
            cloudinaryImageId={res.cloudinaryImageId}
            costForTwo={res.costForTwo}
            cuisines={res.cuisines}
            rating={res.rating}
          ></Card>
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
