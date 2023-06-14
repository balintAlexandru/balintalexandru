import { useEffect, useRef } from "react";

import "./LoadingPageStyle.scss";
import {
  lineShowAnimation,
  triggerHideAnimation,
  triggerScaleAnimation,
  triggerShowAnimationDuration,
  triggerVerticalAnimation,
} from "../../utils/gsap/animations";
import { path } from "../../utils/gsap/constants";

const LoadingPage = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lineShowAnimation(path.loadingLine, 2);
      const startAnimation = setInterval(() => {
        if (loaderRef) {
          if (loaderRef.current.innerHTML !== 100) {
            loaderRef.current.innerHTML =
              Number(loaderRef.current.innerHTML) + 1;
          }
          if (Number(loaderRef.current.innerHTML) > 98) {
            clearInterval(startAnimation);
            loaderRef.current.innerHTML = 100;
            setTimeout(() => {
              triggerHideAnimation(".loading-text", 0.3);
              triggerVerticalAnimation(".last-name", 0.4, 0.3, -65);
              triggerVerticalAnimation(".first-name", 0.4, 0.6, 60);
              triggerScaleAnimation(".loading-page-wrapper", 0.6, 1.5, 0);
              triggerShowAnimationDuration(".loading-role", 0.6, 2.4);
            }, 700);
          }
        }
      }, 30);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="loading-page-wrapper">
        <p className="loading-text">
          <span ref={loaderRef}>0</span>%
        </p>
        <div className="loading-box">
          <span className="last-name">Alexandru</span>
        </div>
        <hr className="loading-line" />
        <div className="loading-box">
          <span className="first-name">{`<Balint/>`}</span>
        </div>
      </div>
      <p className="loading-role">{`{ Front-end developer }`}</p>
    </>
  );
};

export default LoadingPage;
