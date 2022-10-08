import React, { useEffect, useReducer, useRef } from "react";
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
import { INITIAL_STATE, mainReducer } from "./reducers/mainReducer";
import { CHANGE_LOADING_STATUS, CHANGE_THEME } from "./actions/mainActions";

export const App = () => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: CHANGE_LOADING_STATUS, payload: false });
  }, []);

  useEffect(() => {
    dispatch({ type: CHANGE_THEME, payload: localStorage.getItem("theme") });
  }, [state.theme]);

  const intro = useRef();
  const projects = useRef();
  const about = useRef();
  const contact = useRef();
  const cursor = useRef();
  const bicycle = useRef();
  const spaceman = useRef();
  const menu = useRef();
  const headerLower = useRef();
  const headerUpper = useRef();
  const options = { block: "center", behavior: "smooth" };

  window.onmousemove = (e) => {
    cursor.current.style.opacity = 1;
    cursor.current.style.left = `${e.x - 10}px`;
    cursor.current.style.top = `${e.y - 10}px`;
    if (bicycle && !state.visible) {
      bicycle.current.style.transform = `scale(2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
    }
    if (spaceman && !state.visible) {
      spaceman.current.style.transform = `scale(1.2) translate(${e.clientX / 900}%, ${e.clientY / 900}%)`;
    }
  };
  document.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
    },
    { passive: false }
  );

  const sections = { intro, about, projects, contact };

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
    const appConsole = document.querySelector(".projects__app");
    const ImgContainers = document.querySelectorAll(".section__image__container");

    observer.observe(appConsole);
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

    mainObserver.observe(intro.current);
    mainObserver.observe(projects.current);
    mainObserver.observe(about.current);
    mainObserver.observe(contact.current);
  }, [state.visible]);

  return (
    <>
      {state.isLoading ? <Loader /> : null}
      <Cursor visible={state.visible} cursor={cursor} />
      <Menu
        state={state}
        dispatch={dispatch}
        menu={menu}
        headerLower={headerLower}
        headerUpper={headerUpper}
        options={options}
        sections={sections}
      />
      <Header
        state={state}
        dispatch={dispatch}
        menu={menu}
        headerLower={headerLower}
        headerUpper={headerUpper}
        options={options}
        inst={inst}
        git={git}
        instDark={instDark}
        gitDark={gitDark}
        {...sections}
      />
      <Navbar options={options} sections={sections} />
      <Intro intro={intro} />
      <Projects projects={projects} />
      <About about={about} bicycle={bicycle} state={state} dispatch={dispatch} />
      <Contact
        theme={state.theme}
        contact={contact}
        inst={inst}
        git={git}
        instDark={instDark}
        gitDark={gitDark}
        spaceman={spaceman}
      />
    </>
  );
};
