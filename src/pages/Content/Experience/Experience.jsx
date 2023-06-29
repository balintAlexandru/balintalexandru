import { useEffect } from "react";

import { path } from "../../../utils/gsap/constants";
import {
  fadeInShowAnimation,
  triggerShowAnimation,
  lineShowAnimation,
  triggerShowAnimationDuration,
  triggerVerticalAnimationLine,
} from "../../../utils/gsap/animations";
import { EXPERIENCE_LIST } from "../../../utils/experience";

import "./ExperienceStyle.scss";
import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import MagneticAnimationButton from "../../../components/MagneticAnimationButton/MagneticAnimationButton";

const Experience = ({ onClose, setShowPersonNavigation, setShowDots }) => {
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

  const lineSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "20rem";
    } else {
      return "10rem";
    }
  };

  const buttonLineSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "10rem";
    } else {
      return "2.5rem";
    }
  };
  const CombineAnimation = (index, duration, delay) => {
    triggerShowAnimationDuration(
      `.circle-${index}`,
      duration + 0.2,
      delay + 0.2
    );
    triggerShowAnimationDuration(`.year-${index}`, duration + 0.2, delay + 0.8);
    triggerVerticalAnimationLine(
      `.line-experience-${index}`,
      duration + 0.5,
      delay + 0.6,
      lineSize()
    );
    triggerShowAnimationDuration(
      `.wrapper-${index}`,
      duration + 2,
      delay + 1.5
    );
  };

  useEffect(() => {
    fadeInShowAnimation(path.experienceTitle, 1);
    fadeInShowAnimation(path.experienceCloseButton, 2);
    lineShowAnimation(path.experienceBottomLine, 1);
    CombineAnimation(0, 1.2, 0);
    CombineAnimation(1, 1.2, 1);
    CombineAnimation(2, 1.2, 2);
    CombineAnimation(3, 1.2, 3);
    triggerVerticalAnimationLine(`.line-button`, 1.2, 4.5, buttonLineSize());
    triggerShowAnimationDuration(`.circle-button`, 1.2, 4.9);
    triggerShowAnimationDuration(`.animation-button`, 1.2, 5.3);
    fadeInShowAnimation(".btn-normal", 1, 1.5);
  }, []);

  return (
    <div className="experience-container">
      <h1 className="experience-title">EXPERIENCE</h1>
      <div className="experience-text">
        {EXPERIENCE_LIST?.map((item, index) => (
          <div className={`experience-item-container`} key={`item-${index}`}>
            <div className="item-wrapper">
              <div className="row-1">
                <div className={`circle circle-${index}`} />
                <span className={`year-${index}`}>{item.year}</span>
              </div>
              <div className="row-2">
                <div className={`line-experience-${index}`} />
                <div className={`wrapper wrapper-${index}`}>
                  <img src={item.image} alt="icon" />
                  <div className="item-text">
                    <h2>{item.name}</h2>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="experience-button-wrapper">
          <dir className="line-button line" />
          <div className="button-wrapper">
            <dir className="circle circle-button" />
            <div className="animation-button">
              <MagneticAnimationButton />
            </div>
          </div>
        </div>
      </div>
      <dir className="bottom-line-experience" />
      <div
        className="experience-close-button"
        onClick={() => {
          handleClick();
        }}
      >
        <MagneticButton
          title="🗙"
          fontSize={iconSize()}
          setShowDots={setShowDots}
        />
      </div>
    </div>
  );
};
export default Experience;
