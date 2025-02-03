// import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  return (
    <div className="header flex justify-center">
      <div className="navbar w-[1400px] flex justify-between h-20 items-center font-bold">
        <div className="logo">
          <Link to="/" className="font-bold">
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-color-logo">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g className="fill-color-logo-dot">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className="right-header flex items-center justify-center">
          <ul className="nav flex gap-5 items-center justify-center text-md">
            <li className="list-text " id="list1">
              <div className="dropdown">
                <div className="bgHover ">
                  <button className="dropbtn capitalize">fiverr pro </button>
                </div>
                <div className="dropdown-content w-[450px]">
                  <div className="dropdown-content-part flex border m-5 rounded-md dropdown-content-a">
                    <img
                      src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/hire-freelancer.e3fcf5a.svg"
                      className="m-3 "
                    />
                    <div className="dropdown-text">
                      <p className="">I&apos;m looking to hire</p>
                      <a className="about">
                        My team needs vetted freelance talent and a premium
                        business solution.
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-content-part flex border m-5 rounded-md dropdown-content-a">
                    <img
                      className="m-3"
                      src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/iam-freelancer.6e3c275.svg"
                      alt=" "
                    />
                    <div className="dropdown-text">
                      <p className="">I want to offer Pro services</p>
                      <a className="about">
                        I&apos;d like to work on business projects as a Pro
                        freelancer or arency.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-text " id="list2">
              <div className="dropdown">
                <div className="bgHover ">
                  <button className="dropbtn capitalize">explore </button>
                </div>
                <div className="dropdown-content w-[375px]">
                  <div className="dropdown-content-a">
                    <p className="">Answers</p>
                    <a href="#" className="about">
                      Powered by AI, answered by fiverr freelancers
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Community</p>
                    <a href="#" className="about">
                      Connect with Fiverr&apos;s team and community
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Guides</p>
                    <a href="#" className="about">
                      In-depth guides convering business topics
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Podcast</p>
                    <a href="#" className="about">
                      Inside tips from top business minds
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Learn</p>
                    <a href="#" className="about">
                      Professional online courses, led by experts
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Blog</p>
                    <a href="#" className="about">
                      News, information and comuunity stories
                    </a>
                  </div>
                  <div className="dropdown-content-a">
                    <p className="">Logo Maker</p>
                    <a href="#" className="about">
                      Create your logo instantly
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="group list-text flex items-center justify-center gap-2 capitalize"
              id="list3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="fill-text-color list-text"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
              </svg>
              <a href="#" className="">
                english
              </a>
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
