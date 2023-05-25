import "./MagneticButton.scss";
import gsap, { Power4, Elastic } from "gsap";
import { useEffect } from "react";
import { triggerHideAnimation } from "../../utils/gsap/animations";

const MagneticButton = (props) => {
  const { title, click = () => {}, fontSize } = props;
  useEffect(() => {
    const magnet = document.querySelector(".magnetic-created");
    const text = document.querySelector(".btn-text-created");
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
      const text = document.querySelector(".btn-text-created");
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
  }, []);
  return (
    <div
      className="wrapper-created"
      onClick={() => {
        click();
        triggerHideAnimation(".text-wrapper", 0);
        triggerHideAnimation(".text-dot-1", 0);
        triggerHideAnimation(".text-dot-2", 0);
        triggerHideAnimation(".text-dot-3", 0);
      }}
    >
      <div
        className="btn-click-created magnetic-created"
        data-strength="25"
        data-strength-text="2"
      >
        <span className="btn-text-created" style={{ fontSize: fontSize }}>
          <span className="btn-text-inner-created">{title}</span>
        </span>
      </div>
    </div>
  );
};

export default MagneticButton;
