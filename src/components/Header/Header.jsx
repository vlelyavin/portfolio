import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import "./Header.scss";
import { useReducer } from "react";
import { INITIAL_STATE, mainReducer } from "../../reducers/mainReducer.js";
import { CHANGE_ACTIVE_STATUS, CHANGE_THEME } from "../../actions/mainActions";

export const Header = (props) => {
  const body = document.body;
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);
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
    dispatch({ type: CHANGE_THEME, payload: localStorage.getItem("theme") });
  };

  const handleAnim = () => {
    props.headerUpper.current.classList.toggle("rotateupper");
    props.headerLower.current.classList.toggle("rotatelower");
    props.menu.current.classList.toggle("menuAnim");
    dispatch({ type: CHANGE_ACTIVE_STATUS, payload: true });
  };

  const handleClick = () => {
    const current = document.querySelector(".current");
    props.intro.current.scrollIntoView(props.options);
    current.classList.remove("current");
    props.intro.classList.add("current");
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
            src={state.theme === "dark" ? moon : sun}
            onClick={switchTheme}
            alt="theme"
          />
          <div className="header__socials">
            <a href="https://github.com/vlelyavin" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={state.theme === "dark" ? props.git : props.gitDark}
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={state.theme === "dark" ? props.inst : props.instDark}
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
