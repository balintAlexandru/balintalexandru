import gsap from "gsap";
import React from "react";
import { useEffect } from "react";

import "./TransitionInStyle.scss";
import ContactForm from "../ContactForm/ContactForm";

import circleLarge from "../../assets/images/circle-large.svg";
import circleSmall from "../../assets/images/circle-small.svg";
import { triggerHideAnimation } from "../../utils/gsap/animations";
import { CgClose } from "react-icons/cg";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
  setTimeout(() => {
    document.querySelector(".container-in").style.display = "none";
  }, 500);
  tl.to(".container-in-screen", {
    duration: 0.8,
    top: "-100%",
    ease: "Power4.easeInOut",
    // delay: 0.8,
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

const TransitionIn = ({ setTriggerContactAnimation }) => {
  useEffect(() => {
    pageTransitionIn();
  }, []);

  const currentWidth = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "6rem";
    } else if (width >= 2880 && width <= 3840) {
      return "5rem";
    } else if (width <= 500) {
      return "3rem";
    } else {
      return "3rem";
    }
  };

  return (
    <div className="container-in">
      <div className="container-in-screen">
        <p
          className="close-contact"
          style={{
            color: "white",
            fontSize: currentWidth(),
            position: "absolute",
            top: "5rem",
            right: "7rem",
            cursor: "pointer",
          }}
          onClick={() => {
            triggerHideAnimation(".circle-large", 0.2);
            triggerHideAnimation(".circle-small", 0.2);
            triggerTransitionOut();
            setTimeout(() => {
              setTriggerContactAnimation(false);
            }, 500);
          }}
        >
          <CgClose size={currentWidth()} />
        </p>
        <ContactForm
          click={triggerTransitionOut}
          setTriggerContactAnimation={setTriggerContactAnimation}
        />
        <div className="rounded-div-wrap top">
          <div className="rounded-div"></div>
        </div>
        <div className="rounded-div-wrap bottom">
          <div className="rounded-div"></div>
        </div>
      </div>
      <div className="circle-large">
        <LazyLoadImage
          src={circleLarge}
          width={"100%"}
          height={"100%"}
          alt="poza"
        />
      </div>
      <div className="circle-small">
        <LazyLoadImage
          src={circleSmall}
          width={"100%"}
          height={"100%"}
          alt="poza"
        />
      </div>
    </div>
  );
};

export default TransitionIn;
