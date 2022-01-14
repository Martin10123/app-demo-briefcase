import React, { useState } from "react";
import { dataApps } from "../../../../helpers/dataApps";
import ModalApps from "../../../modals/modalApps";

import "./portafolio.css";

const BriefcaseScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [chooser, setChooser] = useState([]);

  const handleModal = (id) => {
    const data = dataApps.filter((data) => data.id === id);
    setChooser(data);
    setShowModal(!showModal);
  };

  return (
    <>
      <article id="briefcase" className="briefcase_box">
        <h1>Works</h1>
        <div className="briefcase_info">
          {dataApps.map((app) => {
            return (
              <div
                data-aos="zoom-in"
                key={app.id}
                className="briefcase_content_info"
              >
                <figure className="briefcase_img">
                  <img src={app.img} alt="" />
                </figure>
                <div className="briefcase_btn">
                  <h2>{app.title}</h2>
                  <button onClick={() => handleModal(app.id)}>View</button>
                </div>
              </div>
            );
          })}
        </div>
      </article>
      {showModal && <ModalApps chooser={chooser} handleModal={handleModal} />}
    </>
  );
};

export default BriefcaseScreen;
