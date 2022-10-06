import "./Projects.scss";

export const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects section" ref={projects}>
      <div className="container">
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Projects</div>
            <div className="descr">websites, apps</div>
            <div className="section__button">
              <a href="https://github.com/vlelyavin" className="section__link hovereffect">
                Explore
              </a>
            </div>
          </div>
          <div className="projects__app">
            <div className="projects__app__header">
              <div className="projects__app__header__title">E:\main\pr.exe</div>
              <div className="projects__app__header__buttons">
                <div className="projects__app__header__button minimize"></div>
                <div className="projects__app__header__button expand"></div>
                <div className="projects__app__header__button close"></div>
              </div>
            </div>
            <textarea className="projects__app__textarea" defaultValue="console.log(`Hello mom`);" />
          </div>
        </div>
      </div>
    </section>
  );
};
