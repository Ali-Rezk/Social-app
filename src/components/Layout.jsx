import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { mode } from "../context/mode.context";

export default function Layout() {
  const { theme } = useContext(mode);

  return (
    <div
      className={`${
        theme === "dark" && "dark"
      } dark:bg-gray-700 dark:text-white flex min-h-screen flex-col justify-between items-center`}
    >
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  );
}
