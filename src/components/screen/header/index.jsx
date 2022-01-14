import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp, BsFacebook, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import "./header.css";

const HeaderScreen = () => {
  return (
    <header className="header__box">
      <h1 data-aos="zoom-in-up">Web developer</h1>
      <p data-aos="zoom-in-up" className="header__desc">
        My name is Martin Elias, I'm from Colombia, I'm 20 years old and I'm
        (Frontend Web Development - Junior). I have been studying web
        programming for more than a year and a half, I became interested in this
        branch because I was curious to know how websites were created. The more
        I read about it, the more it interested me, so I started watching
        courses on youtube. Then they recommended the Udemy platform where I saw
        several web programming courses, and then I took a React intensive
        course in Acamica.
      </p>
      <div className="header_btns_social">
        <a
          href="#briefcase"
          data-aos="zoom-in-up"
          className="header_a_view_more color"
        >
          Works
        </a>
        <a
          href="https://wa.link/kdme9t"
          rel="noreferrer"
          target="_blank"
          className="header_a_view_more"
          data-aos="zoom-in-up"
        >
          <BsWhatsapp className="header_svg svg_green" />
        </a>
        <a
          href="https://www.facebook.com/martinelias1012"
          rel="noreferrer"
          target="_blank"
          className="header_a_view_more"
          data-aos="zoom-in-up"
        >
          <BsFacebook className="header_svg svg_blue" />
        </a>
        <a
          href="https://github.com/Martin10123"
          rel="noreferrer"
          target="_blank"
          className="header_a_view_more"
          data-aos="zoom-in-up"
        >
          <BsGithub className="header_svg" />
        </a>
        <a
          href="mailto:martinsimarra4@gmail.com?Subject=Estoy Interesado"
          rel="noreferrer"
          target="_blank"
          className="header_a_view_more"
          data-aos="zoom-in-up"
        >
          <SiGmail className="header_svg svg_red" />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-elias-83038b22b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brqd%2FCrXHRRqLNYTs58MD3g%3D%3D"
          rel="noreferrer"
          target="_blank"
          className="header_a_view_more"
          data-aos="zoom-in-up"
        >
          <AiFillLinkedin className="header_svg svg_calest" />
        </a>
      </div>
    </header>
  );
};

export default HeaderScreen;
