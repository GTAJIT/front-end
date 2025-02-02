import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="hero">
      <header className="head flex justify-between sticky">
        <div className="logo text">
          <img src="./src/assets/logo.png" alt="logo" />
        </div>
        <div className="flex gap-10">
          <nav className="nav flex gap-5">
            <p className="text" id="page-1">
              about
            </p>
            <p className="text" id="page-2">
              download
            </p>
            <p className="text" id="page-3">
              pricing
            </p>
            <p className="text" id="page-4">
              features
            </p>
            <p className="text" id="page-5">
              contact
            </p>
          </nav>
          <div className="btns flex gap-5">
            <button className="btn" id="sign-in">
              <p className="text" id="sign-in-text">
                sign in
              </p>
            </button>
            <button className="text" id="theme-switch">
              btn
            </button>
          </div>
        </div>
      </header>
      <section className="left-section">
        <h1 className="text-small" id="welcome">
          welcome.
        </h1>
        <div className="search">
          <input type="text" className="search-space" />
          <span className="search-icon">
            <img src="" alt="search-icon" />
          </span>
        </div>
        <div className="btns">
          <button className="btn" id="free-trail">
            <p className="text" id="btn-text-one">
              free trial
            </p>
          </button>
          <button className="btn" id="see-more">
            <p className="" id="btn-text-two">
              see more
            </p>
          </button>
        </div>
      </section>
      <section className="right-section">
        <div className="right-data">
          <img src="" alt="right-logo" className="right-logo" />
          <p className="text-small" id="mid-text">
            landing page
          </p>
          <p className="text-small" id="small-text">
            Lorem ipsum dolor sit amet consectetur adipisicing. Esse itaque
            maxime corporis, natus praesentium possimus. Sunt exercitationem,
            quo sint illo enim veniam? Sequi nobis atque beatae, unde quo
            temporibus.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
