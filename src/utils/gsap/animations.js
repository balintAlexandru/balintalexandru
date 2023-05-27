import { gsap } from "gsap";

export const triggerXPozAnimation = (
  element,
  startXPoz,
  endXPoz,
  opacityStart,
  opacityEnd,
  delay,
  duration
) => {
  gsap.fromTo(
    element,
    {
      x: startXPoz,
      opacity: opacityStart,
    },
    {
      x: endXPoz,
      opacity: opacityEnd,
      delay: delay,
      duration: duration,
    }
  );
};

export const triggerHideAnimation = (element, duration) => {
  gsap.to(element, duration, { opacity: 0, display: "none" });
};

export const triggerShowAnimation = (element, duration, delay) => {
  gsap.to(element, {
    opacity: 1,
    display: "flex",
    duration: duration,
    delay: delay || 0,
  });
};

export const triggerShowAnimationDuration = (element, duration, delay) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      display: "none",
    },
    {
      opacity: 1,
      duration: duration,
      delay: delay || 0,
      display: "flex",
    }
  );
};

export const triggerVerticalAnimationLine = (
  element,
  duration,
  delay,
  height
) => {
  gsap.fromTo(
    element,
    {
      height: 0,
      width: "0.2rem",
      display: "none",
      backgroundColor: "rgba(202, 198, 198, 0.473)",
    },
    {
      height: height,
      duration: duration,
      delay: delay || 0,
      display: "flex",
    }
  );
};

export const fadeInShowAnimation = (element, duration, delay) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: duration,
      delay: delay || 0,
    }
  );
};

export const lineShowAnimation = (element, duration) => {
  gsap.fromTo(
    element,
    {
      width: 0,
    },
    {
      width: "100%",
      duration: duration,
    }
  );
};

export const triggerPersonNavigation = (element) => {
  gsap.fromTo(
    element,
    {
      x: 0,
      opacity: 0,
    },
    {
      x: 90,
      opacity: 1,
      delay: 0.2,
      duration: 0.2,
    }
  );
};

export const triggerDeveloperNavigation = (element) => {
  gsap.fromTo(
    element,
    {
      x: 90,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
    }
  );
};

export const triggerSlideInAnimation = (
  element,
  yStartPoz,
  yEndPoz,
  duration,
  delay
) => {
  gsap.fromTo(
    element,
    {
      y: yStartPoz,
      opacity: 0,
    },
    {
      y: yEndPoz,
      opacity: 1,
      delay: delay,
      duration: duration,
    }
  );
};

export const triggerGoDownAnimation = (element, duration, delay, yPoza) => {
  gsap.to(element, { duration: duration, delay: delay, y: 150 });
};
export const triggerGoUpAnimation = (element, duration, delay) => {
  gsap.to(element, { duration: duration, delay: delay, y: 0 });
};

export const triggerShowScaleAnimation = (element) => {
  gsap.fromTo(
    element,
    1.5,
    {
      scale: 0,
    },
    {
      scale: 1,
    }
  );
};
