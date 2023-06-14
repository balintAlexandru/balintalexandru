import "./FooterStyle.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import MagneticButton from "../../../components/MagneticButton/MagneticButton";
import { useEffect } from "react";
import { triggerSlideInAnimation } from "../../../utils/gsap/animations";
import { path } from "../../../utils/gsap/constants";

const Footer = () => {
  useEffect(() => {
    triggerSlideInAnimation(path.layoutFooter, 90, 0, 0.5, 6.8);
  }, []);

  return (
    <footer>
      <div>
        <BsGithub
          color="#F24E1E"
          size="2.5rem"
          cursor="pointer"
          onClick={() => {
            window.open("https://github.com/balintAlexandru", "_blank");
          }}
        />
        <BsLinkedin
          color="#9747FF"
          size="2.5rem"
          cursor="pointer"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/balint-alexandru/",
              "_blank"
            );
          }}
        />
      </div>
      <MagneticButton title="Get in touch" fontSize="1.6rem" />
    </footer>
  );
};
export default Footer;
//
