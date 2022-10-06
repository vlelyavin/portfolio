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
    const propsSections = Object.values(props.sections);
    const requestedSection = propsSections.find((item) => item.current.classList[0] === e.target.getAttribute("name"));
    requestedSection.current.scrollIntoView(props.options);
    if (e.target.classList.contains("current")) {
      return;
    }
    current.classList.remove("current");
    e.target.classList.add("current");
  };

  return (
    <nav className="nav">
      <div onClick={handleClick} name="intro" className="nav__button hovereffect introbtn"></div>
      <div onClick={handleClick} name="projects" className="nav__button hovereffect projectsbtn"></div>
      <div onClick={handleClick} name="about" className="nav__button hovereffect aboutbtn"></div>
      <div onClick={handleClick} name="contact" className="nav__button hovereffect contactbtn"></div>
    </nav>
  );
};
