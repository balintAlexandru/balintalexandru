import { useEffect, useState } from "react";
import Image from "./Image/Image";
import "./ContentStyle.scss";
import {
  triggerHideAnimation,
  triggerShowAnimation,
  triggerXPozAnimation,
} from "../../utils/gsap/animations";
import person from "../../../src/assets/images/person.svg";
import developer from "../../../src/assets/images/developer.svg";
import MagneticPerson from "../../components/MagneticPerson/MagneticPerson";
import MagneticDeveloper from "../../components/MagneticDeveloper/MagneticDeveloper";
import DeveloperNavigation from "./DeveloperNavigation/DeveloperNavigation";
import PersonNavigation from "./PersonNavigation/PersonNavigation";
import Experience from "./Experience/Experience";
import AboutMe from "./AboutMe/AboutMe";

import { path } from "../../utils/gsap/constants";

import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";

const Content = ({ setTriggerMobileLayout, setTriggerContactAnimation }) => {
  const [showCursorDelay, setShowCursorDelay] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const [showPersonNavigation, setShowPersonNavigation] = useState(false);
  const [showDeveloperNavigation, setShowDeveloperNavigation] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(false);
  const [selectedAboutMe, setSelectedAboutMe] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState(false);
  const [selectedProjects, setSelectedProjects] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCursorDelay(true);
    }, 200);

    triggerShowAnimation(".content-wrapper", 1.5, 7);
  }, []);

  const personMove = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return -120;
    } else if (width >= 2880 && width <= 3840) {
      return -110;
    } else if (width >= 2304 && width <= 2560) {
      return -105;
    } else if (width >= 1366 && width <= 1440) {
      return -60;
    } else if (width >= 1024 && width <= 1280) {
      return -50;
    } else if (width >= 800 && width <= 1000) {
      return -40;
    } else if (width <= 500) {
      return -45;
    } else {
      return -70;
    }
  };

  const developerMove = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return 120;
    } else if (width >= 2880 && width <= 3840) {
      return 110;
    } else if (width >= 2304 && width <= 2560) {
      return 105;
    } else if (width >= 1366 && width <= 1440) {
      return 60;
    } else if (width >= 1024 && width <= 1280) {
      return 50;
    } else if (width >= 800 && width <= 1000) {
      return 40;
    } else if (width <= 500) {
      return 45;
    } else {
      return 70;
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div
          className="person-wrapper"
          onClick={() => {
            if (!selectedExperience && !selectedAboutMe) {
              if (isDeveloperOpen) {
                triggerXPozAnimation(
                  path.personImage,
                  personMove(),
                  0,
                  1,
                  1,
                  0,
                  0.5
                );
                triggerXPozAnimation(path.developerTabs, -40, 90, 1, 0, 0.1, 1);
                triggerXPozAnimation(
                  path.developerImage,
                  0,
                  developerMove(),
                  1,
                  1,
                  0.5,
                  0.5
                );
                setTimeout(() => {
                  setShowDeveloperNavigation(false);
                  setShowPersonNavigation(true);
                }, 500);
                setIsPersonOpen(true);
                setIsDeveloperOpen(false);
              } else if (isPersonOpen) {
                triggerXPozAnimation(
                  path.developerImage,
                  developerMove(),
                  0,
                  1,
                  1,
                  0,
                  0.5
                );
                triggerXPozAnimation(path.personTabs, 40, -90, 1, 0, 0.1, 1);
                setTimeout(() => {
                  setShowPersonNavigation(false);
                }, 500);
                setIsPersonOpen(false);
              } else {
                triggerXPozAnimation(
                  path.developerImage,
                  0,
                  developerMove(),
                  1,
                  1,
                  0,
                  0.5
                );
                setIsPersonOpen(true);
                setShowPersonNavigation(true);
              }
            }
          }}
        >
          <Image image={person} />
        </div>

        <div className="vertical-line" />

        {showPersonNavigation && (
          <PersonNavigation
            experience={setSelectedExperience}
            aboutMe={setSelectedAboutMe}
            setShowPersonNavigation={setShowPersonNavigation}
            setTriggerMobileLayout={setTriggerMobileLayout}
          />
        )}
        {showDeveloperNavigation && (
          <DeveloperNavigation
            projects={setSelectedProjects}
            technologies={setSelectedTechnologies}
            setShowDeveloperNavigation={setShowDeveloperNavigation}
            setTriggerMobileLayout={setTriggerMobileLayout}
          />
        )}

        <div
          className="developer-wrapper"
          onClick={() => {
            if (!selectedTechnologies && !selectedProjects) {
              if (isPersonOpen) {
                triggerXPozAnimation(
                  path.developerImage,
                  developerMove(),
                  0,
                  1,
                  1,
                  0,
                  0.5
                );
                triggerXPozAnimation(path.personTabs, 40, -90, 1, 0, 0.1, 1);
                triggerXPozAnimation(
                  path.personImage,
                  0,
                  personMove(),
                  1,
                  1,
                  0.5,
                  0.5
                );
                setTimeout(() => {
                  setShowPersonNavigation(false);
                  setShowDeveloperNavigation(true);
                }, 500);
                setIsPersonOpen(false);
                setIsDeveloperOpen(true);
              } else if (isDeveloperOpen) {
                triggerXPozAnimation(
                  path.personImage,
                  personMove(),
                  0,
                  1,
                  1,
                  0,
                  0.5
                );
                triggerXPozAnimation(path.developerTabs, -40, 90, 1, 0, 0.1, 1);
                setTimeout(() => {
                  setShowDeveloperNavigation(false);
                }, 500);
                setIsDeveloperOpen(false);
              } else {
                triggerXPozAnimation(
                  path.personImage,
                  0,
                  personMove(),
                  1,
                  1,
                  0,
                  0.5
                );
                setIsDeveloperOpen(true);
                setShowDeveloperNavigation(true);
              }
            }
          }}
        >
          <Image image={developer} />
        </div>

        {selectedExperience && (
          <div className="person-developer-content">
            <Experience
              onClose={setSelectedExperience}
              setShowPersonNavigation={setShowPersonNavigation}
            />
          </div>
        )}
        {selectedAboutMe && (
          <div className="person-developer-content">
            <AboutMe
              onClose={setSelectedAboutMe}
              setShowPersonNavigation={setShowPersonNavigation}
            />
          </div>
        )}

        {selectedTechnologies && (
          <div className="developer-person-content">
            <Technologies
              onClose={setSelectedTechnologies}
              setShowDeveloperNavigation={setShowDeveloperNavigation}
            />
          </div>
        )}

        {selectedProjects && (
          <div className="developer-person-content">
            <Projects
              onClose={setSelectedProjects}
              setShowDeveloperNavigation={setShowDeveloperNavigation}
            />
          </div>
        )}

        {showCursorDelay && (
          <>
            <MagneticPerson
              text="Person"
              element={document.querySelector(".person-wrapper")}
            />
            <MagneticDeveloper
              text="Developer"
              element={document.querySelector(".developer-wrapper")}
            />
          </>
        )}
        <div className="text-wrapper">
          <p className="line-1 anim-typewriter">
            In present I work as a freelancer
          </p>
          <p className="line-1 anim-2-typewriter">
            so let's{" "}
            <span
              className="keep-in-touch"
              onClick={() => {
                setTriggerContactAnimation(true);
                triggerShowAnimation(path.developerImage, 0.2);
                setShowPersonNavigation(true);
                setSelectedExperience(false);
                triggerHideAnimation(".text-wrapper", 0);
                triggerHideAnimation(".text-dot-1", 0);
                triggerHideAnimation(".text-dot-2", 0);
                triggerHideAnimation(".text-dot-3", 0);
              }}
            >
              keep in touch
            </span>
            .
          </p>
        </div>
        <div className="text-dot-1" />
        <div className="text-dot-2" />
        <div className="text-dot-3" />
      </div>
    </>
  );
};

export default Content;
