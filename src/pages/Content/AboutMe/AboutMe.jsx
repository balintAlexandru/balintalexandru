import { useEffect } from "react";
import "./AboutMeStyle.scss";

import { path } from "../../../utils/gsap/constants";
import { textContent } from "../../../utils/textContent";
import {
  fadeInShowAnimation,
  triggerShowAnimation,
  lineShowAnimation,
} from "../../../utils/gsap/animations";

import MagneticButton from "../../../components/MagneticButton/MagneticButton";

const AboutMe = ({ onClose, setShowPersonNavigation }) => {
  const handleClick = () => {
    triggerShowAnimation(path.developerImage, 0.2);
    setShowPersonNavigation(true);
    onClose(false);
  };

  useEffect(() => {
    fadeInShowAnimation(path.aboutMeTitle, 1);
    fadeInShowAnimation(path.aboutMeText, 1);
    fadeInShowAnimation(path.aboutMeCloseButton, 2);
    lineShowAnimation(path.aboutMeBottomLine, 1);
  }, []);

  return (
    <div className="about-me-container">
      <p className="about-me-title">About me</p>
      <div className="about-me-text">
        {textContent.aboutMe?.map((content) => (
          <span>{content.text}</span>
        ))}
      </div>
      <dir className="bottom-line-about-me" />
      <div
        className="about-me-close-button"
        onClick={() => {
          handleClick();
        }}
      >
         <MagneticButton title="Close" fontSize="2rem"/>
      </div>
    </div>
  );
};
export default AboutMe;
