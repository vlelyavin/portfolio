import { Menu } from "../Menu/Menu.jsx";
import { useState } from "react";
import moon from "../../images/moon.png";
import sun from "../../images/sun.png";
import "./Header.scss";

export const Header = (props) => {
  // {
  //   theme, setTheme, intro, projects, about, contact, options, git, gitDark, inst, instDark;
  // }

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
    props.setTheme(localStorage.getItem("theme"));
  };

  const handleAnim = () => {
    const upper = document.querySelector(".header__menu__upper");
    const lower = document.querySelector(".header__menu__lower");
    const menu = document.querySelector(".menu");

    upper.classList.toggle("rotateupper");
    lower.classList.toggle("rotatelower");

    menu.classList.toggle("menuAnim");
    props.setActive(!props.active);
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
            src={props.theme === "dark" ? moon : sun}
            onClick={switchTheme}
            alt="theme"
          />
          <div className="header__socials">
            <a href="https://github.com/vlelyavin" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={props.theme === "dark" ? props.git : props.gitDark}
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link hovereffect">
              <img
                className="header__socials__icon"
                src={props.theme === "dark" ? props.inst : props.instDark}
                alt="inst"
              />
            </a>
          </div>
          <div className="header__menu hovereffect" onClick={handleAnim}>
            <div className="header__menu__upper"></div>
            <div className="header__menu__lower"></div>
          </div>
        </div>
      </header>
    </>
  );
};
