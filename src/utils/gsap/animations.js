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

export const lineShowAnimation = (element, duration, delay) => {
  gsap.fromTo(
    element,
    {
      width: 0,
    },
    {
      width: "100%",
      duration: duration,
      delay: delay || 0,
    }
  );
};

export const triggerPersonNavigation = (element) => {
  gsap.fromTo(
    element,
    {
      x: -90,
      opacity: 0,
    },
    {
      x: 40,
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
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
      x: -40,
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

const currentYPoz = () => {
  const width = window.innerWidth;
  if (width >= 3840) {
    return 250;
  } else {
    return 150;
  }
};

export const triggerVerticalAnimation = (element, duration, delay, yPoz) => {
  gsap.to(element, { duration: duration, delay: delay, y: yPoz });
};
export const triggerScaleAnimation = (element, duration, delay, scale) => {
  gsap.to(element, { duration: duration, delay: delay, scale });
};
export const triggerGoDownAnimation = (element, duration, delay) => {
  gsap.to(element, { duration: duration, delay: delay, y: currentYPoz() });
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

const currentScale = () => {
  const width = window.innerWidth;
  if (width >= 3840) {
    return 11;
  } else {
    return 20;
  }
};

export const triggerShowTransitionScaleAnimation = (element) => {
  gsap.fromTo(
    element,
    0.5,
    {
      scale: 0,
    },
    {
      scale: currentScale(),
      display: "flex",
    }
  );
};

export const triggerHideTransitionScaleAnimation = (element) => {
  gsap.to(element, 0.7, {
    scale: 0,
    display: "none",
  });
};

export const triggerShowProjectCard = (element, duration, delay) => {
  gsap.to(element, { duration: duration, delay: delay, right: "0" });
};
