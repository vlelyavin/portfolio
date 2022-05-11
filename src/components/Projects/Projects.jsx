import React from "react";
import "./Projects.scss";

export const Projects = ({ projects }) => {
  return (
    <div className="projects" ref={projects}>
      <div className="container">
        <div className="projects__inner">
          <div className="title">Bikeshop</div>
          <div className="descr">website</div>
        </div>
      </div>
    </div>
  );
};
