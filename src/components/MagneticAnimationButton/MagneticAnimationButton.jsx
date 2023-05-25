import gsap, { Power2, Power3, Power4, Elastic } from "gsap";
import React, { useEffect } from "react";

import "./MagneticAnimationButtonStyle.scss";
import { triggerShowAnimation } from "../../utils/gsap/animations";

const MagneticAnimationButton = () => {
  useEffect(() => {
    const magnet = document.querySelector(".magnetic");
    const button = document.querySelector(".btn-click.magnetic");
    const btnFill = document.querySelector(".btn-fill");
    const innerBtnText = document.querySelector(".btn-text-inner.change");
    const text = document.querySelector(".btn-text");
    if (window.innerWidth > 540) {
      magnet.addEventListener("mousemove", moveMagnet);
      magnet.addEventListener("mouseleave", (event) => {
        gsap.to(event.currentTarget, 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
        gsap.to(text, 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
      });
    }

    function moveMagnet(event) {
      const text = document.querySelector(".btn-text");

      const magnetButton = event.currentTarget;
      const bounding = magnetButton.getBoundingClientRect();
      const magnetsStrength = magnetButton.getAttribute("data-strength");
      const magnetsStrengthText =
        magnetButton.getAttribute("data-strength-text");

      gsap.to(magnetButton, 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
      gsap.to(text, 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrengthText,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
    }

    button.addEventListener("mouseenter", () => {
      gsap.to(btnFill, 0.6, {
        startAt: { y: "76%" },
        y: "0%",
        ease: Power2.easeInOut,
      });

      gsap.to(innerBtnText, 0.3, {
        startAt: { color: "white" },
        color: "#FFFFFF",
        ease: Power3.easeIn,
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(btnFill, 0.6, {
        y: "-76%",
        ease: Power2.easeInOut,
      });
      gsap.to(innerBtnText, 0.3, {
        color: "white",
        ease: Power3.easeOut,
        delay: 0.3,
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="btn btn-normal">
        <div
          onClick={() => {
            triggerShowAnimation(".text-wrapper", 1, 1);
            triggerShowAnimation(".text-dot-1", 1.5, 0.6);
            triggerShowAnimation(".text-dot-2", 1.5, 0.3);
            triggerShowAnimation(".text-dot-3", 1.5, 0);
          }}
          className="btn-click magnetic"
          data-strength="25"
          data-strength-text="15"
        >
          <div className="btn-fill"></div>
          <span className="btn-text">
            <span className="btn-text-inner change">Present</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MagneticAnimationButton;
