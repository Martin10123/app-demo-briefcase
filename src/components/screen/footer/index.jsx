import React from "react";

import "./footer.css";

const FooterScreen = () => {
  return (
    <footer id="contact">
      <div className="footer_box">
        <div className="footer_content">
          <h2
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Formas de contactarme
          </h2>
          <ul>
            <li data-aos="fade-right">
              <p>Number: </p>
              <p>(+57) 300 - 683 - 0624</p>
            </li>
            <li data-aos="fade-left">
              <p>Ubication: </p>
              <p>Cartagena - Colombia</p>
            </li>
            <li data-aos="fade-right">
              <p>Gmail: </p>
              <p>martinsimarra4@gmail.com</p>
            </li>
            <li data-aos="fade-left">
              <p>Whatsapp: </p>
              <p>(+57) 300 - 683 - 0624</p>
            </li>
          </ul>
        </div>
        <h3 className="footer_created">
          2022 - Crated with
          <a href="https://es.reactjs.org/" rel="noreferrer" target="_blank">
            React
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default FooterScreen;
