import { useEffect } from "react";
import "./ProjectCardStyle.scss";
import {
  triggerShowAnimationDuration,
  triggerShowProjectCard,
  triggerShowTransitionScaleAnimation,
} from "../../utils/gsap/animations";

const ProjectCard = ({ index, project, setCurrentProject }) => {
  useEffect(() => {
    triggerShowProjectCard(`.card-${index}`, 0.5, index * 0.2);
    const $card = document.querySelector(`.card-${index}`);
    let bounds;
    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      $card.style.transform = `
        scale3d(1, 1, 1)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
        )
      `;
    }
    $card.addEventListener("mouseenter", () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
    });
    $card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", rotateToMouse);
      $card.style.transform = "";
      $card.style.background = "";
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={`project-card card-${index}`}>
      <div class="content">
        <h2>{project.name}</h2>

        <div className="technologies-wrapper">
          <button
            className="button-wrapper"
            onClick={() => {
              setCurrentProject(project);
              triggerShowTransitionScaleAnimation(".transition-in-project");
              triggerShowAnimationDuration(".project-wrapper", 0.2, 0.5);
            }}
          >
            View
          </button>
          <ul>
            {project?.technologies?.map((item) => (
              <li
                style={{
                  color: item.color,
                  border: `0.1rem solid ${item.color}`,
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
