import React, { useEffect, useRef, useState } from "react";
import { ParticleBackground } from "./components/ParticleBackground/ParticleBackground";
import { Loader } from "./components/Loader/Loader";
import { Cursor } from "./components/Cursor/Cursor";
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
  const [isLoading, setIsLoading] = useState(true);
  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const options = { block: "center", behavior: "smooth" };
  const body = document.querySelector("body");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [visible, setVisible] = useState(false);

  window.addEventListener("load", () => {
    setIsLoading(!isLoading);
  });

  if (!isLoading) {
    window.onmousemove = (e) => {
      const aboutContainer = document.querySelector(".bicycle");
      const contactContainer = document.querySelector(".spaceman");
      const cursor = document.querySelector(".cursor");

      if (aboutContainer) {
        aboutContainer.style.transform = `scale(2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
      }
      if (contactContainer) {
        contactContainer.style.transform = `scale(1.2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
      }

      e.target.style.fitler = `invert()`;
      cursor.style.opacity = 1;
      cursor.style.left = `${e.x - 14}px`;
      cursor.style.top = `${e.y - 14}px`;
    };

    document.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [theme]);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const nextEl = el.nextSibling;
          const prevEl = el.previousSibling;
          window.addEventListener("wheel", (e) => {
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
    { threshold: 0.15 }
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.target.className.includes("projects__app") ||
          entry.target.className.includes("section__image__container")
        ) {
          entry.target.classList.toggle("anim", entry.isIntersecting);
        } else if (
          entry.target.className.includes("title") ||
          entry.target.className.includes("title__container") ||
          entry.target.className.includes("descr") ||
          entry.target.className.includes("contact__socials") ||
          entry.target.className.includes("section__button")
        ) {
          entry.target.classList.toggle("translate", entry.isIntersecting);
          if (entry.target.className.includes("descr")) {
            entry.target.classList.toggle("line", entry.isIntersecting);
          }
        }
      });
    },
    [visible]
  );

  useEffect(() => {
    if (!isLoading) {
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

      const introEl = document.querySelector(".intro");
      const projectsEl = document.querySelector(".projects");
      const aboutEl = document.querySelector(".about");
      const contactEl = document.querySelector(".contact");

      sectionObserver.observe(introEl);
      sectionObserver.observe(projectsEl);
      sectionObserver.observe(aboutEl);
      sectionObserver.observe(contactEl);
    }
  });

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <ParticleBackground theme={theme} />
      <Cursor visible={visible} />
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

      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} visible={visible} setVisible={setVisible} theme={theme} />
      <Contact theme={theme} contact={contact} inst={inst} git={git} instDark={instDark} gitDark={gitDark} />
    </div>
  );
};
