import React, { useEffect, useRef, useState } from "react";
import { Loader } from "./components/Loader";
import { Cursor } from "./components/Cursor";
import { Menu } from "./components/Menu";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import git from "./images/git.webp";
import gitDark from "./images/gitDark.webp";
import instDark from "./images/instDark.webp";
import inst from "./images/inst.webp";
import "./main.scss";
import "./fonts/fonts.scss";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const loader = document.querySelector(".loader");
    setIsLoading(!isLoading);
    loader.classList.add("hidden");
  }, []);

  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const options = { block: "center", behavior: "smooth" };
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, [theme]);

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

    cursor.style.opacity = 1;
    cursor.style.left = `${e.x - 10}px`;
    cursor.style.top = `${e.y - 10}px`;
  };

  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
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
  });

  const mainObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const nextEl = el.nextSibling;
          const prevEl = el.previousSibling;
          window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0 && nextEl) {
              nextEl.scrollIntoView(options);
            } else if (e.deltaY < 0 && prevEl) {
              prevEl.scrollIntoView(options);
            }
          });
        }
      });
    },
    { threshold: 1 }
  );

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

    const introEl = document.querySelector(".intro");
    const projectsEl = document.querySelector(".projects");
    const aboutEl = document.querySelector(".about");
    const contactEl = document.querySelector(".contact");

    mainObserver.observe(introEl);
    mainObserver.observe(projectsEl);
    mainObserver.observe(aboutEl);
    mainObserver.observe(contactEl);
  }, [visible]);

  const sections = {
    intro,
    about,
    projects,
    contact,
  };

  return (
    <>
      <Loader />
      <Cursor visible={visible} />
      <Menu active={active} setActive={setActive} options={options} {...sections} />
      <Header
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
        options={options}
        inst={inst}
        git={git}
        instDark={instDark}
        gitDark={gitDark}
        {...sections}
      />
      <Navbar options={options} {...sections} />
      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} visible={visible} setVisible={setVisible} theme={theme} />
      <Contact theme={theme} contact={contact} inst={inst} git={git} instDark={instDark} gitDark={gitDark} />
    </>
  );
};
