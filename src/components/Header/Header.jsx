import { CHANGE_ACTIVE_STATUS, CHANGE_THEME } from "../../actions/mainActions";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import "./Header.scss";

export const Header = (props) => {
  const body = document.body;
  if (localStorage.getItem("theme")) {
    body.classList.add(localStorage.getItem("theme"));
  } else {
    localStorage.setItem("theme", "dark");
    body.classList.add(localStorage.getItem("theme"));
  }

  const switchTheme = () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList);
    props.dispatch({ type: CHANGE_THEME, payload: body.classList.value });
  };

  const handleAnim = () => {
    props.headerUpper.current.classList.toggle("rotateupper");
    props.headerLower.current.classList.toggle("rotatelower");
    props.menu.current.classList.toggle("menuAnim");
    props.dispatch({ type: CHANGE_ACTIVE_STATUS, payload: true });
  };

  const handleClick = () => {
    const current = document.querySelector(".current");
    props.intro.current.scrollIntoView(props.options);
    if (current.getAttribute("name") === props.intro.current.id) return;
    current.classList.remove("current");
  };

  return (
    <>
      <header className="header">
        <div className="header__title hovereffect" onClick={handleClick}>
          vlelyavin
        </div>
        <div className="header__info">
          <img
            className="header__theme hovereffect"
            src={props.state.theme === "dark" ? moon : sun}
            onClick={switchTheme}
            alt="theme"
          />
          <div className="header__socials">
            <a href="https://github.com/vlelyavin" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={props.state.theme === "dark" ? props.git : props.gitDark}
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={props.state.theme === "dark" ? props.inst : props.instDark}
                alt="inst"
              />
            </a>
          </div>
          <div className="header__menu hovereffect" onClick={handleAnim}>
            <div className="header__menu__upper" ref={props.headerUpper}></div>
            <div className="header__menu__lower" ref={props.headerLower}></div>
          </div>
        </div>
      </header>
    </>
  );
};
