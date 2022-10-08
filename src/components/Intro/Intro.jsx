import { useEffect } from "react";
import { useRef } from "react";
import Typewriter from "typewriter-effect";
import "./Intro.scss";

export const Intro = (props) => {
  const text = useRef();
  const circle = useRef();

  useEffect(() => {
    setTimeout(() => {
      text.current.style.transition = "0.05s";
      circle.current.style.transition = "0.05s";
    }, 1500);
  }, []);

  document.onmousemove = (e) => {
    text.current.style.transform = `translate(-${e.x / 100}px, -${e.y / 100}px)`;
    circle.current.style.transform = `translate(-${e.x / 40}px, -${e.y / 40}px)`;
  };

  return (
    <section id="intro" className="intro section" ref={props.intro}>
      <div className="container">
        <div className="intro__text" ref={text}>
          PORTFOLIO
        </div>
        <div className="intro__circle" ref={circle}></div>
        <div className="section__inner">
          <div className="section__info">
            <div className="title">Vladimir Lelyavin</div>
            <div className="descr">
              <Typewriter
                options={{ cursor: null }}
                onInit={(typewriter) => {
                  typewriter.changeDelay(30).typeString("web developer").start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
