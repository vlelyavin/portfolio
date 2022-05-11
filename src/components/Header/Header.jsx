import "./Header.scss";
import github from "../../images/github.png";
import inst from "../../images/inst.png";

export const Header = () => {
  const handleAnim = () => {
    const upper = document.querySelector(".header__menu__upper");
    const lower = document.querySelector(".header__menu__lower");
    upper.classList.toggle("rotateupper");
    lower.classList.toggle("rotatelower");
  };

  return (
    <header className="header">
      <div className="header__title">vlelyavin</div>
      <div className="header__info">
        <div className="header__socials">
          <a href="https://github.com/vlelyavin" className="header__socials__link">
            <img className="header__socials__icon" src={github} alt="github" />
          </a>
          <a href="https://www.instagram.com/v._lelyavin/" className="header__socials__link">
            <img className="header__socials__icon" src={inst} alt="inst" />
          </a>
        </div>
        <div className="header__menu" onClick={handleAnim}>
          <div className="header__menu__upper"></div>
          <div className="header__menu__lower"></div>
        </div>
      </div>
    </header>
  );
};
