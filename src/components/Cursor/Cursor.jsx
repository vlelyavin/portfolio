import { useEffect } from "react";
import "./Cursor.scss";

export const Cursor = () => {
  useEffect(() => {
    const hovers = document.querySelectorAll(".hovereffect");
    const cursor = document.querySelector(".cursor");
    const projectsAppHeader = document.querySelector(".projects__app__header");
    hovers.forEach((hover) => {
      hover.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(1.1) rotate(135deg)";
      });
      hover.addEventListener("mouseout", () => {
        cursor.style.transform = "scale(1) rotate(45deg)";
      });
    });
    projectsAppHeader.addEventListener("mouseover", () => {
      cursor.style.filter = `invert()`;
    });
    projectsAppHeader.addEventListener("mouseout", () => {
      cursor.style.filter = ``;
    });
  });
  return (
    <div className="cursor">
      <div className="cursor__left"></div>
      <div className="cursor__right"></div>
    </div>
  );
};
