import { useEffect } from "react";
import "./AboutMe.scss";

export const AboutMe = ({ aboutMe }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("slidedown", entry.isIntersecting);
    });
  });

  useEffect(() => {
    const rectangle = document.querySelector(".text__rectangle");
    observer.observe(rectangle);
  });

  return (
    <div className="text">
      {aboutMe}
      <div className="text__rectangle"></div>
    </div>
  );
};
