import React, { useState, useEffect } from "react";
import { data } from "../../Assets/data";
import { Link } from "react-router-dom";
import Audio_Video from "../../Assets/Icons/audio_video.svg";
import Data from "../../Assets/Icons/data.svg";
import Edit from "../../Assets/Icons/edit.svg";
import PPT from "../../Assets/Icons/ppt.svg";
import Print from "../../Assets/Icons/print.svg";
import "../../Styles/Table.css";

const Table = () => {
  const [info, setInfo] = useState(data);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const allSkills = info.map((item) => {
      return item.Skill;
    });
    setSkills(allSkills);
  }, [info]);

  const stripes = (index) => {
    if (index === 0 || index % 2 === 0) {
      return "white";
    } else {
      return "tan";
    }
  };

  const getSkills = () => {
    if (skills) {
      return skills.map((item, index) => (
        <React.Fragment key={index}>
          <div className={`info-row ${stripes(index)}`}>
            <p className="skill-item">{item}</p>
          </div>
        </React.Fragment>
      ));
    } else return null;
  };

  const getCoach = () => {
    if (info) {
      const newCoachArray = info.map((item) => {
        if (item.SkillsCoach) {
          return item.SkillsCoach;
        } else return " ";
      });
      if (newCoachArray) {
        return newCoachArray.map((item, index) => (
          <React.Fragment key={index}>
            {item !== " " ? (
              <div className={`info-row coach-row ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input present"
                    alt="Skills Coach Icon"
                    src={Edit}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        ));
      }
    } else return null;
  };

  const getPeer = () => {
    if (info) {
      const newPeerArray = info.map((item) => {
        if (item.PeerCoachVideo) {
          return item.PeerCoachVideo;
        } else return " ";
      });
      if (newPeerArray) {
        return newPeerArray.map((item, index) => (
          <React.Fragment key={index}>
            {item !== " " ? (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input present"
                    alt="Peer Coach Video Icon"
                    src={Audio_Video}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        ));
      }
    } else return null;
  };

  const getAnchor = () => {
    if (info) {
      const newAnchorArray = info.map((item) => {
        if (item.AnchorChart) {
          return item.AnchorChart;
        } else return " ";
      });
      if (newAnchorArray) {
        return newAnchorArray.map((item, index) => (
          <React.Fragment key={index}>
            {item !== " " ? (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input present"
                    alt="Anchor Chart Icon"
                    src={Print}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        ));
      }
    } else return null;
  };

  const getAnchorSlides = () => {
    if (info) {
      const newAnchorSlidesArray = info.map((item) => {
        if (item.AnchorChartSlides) {
          return item.AnchorChartSlides;
        } else return " ";
      });
      if (newAnchorSlidesArray) {
        return newAnchorSlidesArray.map((item, index) => (
          <React.Fragment key={index}>
            {item !== " " ? (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <a href={item}>
                  <img
                    className="icon-input present"
                    alt="Anchor Chart Slides Icon"
                    src={PPT}
                  />
                </a>
              </div>
            ) : (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        ));
      }
    } else return null;
  };

  const getGuided = () => {
    if (info) {
      const newGuidedArray = info.map((item) => {
        if (item.GuidedSkillsPractice) {
          return item.GuidedSkillsPractice;
        } else return " ";
      });
      if (newGuidedArray) {
        return newGuidedArray.map((item, index) => (
          <React.Fragment key={index}>
            {item !== " " ? (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <img
                  className="icon-input present guided"
                  alt="Anchor Chart Slides Icon"
                  src={Data}
                />
              </div>
            ) : (
              <div className={`info-row peer-row ${stripes(index)}`}>
                <p className="icon-input"> </p>
              </div>
            )}
          </React.Fragment>
        ));
      }
    } else return null;
  };

  return (
    <div className="main-page">
      <section className="top-banner">
        <div className="banner-texts">
          <h1 className="banner-title">Reading Skills Resources</h1>
          <div className="navigation-container">
            <Link className="nav-link left" to="/">
              <h3 className="nav-item left">Diagram</h3>
            </Link>
            <Link className="nav-link" to="/table">
              <h3 className="nav-item">Resources</h3>
            </Link>
          </div>
        </div>
      </section>
      <p className="asterisk">*To locate this resource, search in the Intervention, Review, &
          Extension category on Ed and filter by Component.</p>
      <section className="table-container">
        <section className="column skills">
          <div className="header-row skill-header">
            <h5 className="header-text skill-header-text">Skill</h5>
          </div>
          <div className="main-column skills-text">{getSkills()}</div>
        </section>
        <section className="column other">
          <div className="header-row">
            <h5 className="header-text other-text coach">Skills Coach</h5>
          </div>
          <div className="main-column icons coach-icons">{getCoach()}</div>
        </section>
        <section className="column other">
          <div className="header-row">
            <h5 className="header-text other-text peer">Peer Coach Video</h5>
          </div>
          <div className="main-column icons peer-icons">{getPeer()}</div>
        </section>
        <section className="column other">
          <div className="header-row">
            <h5 className="header-text other-text anchor">Anchor Chart</h5>
          </div>
          <div className="main-column icons anchor-icons">{getAnchor()}</div>
        </section>
        <section className="column other">
          <div className="header-row">
            <h5 className="header-text other-text slides">
              Anchor Chart Slides
            </h5>
          </div>
          <div className="main-column icons slides-icons">
            {getAnchorSlides()}
          </div>
        </section>
        <section className="column other guided-column">
          <div className="header-row guided-header">
            <h5 className="header-text other-text guided">
              Guided Skills Practice*
            </h5>
          </div>
          <div className="far-column">{getGuided()}</div>
        </section>
      </section>
    </div>
  );
};

export default Table;
