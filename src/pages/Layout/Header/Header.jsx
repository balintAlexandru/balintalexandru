import { useEffect } from "react";
import "./HeaderStyle.scss";
import { triggerSlideInAnimation } from "../../../utils/gsap/animations";
import { path } from "../../../utils/gsap/constants";

const Header = () => {
  useEffect(() => {
    triggerSlideInAnimation(path.layoutHeader, 90, 0, 0.5, 7.5);
  }, []);

  return (
    <header>
      <div className="header-text-wrapper">
        <div className="header-name-wrapper">
          <span className="header-lastName">Alexandru</span>
          <span className="header-firstName">{`<Balint/>`}</span>
        </div>
        <span className="role-text">{`{ Front-end developer }`}</span>
      </div>
    </header>
  );
};
export default Header;
