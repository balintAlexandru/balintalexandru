import "./MagneticDeveloperStyle.scss";
import gsap from "gsap";
import { useEffect } from "react";


function initStickyCursorWithDelay(element) {
  const cursorSpan = document.querySelector(".mouse-pos-developer-span");
  const cursorBtn = document.querySelector(".mouse-pos-developer-btn");
  let posXBtn = 0;
  let posYBtn = 0;
  let posXSpan = 0;
  let posYSpan = 0;
  let mouseX = 0;
  let mouseY = 0;
  if (document.querySelector(".mouse-pos-developer-btn, .mouse-post-developer-span")) {
    gsap.to({}, 0.0083333333, {
      repeat: -1,
      onRepeat: function () {
        if (document.querySelector(".mouse-pos-developer-btn")) {
          posXBtn += (mouseX - posXBtn) / 5;
          posYBtn += (mouseY - posYBtn) / 5;
          gsap.set(cursorBtn, {
            css: {
              left: posXBtn,
              top: posYBtn,
            },
          });
        }
        if (document.querySelector(".mouse-pos-developer-span")) {
          posXSpan += (mouseX - posXSpan) / 4;
          posYSpan += (mouseY - posYSpan) / 4;
          gsap.set(cursorSpan, {
            css: {
              left: posXSpan,
              top: posYSpan,
            },
          });
        }
      },
    });
  }
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  element.addEventListener("mouseenter", () => {
    document.querySelector(".mouse-pos-developer-btn").classList.add("active-btn");
    document.querySelector(".mouse-pos-developer-span").classList.add("active-btn");
  });

  element.addEventListener("mouseleave", () => {
    document
      .querySelector(".mouse-pos-developer-btn")
      .classList.remove("active-btn");
    document
      .querySelector(".mouse-pos-developer-span")
      .classList.remove("active-btn");
  });
}

const MagneticDeveloper = (props) => {
  const { element, text} = props;
  useEffect(() => {
    initStickyCursorWithDelay(element);
  }, []);

  return (
    <div className="cursor-delay-wrapper">
      <div className="mouse-pos-developer-btn"></div>
      <div className="mouse-pos-developer-span">
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MagneticDeveloper;
