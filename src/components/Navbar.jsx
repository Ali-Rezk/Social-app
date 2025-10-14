import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../context/auth.context";
import { mode } from "../context/mode.context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin, setIsLogin, userData } = useContext(auth);
  const { theme, toggleTheme } = useContext(mode);
  const navigate = useNavigate();

  function toggle() {
    setIsOpen(!isOpen);
  }

  function logOut() {
    setIsLogin(null);
    navigate("/");
    localStorage.removeItem("token");
  }

  return (
    <nav className="bg-white border-gray-200 shadow  dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/home"}>
          <h2 className="logo tracking-widest text-purple">Social</h2>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          onClick={toggle}
          className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isLogin ? (
              <>
                <li>
                  <Link
                    to={"/home"}
                    className="text-purple"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={logOut} className="text-purple cursor-pointer">
                  LogOut
                </li>
                <li>
                  <Link
                    className="flex items-center g-3 "
                    to={`/profile/${userData?._id}`}
                  >
                    <img
                      src={userData?.photo}
                      alt=""
                      className="size-9 rounded-circle"
                    />
                    <span>{userData?.name}</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/"} className="text-purple" aria-current="page">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="text-purple"
                    aria-current="page"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            <li>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  type="checkbox"
                  defaultValue
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <i className="fa-solid text-purple fa-moon"></i>
                  <i className="fa-solid text-purple fa-sun"></i>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
