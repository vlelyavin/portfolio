import { Menu } from "../Menu/Menu.jsx";
import { useState } from "react";
import "./Header.scss";

export const Header = ({ intro, options, github, inst }) => {
  const [active, setActive] = useState(false);
  const handleAnim = () => {
    const upper = document.querySelector(".header__menu__upper");
    const lower = document.querySelector(".header__menu__lower");
    upper.classList.toggle("rotateupper");
    lower.classList.toggle("rotatelower");
    setActive(!active);
  };

  return (
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
        <div className="header__socials">
          <a href="https://github.com/vlelyavin" className="header__socials__link hovereffect">
            <img className="header__socials__icon" src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link hovereffect">
            <img className="header__socials__icon" src={inst} alt="inst" />
          </a>
        </div>
        <div className="header__menu hovereffect" onClick={handleAnim}>
          <div className="header__menu__upper"></div>
          <div className="header__menu__lower"></div>
        </div>
      </div>
      {active ? <Menu /> : null}
    </header>
  );
};
