import { useEffect } from "react";

import "./FooterStyle.scss";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import { triggerSlideInAnimation } from "../../../utils/gsap/animations";
import { path } from "../../../utils/gsap/constants";

const Footer = ({ setTriggerContactAnimation }) => {
  useEffect(() => {
    triggerSlideInAnimation(path.layoutFooter, 90, 0, 0.5, 6.8);
  }, []);

  const currentWidth = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "5rem";
    } else if (width >= 2880 && width <= 3840) {
      return "4.5rem";
    } else if (width >= 2304 && width <= 2560) {
      return "3.5rem";
    } else if (width >= 1024 && width <= 1280) {
      return "2rem";
    } else if (width >= 800 && width <= 1000) {
      return "1.5rem";
    } else {
      return "2.5rem";
    }
  };

  const currentTextWidth = () => {
    const width = window.innerWidth;
    if (width >= 3840) {
      return "3.2rem";
    } else if (width >= 2880 && width <= 3840) {
      return "3rem";
    } else if (width >= 2304 && width <= 2560) {
      return "3rem";
    } else if (width >= 1366 && width <= 1440) {
      return "1.5rem";
    } else if (width >= 1024 && width <= 1280) {
      return "1.4rem";
    } else if (width >= 800 && width <= 1000) {
      return "1.3rem";
    } else {
      return "1.6rem";
    }
  };

  return (
    <footer>
      <div>
        <BsGithub
          color="#F24E1E"
          size={currentWidth()}
          cursor="pointer"
          onClick={() => {
            window.open("https://github.com/balintAlexandru", "_blank");
          }}
        />
        <BsLinkedin
          color="#9747FF"
          size={currentWidth()}
          cursor="pointer"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/balint-alexandru/",
              "_blank"
            );
          }}
        />
      </div>
      <MagneticButton
        title="Get in touch"
        fontSize={currentTextWidth()}
        click={() => {
          setTriggerContactAnimation(true);
        }}
      />
    </footer>
  );
};
export default Footer;
//
