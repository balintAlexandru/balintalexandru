import { useEffect, useRef } from "react";

import "./LoadingPageStyle.scss";
import {
  lineShowAnimation,
  triggerHideAnimation,
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
              triggerHideAnimation(path.loadingPage, 0.3);
            }, 700);
          }
        }
      }, 30);
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="loading-page-wrapper">
      <p>
        <span ref={loaderRef}>0</span>%
      </p>
      <hr className="loading-line" />
    </div>
  );
};

export default LoadingPage;
