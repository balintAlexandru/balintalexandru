import { useEffect } from "react";
import "./DeveloperNavigation.scss";
import { gsap } from "gsap";

const triggerDeveloperNavigation = () => {
    gsap.fromTo(
      ".developer-navigation-wrapper",
      {
        x:90,
        opacity:0,
      },
      {
        x:0,
        opacity:1,
        delay:0.2,
        duration:0.3
      }
    );
  };

const DeveloperNavigation = () => {
    useEffect(() => {
        triggerDeveloperNavigation()
    },[])

    return <div className="developer-navigation-wrapper">
        <span>Technologies</span>
        <span>Projects</span>
    </div>;
}

export default DeveloperNavigation;