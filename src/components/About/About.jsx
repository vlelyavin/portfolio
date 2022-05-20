import { useState, useEffect } from "react";
import mtb from "../../images/mtb.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutMe } from "../AboutInfo/AboutMe/AboutMe";
import { Passion } from "../AboutInfo/Passion/Passion";
import { Skills } from "../AboutInfo/Skills/Skills";

import "./About.scss";

export const About = ({ about, visible, setVisible }) => {
  const showDetails = () => {
    // const about = document.querySelector("#about");
    // about.classList.toggle("first");

    // setTimeout(() => {
    //   const aboutDetails = document.querySelector("#details");
    //   aboutDetails.classList.toggle("second");
    // }, 300);

    setTimeout(() => {
      setVisible(!visible);
    }, 300);
  };

  const hideDetails = () => {
    // const about = document.querySelector("#about");
    // about.style.transform = `translateX(0)`;

    // const aboutDetails = document.querySelector("#details");
    // aboutDetails.style.transform = `translateX(150%)`;

    setTimeout(() => {
      setVisible(!visible);
    }, 300);
  };

  const aboutMe = `Born in Kiev in 2004, currently studying in the university and searching for the first job.
  After discovering web development for myself, quickly became interested in this topic. My main goal is to improve my skills, so every opportunity should be exploited whenever it arises. Nowadays struggling with learning react)`;

  return (
    <section className="about section" ref={about}>
      {!visible ? (
        <div id="about" className="container">
          <div className="section__inner">
            <div className="section__info">
              <div className="title">About</div>
              <div className="descr">
                i love development, technology
                <br />
                and biking
              </div>
              <div className="section__button">
                <div className="section__link hovereffect" onClick={showDetails}>
                  Show me more
                </div>
              </div>
            </div>
            <div className="section__image__container">
              <img className="section__image" src={mtb} alt="mtb" />
            </div>
          </div>
        </div>
      ) : (
        <Router>
          <div id="details" className="container">
            <div className="details__inner">
              <div className="details__nav">
                <Link to="/" className="details__nav__button">
                  Who i am
                </Link>
                <Link to="/passion" className="details__nav__button">
                  My passion
                </Link>
                <Link to="/skills" className="details__nav__button">
                  Skill set
                </Link>
              </div>
              <div className="details__info">
                <Routes>
                  <Route path="/" element={<AboutMe aboutMe={aboutMe} />} />
                  <Route path="/passion" element={<Passion />} />
                  <Route path="/skills" element={<Skills />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      )}
    </section>
  );
};
