import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
