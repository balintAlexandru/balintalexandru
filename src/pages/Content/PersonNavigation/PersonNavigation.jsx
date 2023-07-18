import { useEffect } from "react";
import "./PersonNavigation.scss";
import { path } from "../../../utils/gsap/constants";
import {
  triggerHideAnimation,
  triggerPersonNavigation,
  triggerShowAnimation,
} from "../../../utils/gsap/animations";

const PersonNavigation = ({
  experience,
  aboutMe,
  setShowPersonNavigation,
  setTriggerMobileLayout,
}) => {
  const tabsModel = [
    {
      name: "Experience",
    },
    {
      name: "About me",
    },
  ];

  const handleClick = (name) => {
    const width = window.innerWidth;
    if (width <= 500) {
      setTriggerMobileLayout({
        show: true,
        page: name,
      });
    } else {
      triggerHideAnimation(path.developerImage, 0);
      setShowPersonNavigation(false);
      triggerShowAnimation(path.personDeveloperWrapper, 0);
      if (name === "Experience") {
        experience(true);
      } else {
        aboutMe(true);
      }
    }
  };

  useEffect(() => {
    triggerPersonNavigation(path.personTabs);
  }, []);

  return (
    <div className="person-navigation-wrapper">
      {tabsModel?.map((tab, index) => (
        <span key={`tab-${index}`} onClick={() => handleClick(tab.name)}>
          {tab.name}
        </span>
      ))}
    </div>
  );
};

export default PersonNavigation;
