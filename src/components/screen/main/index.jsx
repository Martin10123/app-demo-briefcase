import React from "react";
import { AiFillGithub, AiOutlinePicture } from "react-icons/ai";
import {
  SiReact,
  SiRedux,
  SiFirebase,
  SiSass,
  SiBootstrap,
  SiFigma,
  SiSpeedtest,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BiPaint, BiTestTube } from "react-icons/bi";
import { DiGitBranch } from "react-icons/di";

import BriefcaseScreen from "./portafolio";

import "./main.css";

const MainScreen = () => {
  return (
    <>
      <main id="aboutMe" className="main__container">
        <div className="main_skills">
          <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Skills
          </h1>
          <div className="content_info_skill">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="main_p_desc_pers"
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
                commodi officia adipisci eos at iusto voluptatem neque ad
                eveniet accusantium sed illum illo quas accusamus cumque,
                molestias laborum blanditiis! Ipsum.
              </p>
            </div>
            <div className="main_daily">
              <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                On a daily basis
              </h2>
              <ul className="main_ul">
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <IoLogoHtml5 className="main_svg svg_orange" />
                  <p>HTML</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <IoLogoCss3 className="main_svg svg_blue" />
                  <p>CSS</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <IoLogoJavascript className="main_svg svg_yellow" />
                  <p>JavaScript</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiReact className="main_svg svg_react" />
                  <p>React</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiFirebase className="main_svg svg_fire" />
                  <p>Firebase</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <DiGitBranch className="main_svg svg_paint" />
                  <p>Git</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <AiFillGithub className="main_svg" />
                  <p>Github</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <AiOutlinePicture className="main_svg svg_clou" />
                  <p>Cloudinary</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiSpeedtest className="main_svg svg_enzyme" />
                  <p>Enzyme</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <BiTestTube className="main_svg svg_jest" />
                  <p>Jest</p>
                </li>
              </ul>
            </div>
            <div className="main_often">
              <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                Every now and then
              </h2>
              <ul className="main_ul">
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiRedux className="main_svg svg_redux" />
                  <p>Redux</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiBootstrap className="main_svg svg_bootstrap" />
                  <p>Bootstrap</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiSass className="main_svg svg_sass" />
                  <p>SASS</p>
                </li>
              </ul>
            </div>
            <div className="main_couple_of_times">
              <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                Couple of times
              </h2>
              <ul className="main_ul">
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <SiFigma className="main_svg svg_figma" />
                  <p>Figma</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <BiPaint className="main_svg svg_paint" />
                  <p>Paint</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_skill_lenguaje_other">
          <span className="main_span_skill">
            <h2>Lenguajes</h2>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Spanish - Nativo
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              English - (B1)
            </p>
          </span>
          <span className="main_span_skill">
            <h2>Aptitudes</h2>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Good teamwork skills
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Integrity
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Dynamic
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Problem resolution
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              Proactivity
            </p>
          </span>
        </div>
      </main>
      <BriefcaseScreen />
    </>
  );
};

export default MainScreen;
