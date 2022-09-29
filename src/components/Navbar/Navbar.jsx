import { useEffect } from "react";
import "./Navbar.scss";

export const Navbar = (props) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const relativeButton = document.querySelector(`.${entry.target.classList[0]}btn`);
          if (relativeButton.previousElementSibling && relativeButton.nextElementSibling) {
            relativeButton.classList.add("current");
            relativeButton.previousElementSibling.classList.remove("current");
            relativeButton.nextElementSibling.classList.remove("current");
          } else if (relativeButton.previousElementSibling && !relativeButton.nextElementSibling) {
            relativeButton.classList.add("current");
            relativeButton.previousElementSibling.classList.remove("current");
          } else if (!relativeButton.previousElementSibling && relativeButton.nextElementSibling) {
            relativeButton.classList.add("current");
            relativeButton.nextElementSibling.classList.remove("current");
          }
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const handleClick = (e) => {
    const current = document.querySelector(".current");
    const propsSections = Object.values(props).splice(1);
    const requestedSection = propsSections.find(
      (item) => item.current.classList[0] === e.target.classList[2].slice(0, -3)
    );
    requestedSection.current.scrollIntoView(props.options);
    current.classList.remove("current");
    e.target.classList.add("current");
  };

  return (
    <nav className="nav">
      <div onClick={handleClick} className="nav__button hovereffect introbtn"></div>
      <div onClick={handleClick} className="nav__button hovereffect projectsbtn"></div>
      <div onClick={handleClick} className="nav__button hovereffect aboutbtn"></div>
      <div onClick={handleClick} className="nav__button hovereffect contactbtn"></div>
    </nav>
  );
};
