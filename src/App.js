import React, { useEffect, useRef, useState } from "react";
import { Cursor } from "./components/Cursor/Cursor";
import { Curtain } from "./components/Curtain/Curtain";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import git from "./images/git.webp";
import gitDark from "./images/gitDark.webp";
import instDark from "./images/instDark.webp";
import inst from "./images/inst.webp";
import "./main.scss";
import "./fonts/fonts.scss";

export const App = () => {
  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const options = { block: "center", behavior: "smooth" };
  const body = document.querySelector("body");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [theme]);

  window.onmousemove = (e) => {
    const images = document.querySelectorAll(".section__image");
    const cursor = document.querySelector(".cursor");
    images.forEach((image) => {
      image.style.transform = `scale(1.07) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
    });

    e.target.style.fitler = `invert()`;
    cursor.style.opacity = 1;
    cursor.style.left = `${e.x - 14}px`;
    cursor.style.top = `${e.y - 14}px`;
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener("wheel", (e) => {
            const el = entry.target;
            const nextEl = el.nextSibling;
            const prevEl = el.previousSibling;
            if (e.deltaY > 0 && nextEl) {
              setTimeout(() => {
                nextEl.scrollIntoView(options);
              }, 100);
            } else if (e.deltaY < 0 && prevEl) {
              setTimeout(() => {
                prevEl.scrollIntoView(options);
              }, 100);
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();

      const introEl = document.querySelector(".intro");
      const projectsEl = document.querySelector(".projects");
      const aboutEl = document.querySelector(".about");
      const contactEl = document.querySelector(".contact");

      sectionObserver.observe(introEl);
      sectionObserver.observe(projectsEl);
      sectionObserver.observe(aboutEl);
      sectionObserver.observe(contactEl);
    },
    { passive: false }
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.target.className.includes("projects__app") ||
        entry.target.className.includes("section__image__container")
      ) {
        entry.target.classList.toggle("anim", entry.isIntersecting);
      } else if (
        entry.target.className.includes("title") ||
        entry.target.className.includes("descr") ||
        entry.target.className.includes("contact__socials") ||
        entry.target.className.includes("section__button")
      ) {
        entry.target.classList.toggle("translate", entry.isIntersecting);
        if (entry.target.className.includes("title")) {
          entry.target.classList.toggle("line", entry.isIntersecting);
        }
      }
    });
  });

  useEffect(() => {
    const titles = document.querySelectorAll(".title");
    const descriptions = document.querySelectorAll(".descr");
    const socials = document.querySelector(".contact__socials");

    const buttons = document.querySelectorAll(".section__button");
    const console = document.querySelector(".projects__app");
    const ImgContainers = document.querySelectorAll(".section__image__container");

    observer.observe(console);
    ImgContainers.forEach((container) => {
      observer.observe(container);
    });

    titles.forEach((title) => {
      observer.observe(title);
    });
    descriptions.forEach((descr) => {
      observer.observe(descr);
    });
    observer.observe(socials);

    buttons.forEach((button) => {
      observer.observe(button);
    });
  });

  return (
    <div>
      <Cursor />
      <Curtain />
      <Header
        theme={theme}
        setTheme={setTheme}
        intro={intro}
        options={options}
        inst={inst}
        git={git}
        instDark={instDark}
        gitDark={gitDark}
        projects={projects}
        about={about}
        contact={contact}
        body={body}
      />
      <Navbar intro={intro} projects={projects} about={about} contact={contact} options={options} />
      <div className="sections">
        <Intro intro={intro} />
        <Projects projects={projects} />
        <About about={about} />
        <Contact theme={theme} contact={contact} inst={inst} git={git} instDark={instDark} gitDark={gitDark} />
      </div>
    </div>
  );
};
