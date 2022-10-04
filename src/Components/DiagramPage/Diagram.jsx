import React from "react";
import Modal from "../DiagramPage/Modal";
import { DiagramSVG as Spider } from "../DiagramPage/DiagramSVG";
import "../../Styles/Diagram.css";

export const Diagram = ({
  guidedModal,
  setGuidedModal,
  anchorModal,
  setAnchorModal,
  peerModal,
  setPeerModal,
  skillsModal,
  setSkillsModal,
}) => {
  return (
    <div className="main-container">
      <div className="diagram-container">
        <Spider
          className="diagram"
          alt="diagram"
          setGuidedModal={setGuidedModal}
          guidedModal={guidedModal}
          setAnchorModal={setAnchorModal}
          anchorModal={anchorModal}
          setPeerModal={setPeerModal}
          peerModal={peerModal}
          setSkillsModal={setSkillsModal}
          skillsModal={skillsModal}
        />
      </div>
      <Modal
        setPeerModal={setPeerModal}
        peerModal={peerModal}
        guidedModal={guidedModal}
        setGuidedModal={setGuidedModal}
        skillsModal={skillsModal}
        setSkillsModal={setSkillsModal}
        anchorModal={anchorModal}
        setAnchorModal={setAnchorModal}
      />
    </div>
  );
};

export default Diagram;
