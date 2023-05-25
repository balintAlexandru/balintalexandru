import { useEffect, useState } from "react";
import Image from "./Image/Image";
import "./ContentStyle.scss";
import {
  triggerHideAnimation,
  triggerShowAnimation,
  triggerXPozAnimation,
} from "../../utils/gsap/animations";
import person from "../../../src/assets/images/person.png";
import developer from "../../../src/assets/images/developer.png";
import MagneticPerson from "../../components/MagneticPerson/MagneticPerson";
import MagneticDeveloper from "../../components/MagneticDeveloper/MagneticDeveloper";
import DeveloperNavigation from "./DeveloperNavigation/DeveloperNavigation";
import PersonNavigation from "./PersonNavigation/PersonNavigation";
import Experience from "./Experience/Experience";
import AboutMe from "./AboutMe/AboutMe";

import { path } from "../../utils/gsap/constants";
import TransitionOut from "../../components/TransitionOut/TransitionOut";

const Content = () => {
  const [showCursorDelay, setShowCursorDelay] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);
  const [showPersonNavigation, setShowPersonNavigation] = useState(false);
  const [showDeveloperNavigation, setShowDeveloperNavigation] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(false);
  const [selectedAboutMe, setSelectedAboutMe] = useState(false);
  // const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCursorDelay(true);
    }, 200);
  }, []);

  return (
    <>
      <TransitionOut />
      <div className="content-wrapper">
        <div
          className="person-wrapper"
          onClick={() => {
            if (isDeveloperOpen) {
              triggerXPozAnimation(path.personImage, -90, 0, 1, 1, 0, 0.5);
              triggerXPozAnimation(path.developerTabs, 0, 0, 1, 0, 0.1, 0.2);
              triggerXPozAnimation(path.developerImage, 0, 90, 1, 1, 0.5, 0.5);
              setTimeout(() => {
                setShowDeveloperNavigation(false);
                setShowPersonNavigation(true);
              }, 500);
              setIsPersonOpen(true);
              setIsDeveloperOpen(false);
            } else if (isPersonOpen) {
              triggerXPozAnimation(path.developerImage, 90, 0, 1, 1, 0, 0.5);
              triggerXPozAnimation(path.personTabs, 90, 90, 1, 0, 0.1, 0.2);
              setTimeout(() => {
                setShowPersonNavigation(false);
              }, 500);
              setIsPersonOpen(false);
            } else {
              triggerXPozAnimation(path.developerImage, 0, 90, 1, 1, 0, 0.5);
              setIsPersonOpen(true);
              setShowPersonNavigation(true);
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
          />
        )}
        {showDeveloperNavigation && <DeveloperNavigation />}

        <div
          className="developer-wrapper"
          onClick={() => {
            if (isPersonOpen) {
              triggerXPozAnimation(path.developerImage, 90, 0, 1, 1, 0, 0.5);
              triggerXPozAnimation(path.personTabs, 90, 90, 1, 0, 0.1, 0.2);
              triggerXPozAnimation(path.personImage, 0, -90, 1, 1, 0.5, 0.5);
              setTimeout(() => {
                setShowPersonNavigation(false);
                setShowDeveloperNavigation(true);
              }, 500);
              setIsPersonOpen(false);
              setIsDeveloperOpen(true);
            } else if (isDeveloperOpen) {
              triggerXPozAnimation(path.personImage, -90, 0, 1, 1, 0, 0.5);
              triggerXPozAnimation(path.developerTabs, 0, 0, 1, 0, 0.1, 0.1);
              setTimeout(() => {
                setShowDeveloperNavigation(false);
              }, 500);
              setIsDeveloperOpen(false);
            } else {
              triggerXPozAnimation(path.personImage, 0, -90, 1, 1, 0, 0.5);
              setIsDeveloperOpen(true);
              setShowDeveloperNavigation(true);
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
          <p className="line-1 anim-2-typewriter">so let's keep in touch.</p>
        </div>
        <div className="text-dot-1" />
        <div className="text-dot-2" />
        <div className="text-dot-3" />
      </div>
    </>
  );
};

export default Content;
