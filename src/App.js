import React, { useEffect, useRef } from "react";
import { Curtain } from "./components/Curtain/Curtain";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import github from "./images/github.webp";
import inst from "./images/inst.webp";
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

  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (entry.target.className.includes("title")) {
            entry.target.classList.add("line");
          }
        }
      });
    },
    { threshold: 0 }
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("anim", entry.isIntersecting);
    });
  });

  useEffect(() => {
    const titles = document.querySelectorAll(".title");
    const descriptions = document.querySelectorAll(".descr");
    const socials = document.querySelector(".contact__socials");
    const projectBtn = document.querySelector(".projects__button");
    const console = document.querySelector(".projects__app");
    const contactImgContainer = document.querySelector(".contact__image__container");

    observer.observe(console);
    observer.observe(contactImgContainer);

    titles.forEach((title) => {
      animObserver.observe(title);
    });
    descriptions.forEach((descr) => {
      animObserver.observe(descr);
    });
    animObserver.observe(socials);
    animObserver.observe(projectBtn);
  });

  return (
    <div>
      <Curtain />
      <Header intro={intro} options={options} inst={inst} github={github} />
      <Navbar intro={intro} projects={projects} about={about} contact={contact} options={options} />
      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} />
      <Contact contact={contact} inst={inst} github={github} />
    </div>
  );
};
