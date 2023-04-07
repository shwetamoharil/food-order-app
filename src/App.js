import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";

const AppLayout = () => {
  return (
    <div>
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
        element: <Search />,
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
