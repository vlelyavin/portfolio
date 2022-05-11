import React from "react";
import "./Intro.scss";

export const Intro = ({ intro }) => {
  window.onmousemove = (e) => {
    const introText = document.querySelector(".intro__text");
    const introCircle = document.querySelector(".intro__circle");

    introCircle.style.transform = `scale(1.5) translate(-${e.x / 40}px, -${e.y / 40}px)`;
    introText.style.transform = `translate(-${e.x / 100}px, -${e.y / 100}px)`;
  };

  return (
    <div className="intro" ref={intro}>
      <div className="container">
        <div className="intro__text">PORTFOLIO</div>
        <div className="intro__circle"></div>
        <div className="intro__inner">
          <div className="title">Vladimir Lelyavin</div>
          <div className="descr">web developer</div>
        </div>
      </div>
    </div>
  );
};
