import { CHANGE_ACTIVE_STATUS } from "../../actions/mainActions";
import "./Menu.scss";

export const Menu = (props) => {
  const handleClick = (e) => {
    const current = document.querySelector(".current");
    props.dispatch({ type: CHANGE_ACTIVE_STATUS, payload: !props.state.active });
    setTimeout(() => {
      current.classList.remove("current");
    }, 300);
    props.menu.current.classList.remove("menuAnim");
    props.headerUpper.current.classList.remove("rotateupper");
    props.headerLower.current.classList.remove("rotatelower");
    const propsSections = Object.values(props.sections);
    const requestedSection = propsSections.find((item) => item.current.id === e.target.getAttribute("name"));
    setTimeout(() => {
      requestedSection.current.scrollIntoView(props.options);
    }, 600);
  };

  return (
    <div className="menu" ref={props.menu}>
      <div className="menu__nav">
        <div className="menu__nav__button" name="intro" onClick={handleClick}>
          Intro
        </div>
        <div className="menu__nav__button" name="projects" onClick={handleClick}>
          Projects
        </div>
        <div className="menu__nav__button" name="about" onClick={handleClick}>
          About
        </div>
        <div className="menu__nav__button" name="contact" onClick={handleClick}>
          Contact
        </div>
      </div>
    </div>
  );
};
