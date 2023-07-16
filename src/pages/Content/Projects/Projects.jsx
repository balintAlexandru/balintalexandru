import { useEffect, useRef, useState } from "react";
import "./ProjectsStyle.scss";

import { path } from "../../../utils/gsap/constants";
import { PROJECTS } from "../../../utils/projects";
import companyApp from "../../../assets/videos/companyApp.mp4";
import managementApp from "../../../assets/videos/managementApp.mp4";
import mobileApp from "../../../assets/videos/mobileApp.mp4";
import portfolio from "../../../assets/videos/portfolio.mp4";

import {
  fadeInShowAnimation,
  triggerShowAnimation,
  lineShowAnimation,
  triggerHideTransitionScaleAnimation,
  triggerHideAnimation,
} from "../../../utils/gsap/animations";

import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import MagneticButtonPlay from "../../../components/MagneticButtonPlay/MagneticButtonPlay";

const Projects = ({ onClose, setShowDeveloperNavigation }) => {
  const [currentProject, setCurrentProject] = useState("");
  const [showControl, setShowControl] = useState(false);
  const videoRef = useRef(null);

  const videos = {
    companyApp,
    managementApp,
    mobileApp,
    portfolio,
  };

  const handlePlay = () => {
    setShowControl(true);
    const elem = videoRef.current;
    if (elem) {
      elem.currentTime = 0;
      elem.play();
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

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
    } else {
      return "2rem";
    }
  };

  useEffect(() => {
    fadeInShowAnimation(".projects-title", 1);
    fadeInShowAnimation(path.aboutMeCloseButton, 2);
    lineShowAnimation(".bottom-line-projects", 1);

    document.addEventListener("fullscreenchange", function () {
      if (!document.fullscreenElement) {
        const elem = videoRef.current;
        if (elem) {
          elem.pause();
          setShowControl(false);
          elem.currentTime = 9;
        }
      }
    });
  }, []);

  return (
    <div className="projects-container">
      <p className="projects-title">{`< PROJECTS />`}</p>
      <div className="projects-list-wrapper">
        {PROJECTS?.map((project, index) => (
          <ProjectCard
            key={`project-card-${index}`}
            index={index}
            project={project}
            setCurrentProject={setCurrentProject}
          />
        ))}
      </div>

      <div className="project-wrapper">
        <p
          className="project-close-presentation"
          style={{
            position: "absolute",
            top: "2.5rem",
            right: "2.5rem",
            cursor: "pointer",
            color: "white",
            fontSize: iconSize(),
          }}
          size="2.5rem"
          color="white"
          onClick={() => {
            triggerHideTransitionScaleAnimation(".transition-in-project");
            triggerHideAnimation(".project-wrapper", 0);
            setCurrentProject("");
          }}
        >
          🗙
        </p>
        <div className="project-content">
          <h1>{currentProject.name}</h1>
          <ul>
            <li>
              <h3>Year</h3>
              <span className="info">• {currentProject.year}</span>
            </li>
            <li>
              <h3>Client</h3>
              <span className="info">• {currentProject.client}</span>
            </li>
            <li>
              <h3>Technologies</h3>
              <div className="project-technologies-wrapper">
                {currentProject.technologies?.map((item, index) => (
                  <span
                    key={`icon-${index}`}
                    style={{
                      color: item.color,
                      border: `0.1rem solid ${item.color}`,
                    }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </li>
          </ul>
          <p className="project-description">{currentProject.description}</p>
          <div className="project-video-wrapper">
            {currentProject?.video && (
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                preload="metadata"
                controls={showControl}
              >
                <source
                  src={`${videos[currentProject?.video]}#t=9`}
                  type="video/mp4"
                />
              </video>
            )}
            <div className="button-play-wrapper">
              <MagneticButtonPlay
                title="▶"
                fontSize={iconSize()}
                click={handlePlay}
              />
            </div>
          </div>
          <span className="project-copyright">
            {`© All rights reserved to ${currentProject.client}`}
          </span>
        </div>
      </div>

      <div
        className="projects-close-button"
        onClick={() => {
          handleClick();
        }}
      >
        <MagneticButton title="🗙" fontSize={iconSize()} />
      </div>

      <div className="bottom-line-projects" />
      <div className="transition-in-project" />
    </div>
  );
};
export default Projects;
