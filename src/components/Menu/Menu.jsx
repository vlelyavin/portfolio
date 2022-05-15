import { useEffect } from "react";
import "./Menu.scss";

export const Menu = ({ intro, projects, about, contact, options, active, setActive }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".menu__nav__button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const upper = document.querySelector(".header__menu__upper");
        const lower = document.querySelector(".header__menu__lower");
        upper.classList.remove("rotateupper");
        lower.classList.remove("rotatelower");
      });
    });
  });

  const handleClick = () => {
    setActive(!active);
    const menu = document.querySelector(".menu");
    menu.classList.remove("menuAnim");
  };

  return (
    <div className="menu">
      <div className="menu__nav">
        <div
          className="menu__nav__button"
          onClick={() => {
            setTimeout(() => {
              intro.current.scrollIntoView(options);
            }, 600);
            handleClick();
          }}
        >
          Intro
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            setTimeout(() => {
              projects.current.scrollIntoView(options);
            }, 600);
            handleClick();
          }}
        >
          Projects
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            setTimeout(() => {
              about.current.scrollIntoView(options);
            }, 600);
            handleClick();
          }}
        >
          About
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            setTimeout(() => {
              contact.current.scrollIntoView(options);
            }, 600);
            handleClick();
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};
