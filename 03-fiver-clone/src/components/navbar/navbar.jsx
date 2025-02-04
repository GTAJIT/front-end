// import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "./elements/logo";
import FiverPro from "./elements/fiverr-pro";
import Explore from "./elements/explore";
import Language from "./elements/language";

function navbar() {
  return (
    <div className="header flex justify-center">
      <div className="navbar w-[1400px] flex justify-between h-20 items-center font-bold">
        <Logo />
        <div className="right-header flex items-center justify-center">
          <ul className="nav flex gap-5 items-center justify-center text-md">
            <li className="list-text " id="list1">
              <FiverPro />
            </li>
            <li className="list-text " id="list2">
              <Explore />
            </li>
            <li className="" id="list3">
              <Language />
            </li>
            <li className="list" id="list4">
              <Link to="/seller" className="list-text">
                Became a Seller
              </Link>
            </li>
            <li className="list" id="list5">
              <Link to="/Login" className="list-text capitalize">
                sign in
              </Link>
            </li>
            <li
              className="list-text-color flex border rounded-sm pr-3 pl-3 pt-1 pb-1 h-auto items-center"
              id="list6"
            >
              <Link to="/Login" className="capitalize">
                join
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
