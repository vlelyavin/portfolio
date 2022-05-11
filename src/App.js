import React, { useEffect, useRef } from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

import "./main.scss";
import "./fonts/fonts.scss";

export const App = () => {
  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const options = { block: "center", behavior: "smooth" };
  // const introEl = document.querySelector(".intro");

  // window.onload = () => {
  //   introEl.scrollIntoView(options);
  // };

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const current = document.querySelector(".current");
      const el = e.target.parentNode.parentNode;
      const nextEl = el.nextElementSibling;
      const prevEl = el.previousElementSibling;
      if (current) {
        if (e.deltaY > 0 && nextEl) {
          nextEl.scrollIntoView(options);
        } else if (e.deltaY < 0 && prevEl) {
          prevEl.scrollIntoView(options);
        }
      }
    },
    { passive: false }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navbtns = document.querySelectorAll(".nav__button");
          navbtns.forEach((btn) => {
            btn.classList.remove("current");
          });
          if (entry.target.className === "intro") {
            const btn = document.querySelector(".introbtn");
            btn.classList.add("current");
          } else if (entry.target.className === "projects") {
            const btn = document.querySelector(".projectsbtn");
            btn.classList.add("current");
          } else if (entry.target.className === "about") {
            const btn = document.querySelector(".aboutbtn");
            btn.classList.add("current");
          } else if (entry.target.className === "contact") {
            const btn = document.querySelector(".contactbtn");
            btn.classList.add("current");
          }
        } else {
        }
      });
    },
    {
      threshold: 1,
    }
  );

  // console.log(projectsEl);

  useEffect(() => {
    const introEl = document.querySelector(".intro");
    const projectsEl = document.querySelector(".projects");
    const aboutEl = document.querySelector(".about");
    const contactEl = document.querySelector(".contact");
    observer.observe(introEl);
    observer.observe(projectsEl);
    observer.observe(aboutEl);
    observer.observe(contactEl);
  });

  return (
    <div>
      <Header />
      <Navbar intro={intro} projects={projects} about={about} contact={contact} />
      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} />
      <Contact contact={contact} />
    </div>
  );
};
