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

  const verticalAnimation1 = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return -110;
    } else if (width >= 2880 && width <= 3840) {
      return -110;
    } else if (width >= 2304 && width <= 2560) {
      return -130;
    } else if (width >= 1366 && width <= 1440) {
      return -110;
    } else if (width >= 1024 && width <= 1280) {
      return -100;
    } else if (width >= 800 && width <= 1000) {
      return -110;
    } else {
      return -65;
    }
  };

  const verticalAnimation2 = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return 130;
    } else if (width >= 2880 && width <= 3840) {
      return 85;
    } else if (width >= 2304 && width <= 2560) {
      return 145;
    } else if (width >= 1366 && width <= 1440) {
      return 120;
    } else if (width >= 1024 && width <= 1280) {
      return 120;
    } else if (width >= 800 && width <= 1000) {
      return 145;
    } else {
      return 60;
    }
  };
  console.log(verticalAnimation2());
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
              triggerVerticalAnimation(
                ".last-name",
                0.4,
                0.3,
                verticalAnimation1()
              );
              triggerVerticalAnimation(
                ".first-name",
                0.4,
                0.6,
                verticalAnimation2()
              );
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
