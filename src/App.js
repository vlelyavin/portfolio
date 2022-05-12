import React, { useEffect, useRef } from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import github from "./images/github.png";
import inst from "./images/inst.png";
import "./main.scss";
import "./fonts/fonts.scss";

export const App = () => {
  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const options = { block: "center", behavior: "smooth" };
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
          const btn = document.querySelector(`.${entry.target.className.slice(0, -8)}btn`);
          btn.classList.add("current");
        } else {
        }
      });
    },
    {
      threshold: 1,
    }
  );

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const consoleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  });

  useEffect(() => {
    const introEl = document.querySelector(".intro");
    const projectsEl = document.querySelector(".projects");
    const aboutEl = document.querySelector(".about");
    const contactEl = document.querySelector(".contact");
    const titles = document.querySelectorAll(".title");
    const descriptions = document.querySelectorAll(".descr");
    const socials = document.querySelector(".contact__socials");
    const projectBtn = document.querySelector(".projects__button");
    const console = document.querySelector(".projects__app");

    observer.observe(introEl);
    observer.observe(projectsEl);
    observer.observe(aboutEl);
    observer.observe(contactEl);

    titles.forEach((title) => {
      animObserver.observe(title);
    });
    descriptions.forEach((descr) => {
      animObserver.observe(descr);
    });
    animObserver.observe(socials);
    animObserver.observe(projectBtn);

    consoleObserver.observe(console);
  });

  return (
    <div>
      <Header intro={intro} options={options} inst={inst} github={github} />
      <Navbar intro={intro} projects={projects} about={about} contact={contact} options={options} />
      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} />
      <Contact contact={contact} inst={inst} github={github} />
    </div>
  );
};
