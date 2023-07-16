import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

import Experience from "../../pages/Content/Experience/Experience";
import AboutMe from "../../pages/Content/AboutMe/AboutMe";
import Projects from "../../pages/Content/Projects/Projects";
import Technologies from "../../pages/Content/Technologies/Technologies";

import "./TransitionMobileStyle.scss";

import { CgClose } from "react-icons/cg";

function pageTransitionIn() {
  var tl = gsap.timeline();

  tl.set(".container-in-screen", {
    top: "100%",
  });

  if (window.innerWidth > 540) {
    tl.set(".container-in-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".container-in-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.to(".container-in-screen", {
    duration: 0.5,
    top: "0%",
    ease: "Power4.easeIn",
  });

  if (window.innerWidth > 540) {
    tl.to(
      ".container-in-screen .rounded-div-wrap.top",
      {
        duration: 0.4,
        height: "10vh",
        ease: "Power4.easeIn",
      },
      "=-.5"
    );
  } else {
    tl.to(
      ".container-in-screen .rounded-div-wrap.top",
      {
        duration: 0.4,
        height: "10vh",
        ease: "Power4.easeIn",
      },
      "=-.5"
    );
  }
}

const triggerTransitionOut = () => {
  var tl = gsap.timeline();
  tl.to(".container-in-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power4.easeInOut",
  });

  tl.to(
    ".container-in-screen .rounded-div-wrap.bottom",
    {
      duration: 1,
      height: "0vh",
      ease: "Power4.easeInOut",
    },
    "=-.8"
  );

  tl.set(".container-in-screen", {
    top: "calc(-100%)",
  });

  tl.set(".container-in-screen .rounded-div-wrap.bottom", {
    height: "0vh",
  });

  tl.to(
    "main .once-in",
    {
      duration: 1,
      y: "0vh",
      stagger: 0.05,
      ease: "Expo.easeOut",
      clearProps: "true",
    },
    "=-.8"
  );
};

const TransitionMobile = ({ triggerMobileLayout, setTriggerMobileLayout }) => {
  useEffect(() => {
    pageTransitionIn();
  }, []);

  const currentPage = (name) => {
    switch (name) {
      case "Experience":
        return <Experience />;
      case "About me":
        return <AboutMe />;
      case "Projects":
        return <Projects />;
      case "Technologies":
        return <Technologies />;
      default:
        break;
    }
  };
  return (
    <div className="container-in">
      <div className="container-in-screen">
        <p
          className="close-contact"
          style={{
            color: "white",
            fontSize: "3rem",
            position: "absolute",
            top: "5rem",
            right: "7rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setTimeout(() => {
              setTriggerMobileLayout({
                show: false,
                page: "",
              });
            }, 1000);

            triggerTransitionOut();
          }}
        >
          <CgClose size={"3rem"} />
        </p>
        {currentPage(triggerMobileLayout.page)}
        <div className="rounded-div-wrap top">
          <div className="rounded-div"></div>
        </div>
        <div className="rounded-div-wrap bottom">
          <div className="rounded-div"></div>
        </div>
      </div>
    </div>
  );
};

export default TransitionMobile;
