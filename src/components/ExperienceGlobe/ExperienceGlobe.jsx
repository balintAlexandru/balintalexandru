import React, { useEffect } from "react";
import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";

import "./ExperienceGlobeStyle.scss";
import {
  triggerGoDownAnimation,
  triggerGoUpAnimation,
} from "../../utils/gsap/animations";
import { TECHNOLOGIES_CARD } from "../../utils/technologies";

const ExperienceGlobe = () => {
  const tagCanvasOptions = {
    clickToFront: 500,
    depth: 0,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: null, // null | 'div', 'native'
    tooltipDelay: 0,
    wheelZoom: false,
  };
  const iconSlugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "firebase",
    "jira",
    "git",
    "figma",
    "redux",
    "sass",
    "greensock",
    "materialui",
  ];
  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));

  useEffect(() => {
    const cardImage = document.querySelector(".card-technologies-icon");
    const cardTitle = document.querySelector(".card-technologies-name");
    const cardText = document.querySelector(".card-technologies-text");

    document.querySelector("canvas").childNodes.forEach((item, index) => {
      item.addEventListener("click", () => {
        if (cardTitle.innerHTML === "") {
          triggerGoUpAnimation(".card-wrapper", 0.2, 0);
          cardImage.src = TECHNOLOGIES_CARD[iconSlugs[index]].icon;
          cardTitle.innerHTML = TECHNOLOGIES_CARD[iconSlugs[index]].name;
          cardText.innerHTML = TECHNOLOGIES_CARD[iconSlugs[index]].text;
        } else {
          triggerGoDownAnimation(".card-wrapper", 0.3, 0);
          triggerGoUpAnimation(".card-wrapper", 0.3, 0.3);
          setTimeout(() => {
            cardImage.src = TECHNOLOGIES_CARD[iconSlugs[index]].icon;
            cardTitle.innerHTML = TECHNOLOGIES_CARD[iconSlugs[index]].name;
            cardText.innerHTML = TECHNOLOGIES_CARD[iconSlugs[index]].text;
          }, 200);
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="globe-wrapper">
      <IconCloud
        key={v4()}
        id={"icon"}
        minContrastRatio={1.5}
        iconSize={45}
        backgroundHexColor={"#000"}
        fallbackHexColor={"#000"}
        tags={iconTags}
        tagCanvasOptions={tagCanvasOptions}
      />
    </div>
  );
};

export default ExperienceGlobe;
