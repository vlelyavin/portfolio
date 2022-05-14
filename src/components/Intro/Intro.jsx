import React from "react";
import "./Intro.scss";

export const Intro = ({ intro }) => {
  window.addEventListener("load", () => {
    const introText = document.querySelector(".intro__text");
    const introCircle = document.querySelector(".intro__circle");

    setTimeout(() => {
      introCircle.style.transition = "0.05s";
      introText.style.transition = "0.05s";
    }, 2000);
  });

  document.onmousemove = (e) => {
    const introText = document.querySelector(".intro__text");
    const introCircle = document.querySelector(".intro__circle");

    introCircle.style.transform = `translate(-${e.x / 40}px, -${e.y / 40}px)`;
    introText.style.transform = `translate(-${e.x / 100}px, -${e.y / 100}px)`;
  };

  return (
    <section className="intro section" ref={intro}>
      <div className="container">
        <div className="intro__text">PORTFOLIO</div>
        <div className="intro__circle"></div>
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Vladimir Lelyavin</div>
            <div className="descr">web developer</div>
          </div>
        </div>
      </div>
    </section>
  );
};
