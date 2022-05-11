import React from "react";
import "./Navbar.scss";

export const Navbar = ({ intro, projects, about, contact }) => {
  const options = { block: "start", behavior: "smooth" };

  const toggleClass = (e) => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    e.target.classList.add("current");
  };
  return (
    <nav className="nav">
      <div
        onClick={(e) => {
          intro.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button introbtn current"
      ></div>
      <div
        onClick={(e) => {
          projects.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button projectsbtn"
      ></div>
      <div
        onClick={(e) => {
          about.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button aboutbtn"
      ></div>
      <div
        onClick={(e) => {
          contact.current.scrollIntoView(options);
          toggleClass(e);
        }}
        className="nav__button contactbtn"
      ></div>
    </nav>
  );
};
