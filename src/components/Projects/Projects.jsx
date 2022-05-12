import { useState } from "react";
import classNames from "classnames";
import "./Projects.scss";

export const Projects = ({ projects }) => {
  const [maximized, setMaximized] = useState(false);
  const defaultValue = "console.log(`Hello mom`);";

  const close = () => {
    const app = document.querySelector(".projects__app");
    app.classList.add("closed");
  };

  return (
    <section className="projects section" ref={projects}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Projects</div>
            <div className="descr">websites, apps</div>
            <div className="projects__button">
              <a href="https://github.com/vlelyavin" className="projects__link hovereffect">
                Explore
              </a>
            </div>
          </div>
          <div className={classNames("projects__app", { maximized: maximized })}>
            <div className="projects__app__header">
              <div className="projects__app__header__title">E:\main\pr.exe</div>
              <div className="projects__app__header__buttons">
                <div className="projects__app__header__button minimize"></div>
                <div
                  className="projects__app__header__button expand"
                  onClick={() => {
                    setMaximized(!maximized);
                  }}
                ></div>
                <div className="projects__app__header__button close" onClick={close}></div>
              </div>
            </div>
            <textarea className="projects__app__inner" defaultValue={defaultValue}></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};
