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

  const iconSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "5rem";
    } else {
      return "2rem";
    }
  };

  useEffect(() => {
    fadeInShowAnimation(path.aboutMeTitle, 1);
    fadeInShowAnimation(path.aboutMeCloseButton, 2);
    lineShowAnimation(path.aboutMeBottomLine, 1);
    document.querySelectorAll(".text-info").forEach((element, index) => {
      fadeInShowAnimation(element, 2, index * 0.5);
    });
  }, []);

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">ABOUT ME</h1>
      <div className="about-me-text">
        {textContent.aboutMe?.map((content, index) => (
          <span key={`text-${index}`} className="text-info">
            {content.text}
          </span>
        ))}
      </div>
      <dir className="bottom-line-about-me" />
      <div
        className="about-me-close-button"
        onClick={() => {
          handleClick();
        }}
      >
        <MagneticButton title="🗙" fontSize={iconSize()} />
      </div>
    </div>
  );
};
export default AboutMe;
