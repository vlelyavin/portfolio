import { useEffect } from "react";
import "./AboutMe.scss";

export const AboutMe = () => {
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
      Born in Kiev in 2004, i am a self-taught developer who is currently studying in the university and searching for
      the first job. After discovering web development for myself, quickly became interested in this topic. My main goal
      is to improve my skills, so every opportunity should be exploited whenever it arises. Nowadays struggling with
      learning react)
      <div className="text__rectangle"></div>
    </div>
  );
};
