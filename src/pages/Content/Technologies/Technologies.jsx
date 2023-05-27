import { useEffect, useState } from "react";
import "./TechnologiesStyle.scss";

import { path } from "../../../utils/gsap/constants";

import {
  fadeInShowAnimation,
  triggerShowAnimation,
  lineShowAnimation,
  triggerShowScaleAnimation,
} from "../../../utils/gsap/animations";

import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import ExperienceGlobe from "../../../components/ExperienceGlobe/ExperienceGlobe";
import TechnologiesCard from "../../../components/TechnologiesCard/TechnologiesCard";

const Technologies = ({ onClose, setShowDeveloperNavigation }) => {
  const handleClick = () => {
    triggerShowAnimation(path.developerImage, 0.2);
    setShowDeveloperNavigation(true);
    onClose(false);
  };

  useEffect(() => {
    localStorage.setItem("cardName", " ");
    fadeInShowAnimation(path.technologiesTitle, 1);
    triggerShowScaleAnimation(".globe-wrapper");
    fadeInShowAnimation(path.aboutMeCloseButton, 2);
    lineShowAnimation(".bottom-line-technologies", 1);
  }, []);

  return (
    <div className="technologies-container">
      <p className="technologies-title">Technologies</p>
      <div className="technologies-globe-wrapper">
        <ExperienceGlobe />
      </div>
      <div className="technologies-bottom-wrapper">
        <div
          className="about-me-close-button"
          onClick={() => {
            handleClick();
          }}
        >
          <MagneticButton title="Close" fontSize="2rem" />
        </div>
        <TechnologiesCard />
      </div>

      <dir className="bottom-line-technologies" />
    </div>
  );
};
export default Technologies;
