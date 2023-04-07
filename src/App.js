import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
import SearchShimmerUI from "./components/ShimmerUI/SearchShimmerUI";

const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/search",
        element: <SearchShimmerUI />,
      },
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
