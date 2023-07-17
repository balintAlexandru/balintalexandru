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
import { CgClose } from "react-icons/cg";
import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import MagneticAnimationButton from "../../../components/MagneticAnimationButton/MagneticAnimationButton";

const Experience = ({
  onClose,
  setShowPersonNavigation,
  setShowDots,
  setTriggerContactAnimation = () => {},
  setTriggerMobileLayout = () => {},
}) => {
  const handleClick = () => {
    triggerShowAnimation(path.developerImage, 0.2);
    setShowPersonNavigation(true);
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
    } else {
      return "2rem";
    }
  };

  const lineSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "20rem";
    } else if (width >= 2880 && width <= 3840) {
      return "16rem";
    } else if (width >= 2304 && width <= 2560) {
      return "14rem";
    } else if (width >= 1366 && width <= 1440) {
      return "9rem";
    } else if (width >= 1024 && width <= 1280) {
      return "7.5rem";
    } else if (width <= 500) {
      return "7.8rem";
    } else {
      return "10rem";
    }
  };

  const buttonLineSize = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "10rem";
    } else if (width >= 2880 && width <= 3840) {
      return "6rem";
    } else if (width >= 2304 && width <= 2560) {
      return "5.5rem";
    } else if (width >= 1024 && width <= 1280) {
      return "3rem";
    } else if (width <= 500) {
      return "3rem";
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
    fadeInShowAnimation(
      path.experienceTitle,
      1,
      window.innerWidth <= 500 ? 0.5 : 0
    );
    fadeInShowAnimation(path.experienceCloseButton, 2);
    lineShowAnimation(path.experienceBottomLine, 1);
    setTimeout(
      () => {
        CombineAnimation(0, 1.2, 0);
        CombineAnimation(1, 1.2, 1);
        CombineAnimation(2, 1.2, 2);
        CombineAnimation(3, 1.2, 3);
      },
      window.innerWidth <= 500 ? 600 : 0
    );

    triggerVerticalAnimationLine(`.line-button`, 1.2, 4.5, buttonLineSize());
    triggerShowAnimationDuration(`.circle-button`, 1.2, 4.9);
    triggerShowAnimationDuration(`.animation-button`, 1.2, 5.3);
    fadeInShowAnimation(".btn-normal", 1, 1.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {window.innerWidth <= 500 && (
                <div className="mobile-experience-info">
                  <p className="line-1 anim-typewriter">
                    In present I work as a freelancer
                  </p>
                  <p className="line-1 anim-2-typewriter">
                    so let's{" "}
                    <span
                      className="keep-in-touch"
                      onClick={() => {
                        setTriggerContactAnimation(true);
                        setTriggerMobileLayout({
                          show: false,
                          page: "",
                        });
                      }}
                    >
                      keep in touch
                    </span>
                    .
                  </p>
                </div>
              )}
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
          title={<CgClose size={iconSize()} />}
          fontSize={iconSize()}
          setShowDots={setShowDots}
        />
      </div>
    </div>
  );
};
export default Experience;
