import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "./Image/Image";
import "./ContentStyle.scss";
import person from "../../../src/assets/images/person.png";
import developer from "../../../src/assets/images/developer.png";
import MagneticPerson from "./MagneticPerson/MagneticPerson";
import MagneticDeveloper from "./MagneticDeveloper/MagneticDeveloper";

const Content = () => {
  const [showCursorDelay, setShowCursorDelay] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const [isDeveloperOpen, setIsDeveloperOpen] = useState(false);

  const handlePersonClickOpen = () => {
    setIsPersonOpen(true);
    gsap.fromTo(
      ".person-wrapper",
      {
        x: 0,
      },
      {
        x: -90,
      }
    );
  };
  const handlePersonClickClose = () => {
    setIsPersonOpen(false);
    gsap.fromTo(
      ".person-wrapper",
      {
        x: -90,
      },
      {
        x: 0,
      }
    );
  };
  const handleDeveloperClickOpen = () => {
    setIsDeveloperOpen(true);
    gsap.fromTo(
      ".developer-wrapper",
      {
        x: 0,
      },
      {
        x: 90,
      }
    );
  };
  const handleDeveloperClickClose = () => {
    setIsDeveloperOpen(false);
    gsap.fromTo(
      ".developer-wrapper",
      {
        x: 90,
      },
      {
        x: 0,
      }
    );
  };
  const handleClosePersonAnimation = () => {
    setIsPersonOpen(false);
    setIsDeveloperOpen(true);
    gsap.fromTo(
      ".person-wrapper",
      {
        x: -90,
      },
      {
        x: 0,
      }
    );
    gsap.fromTo(
      ".developer-wrapper",
      {
        x: 0,
      },
      {
        x: 90,
        delay: 0.4
      }
    );
  }
  const handleCloseDeveloperAnimation = () => {
    setIsDeveloperOpen(false);
    setIsPersonOpen(true);
    gsap.fromTo(
      ".developer-wrapper",
      {
        x: 90,
      },
      {
        x: 0,
      }
    );
    gsap.fromTo(
      ".person-wrapper",
      {
        x: 0,
      },
      {
        x: -90,
        delay: 0.4
      }
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setShowCursorDelay(true);
    }, 200);
  }, []);

  return (
    <div className="content-wrapper">
      <div
        className="person-wrapper"
        onClick={() =>{
          if(isDeveloperOpen){
            handleCloseDeveloperAnimation();
          }else{
            !isPersonOpen ? handlePersonClickOpen() : handlePersonClickClose()
          }
        }
        }
      >
        <Image image={person} />
      </div>
      <div className="vertical-line" />
      <div className="developer-wrapper" onClick={() => {
          if(isPersonOpen){
            handleClosePersonAnimation();
          }else{
            !isDeveloperOpen ? handleDeveloperClickOpen() : handleDeveloperClickClose()}
          }
         
      }>
        <Image image={developer} />
      </div>
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
    </div>
  );
};

export default Content;
