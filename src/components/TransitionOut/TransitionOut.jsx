import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

import "./TransitionOutStyle.scss";
import LoadingPage from "../LoadingPage/LoadingPage";

function transitionOut() {
  var tl = gsap.timeline();

  tl.set(".loading-screen", {
    top: "0",
  });

  if (window.innerWidth > 540) {
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh",
    });
  }

  tl.set(".loading-words", {
    opacity: 1,
    y: -50,
  });

  if (window.innerWidth > 540) {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh",
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh",
    });
  }

  tl.set("html", {
    cursor: "wait",
  });

  tl.to(".loading-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power4.easeInOut",
    delay: 5.8,
  });

  tl.to(
    ".loading-screen .rounded-div-wrap.bottom",
    {
      duration: 1,
      height: "0vh",
      ease: "Power4.easeInOut",
    },
    "=-.8"
  );

  tl.to(
    ".loading-words",
    {
      duration: 0.3,
      opacity: 0,
      ease: "linear",
    },
    "=-.8"
  );

  tl.set(".loading-screen", {
    top: "calc(-100%)",
  });

  tl.set(".loading-screen .rounded-div-wrap.bottom", {
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

  tl.set(
    "html",
    {
      cursor: "auto",
    },
    "=-.8"
  );
}

const TransitionOut = () => {
  useEffect(() => {
    setTimeout(() => {
      transitionOut();
    }, 500);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div className="loading-words">
          <LoadingPage />
        </div>
        <div className="rounded-div-wrap bottom">
          <div className="rounded-div"></div>
        </div>
      </div>
    </div>
  );
};

export default TransitionOut;
