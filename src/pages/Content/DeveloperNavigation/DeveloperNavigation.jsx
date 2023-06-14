import { useEffect } from "react";
import "./DeveloperNavigation.scss";
import { path } from "../../../utils/gsap/constants";
import {
  triggerDeveloperNavigation,
  triggerHideAnimation,
  triggerShowAnimation,
} from "../../../utils/gsap/animations";

const DeveloperNavigation = ({
  projects,
  technologies,
  setShowDeveloperNavigation,
}) => {
  const tabsModel = [
    {
      name: "Projects",
    },
    {
      name: "Technologies",
    },
  ];

  const handleClick = (name) => {
    triggerHideAnimation(path.personImage, 0);
    setShowDeveloperNavigation(false);
    triggerShowAnimation(path.developerPersonWrapper, 0);
    if (name === "Projects") {
      projects(true);
    } else {
      technologies(true);
    }
  };

  useEffect(() => {
    triggerDeveloperNavigation(path.developerTabs);
  }, []);

  return (
    <div className="developer-navigation-wrapper">
      {tabsModel?.map((tab, index) => (
        <span key={`tab-${index}`} onClick={() => handleClick(tab.name)}>
          {tab.name}
        </span>
      ))}
    </div>
  );
};

export default DeveloperNavigation;
