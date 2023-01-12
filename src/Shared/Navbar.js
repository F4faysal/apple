import React from "react";
import { Link } from "react-router-dom";

const menuItems = (
  <>
    {" "}
    <li>
      <Link to={""}>Store</Link>
    </li>
    <li>
      <Link to={""}>Mac</Link>
    </li>
    <li>
      <Link to={""}>iPad</Link>
    </li>
    <li>
      <Link to={""}>iPhone</Link>
    </li>
    <li>
      <Link to={""}>Watch</Link>
    </li>
    <li>
      <Link to={""}>AirPods</Link>
    </li>
    <li>
      <Link to={""}>TV & Home</Link>
    </li>
    <li>
      <Link to={""}>Only on Apple</Link>
    </li>
    <li>
      <Link to={""}>Accessories</Link>
    </li>
    <li>
      <Link to={""}>Support</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="navbar container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost normal-case text-xl">
            <img
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg"
              alt=""
            />
          </a>
          <a className="btn btn-ghost normal-case text-xl">
            <img
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
