import { Menu } from "../Menu/Menu.jsx";
import { useState } from "react";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import "./Header.scss";

export const Header = ({
  theme,
  setTheme,
  body,
  intro,
  projects,
  about,
  contact,
  options,
  git,
  gitDark,
  inst,
  instDark,
}) => {
  const [active, setActive] = useState(false);

  if (localStorage.getItem("theme")) {
    body.classList.add(localStorage.getItem("theme"));
  } else {
    localStorage.setItem("theme", "dark");
    body.classList.add(localStorage.getItem("theme"));
  }

  const switchTheme = () => {
    body.classList.toggle("dark");
    body.classList.toggle("white");
    localStorage.setItem("theme", body.classList);
    setTheme(localStorage.getItem("theme"));
  };

  const handleAnim = () => {
    const upper = document.querySelector(".header__menu__upper");
    const lower = document.querySelector(".header__menu__lower");
    const menu = document.querySelector(".menu");

    upper.classList.toggle("rotateupper");
    lower.classList.toggle("rotatelower");

    menu.classList.toggle("menuAnim");
    setActive(!active);
  };

  return (
    <div>
      <header className="header">
        <div
          className="header__title hovereffect"
          onClick={() => {
            intro.current.scrollIntoView(options);
          }}
        >
          vlelyavin
        </div>
        <div className="header__info">
          <img
            className="header__theme hovereffect"
            src={theme === "dark" ? moon : sun}
            onClick={switchTheme}
            alt="theme"
          />
          <div className="header__socials">
            <a href="https://github.com/vlelyavin" className="header__socials__link hovereffect">
              <img className="header__socials__icon" src={theme === "dark" ? git : gitDark} alt="github" />
            </a>
            <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link hovereffect">
              <img className="header__socials__icon" src={theme === "dark" ? inst : instDark} alt="inst" />
            </a>
          </div>
          <div className="header__menu hovereffect" onClick={handleAnim}>
            <div className="header__menu__upper"></div>
            <div className="header__menu__lower"></div>
          </div>
        </div>
      </header>
      <Menu
        active={active}
        setActive={setActive}
        intro={intro}
        projects={projects}
        about={about}
        contact={contact}
        options={options}
      />
    </div>
  );
};
