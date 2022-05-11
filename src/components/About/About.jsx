import React from "react";
import "./About.scss";

export const About = ({ about }) => {
  return (
    <div className="about" ref={about}>
      <div className="container">
        <div className="about__inner">
          <div className="title">About</div>
          <div className="descr">i like smth</div>
        </div>
      </div>
    </div>
  );
};
