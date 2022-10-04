import React, { useState } from "react";
import Diagram from "./Components/DiagramPage/Diagram";
import { Link } from "react-router-dom";
import Key from "./Assets/Images/StudyKey.jpg";
import "./Styles/App.css";

export const App = () => {
  const [guidedModal, setGuidedModal] = useState(false);
  const [anchorModal, setAnchorModal] = useState(false);
  const [peerModal, setPeerModal] = useState(false);
  const [skillsModal, setSkillsModal] = useState(false);
  return (
    <div className="main-page">
      <section className="top-banner">
        <div className="banner-texts first">
          <h1 className="banner-title first">Reading Skills Resources</h1>
          <div className="navigation-container first">
            <Link className="nav-link left" to="/">
              <h3 className="nav-item left">Diagram</h3>
            </Link>
            <Link className="nav-link" to="/table">
              <h3 className="nav-item">Resources</h3>
            </Link>
          </div>
        </div>
      </section>
      <section className="intro-section">
        <p className="intro-text">
          In addition to the skills taught in the
          <b className="bold-text"> Student Edition</b>, <i>Into Literature</i>{" "}
          provides a variety of resources to support skills instruction in the
          <b className="bold-text"> Intervention, Review, and Extension </b>
          bucket on Ed.
        </p>
        <img className="key" alt="icon key" src={Key} />
      </section>
      <b className="instructions">
        Click a title in the diagram to learn about this component.
      </b>
      <Diagram
        guidedModal={guidedModal}
        setGuidedModal={setGuidedModal}
        anchorModal={anchorModal}
        setAnchorModal={setAnchorModal}
        peerModal={peerModal}
        setPeerModal={setPeerModal}
        skillsModal={skillsModal}
        setSkillsModal={setSkillsModal}
        className="diagram-container"
      />
    </div>
  );
};

export default App;
