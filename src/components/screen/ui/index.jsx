import React, { useState } from "react";
import logo from "../../../images/logo.png";
import option from "../../../images/option.png";

import "./ui.css";

const NavbarScreen = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <div className="background_navbar"></div>
      <nav id="home" className="navbar__box">
        <div
          className={
            showNavbar ? "navbar_content opacityhidden" : "navbar_content"
          }
        >
          <img src={logo} alt="logo" className="navbar_img logo" />
          <img
            src={option}
            alt="option"
            className="navbar_img menu"
            onClick={() => setShowNavbar(true)}
          />
        </div>
        <div className={showNavbar ? "navbar_info opacityshow" : "navbar_info"}>
          <span className="navbar_info_name">
            <img src={logo} alt="logo" className="navbar_img logo_nav" />
            <p>Martin Elias</p>
          </span>
          <ul className="navbar_ul">
            <li className="navbar_list">
              <a href="#home">Home</a>
            </li>
            <li className="navbar_list">
              <a href="#aboutMe"> About me</a>
            </li>
            <li className="navbar_list">
              <a href="#briefcase">Briefcase</a>
            </li>
            <li className="navbar_list">
              <a href="#contact">Contact</a>
            </li>
            <li className="navbar_list">
              <a
                href="https://drive.google.com/file/d/1qcxmEHeWeX9vMa7O5dpr1ovdSkzMU3kd/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                CV
              </a>
            </li>
          </ul>
          <button
            className="navbar_btn_close"
            onClick={() => setShowNavbar(false)}
          >
            X
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarScreen;
