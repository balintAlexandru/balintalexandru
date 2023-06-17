import { useEffect } from "react";

import "./TechnologiesCardStyle.scss";

import { triggerGoDownAnimation } from "../../utils/gsap/animations";

const TechnologiesCard = () => {
  useEffect(() => {
    triggerGoDownAnimation(".card-wrapper", 0, 0);
  }, []);

  return (
    <div className="card-wrapper">
      <div className="card-row-1">
        <img src="" alt="icon" className="card-technologies-icon" />
        <p className="card-technologies-name"></p>
      </div>
      <div className="card-row-2">
        <p className="card-technologies-text"></p>
      </div>
    </div>
  );
};

export default TechnologiesCard;
