import { useEffect } from "react";
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
    triggerShowAnimation(path.personImage, 0.2);
    setShowDeveloperNavigation(true);
    onClose(false);
  };

  const iconSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "5rem";
    } else if (width >= 2880 && width <= 3840) {
      return "4rem";
    } else if (width >= 2304 && width <= 2560) {
      return "3rem";
    } else if (width >= 1024 && width <= 1280) {
      return "2rem";
    } else {
      return "2rem";
    }
  };

  useEffect(() => {
    fadeInShowAnimation(path.technologiesTitle, 1);
    triggerShowScaleAnimation(".globe-wrapper");
    fadeInShowAnimation(path.aboutMeCloseButton, 2);
    fadeInShowAnimation(".technologies-close-button", 2);
    lineShowAnimation(".bottom-line-technologies", 1);
  }, []);

  return (
    <div className="technologies-container">
      <p className="technologies-title">{`< TECHNOLOGIES />`}</p>
      <div className="technologies-globe-wrapper">
        <ExperienceGlobe />
      </div>
      <div className="technologies-bottom-wrapper">
        <div
          className="technologies-close-button"
          onClick={() => {
            handleClick();
          }}
        >
          <MagneticButton title="🗙" fontSize={iconSize()} />
        </div>

        <TechnologiesCard />
      </div>

      <div className="bottom-line-technologies" />
    </div>
  );
};
export default Technologies;
