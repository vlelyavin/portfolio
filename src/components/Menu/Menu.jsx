import "./Menu.scss";

export const Menu = (props) => {
  // { intro, projects, about, contact, options, active, setActive }
  const handleClick = (e) => {
    props.setActive(!props.active);
    const menu = document.querySelector(".menu");
    const upper = document.querySelector(".header__menu__upper");
    const lower = document.querySelector(".header__menu__lower");
    const current = document.querySelector(".current");
    menu.classList.remove("menuAnim");
    upper.classList.remove("rotateupper");
    lower.classList.remove("rotatelower");
    const propsSections = Object.values(props).slice(3);
    const requestedSection = propsSections.find(
      (item) => item.current.classList[0] === e.target.classList[1].slice(0, -4)
    );
    setTimeout(() => {
      requestedSection.current.scrollIntoView(props.options);
      current.classList.remove("current");
      requestedSection.classList.add("current");
    }, 600);
  };

  return (
    <div className="menu">
      <div className="menu__nav">
        <div className="menu__nav__button introlink" onClick={handleClick}>
          Intro
        </div>
        <div className="menu__nav__button projectslink" onClick={handleClick}>
          Projects
        </div>
        <div className="menu__nav__button aboutlink" onClick={handleClick}>
          About
        </div>
        <div className="menu__nav__button contactlink" onClick={handleClick}>
          Contact
        </div>
      </div>
    </div>
  );
};
