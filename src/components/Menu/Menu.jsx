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

  return (
    <div className="menu">
      <div className="menu__nav">
        <div
          className="menu__nav__button"
          onClick={() => {
            intro.current.scrollIntoView(options);
            setActive(!active);
          }}
        >
          Intro
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            projects.current.scrollIntoView(options);
            setActive(!active);
          }}
        >
          Projects
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            about.current.scrollIntoView(options);
            setActive(!active);
          }}
        >
          About
        </div>
        <div
          className="menu__nav__button"
          onClick={() => {
            contact.current.scrollIntoView(options);
            setActive(!active);
          }}
        >
          Contact
        </div>
      </div>
    </div>
  );
};
