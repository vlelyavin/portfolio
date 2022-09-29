import "./Skills.scss";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { useEffect } from "react";

export const Skills = () => {
  const iconStyle = { width: "80px", height: "80px" };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const jsLine = document.querySelector(".js");
        const htmlLine = document.querySelector(".html");
        const cssLine = document.querySelector(".css");
        const sassLine = document.querySelector(".sass");
        const reactLine = document.querySelector(".react");

        jsLine.style.width = `90%`;
        htmlLine.style.width = `110%`;
        cssLine.style.width = `110%`;
        sassLine.style.width = `95%`;
        reactLine.style.width = `80%`;
      }
    });
  });

  useEffect(() => {
    const progressLine = document.querySelector(".skills__line__progress");
    observer.observe(progressLine);
  }, []);

  return (
    <div className="skills">
      <div className="skills__row">
        <div className="skills__column">
          <div className="skills__line">
            <div className="skills__line__icon">
              <IoLogoJavascript style={iconStyle} />
            </div>
            <div className="skills__line__inner">
              <div className="skills__line__info">
                <div className="skills__line__info__name">Javascript</div>
                <div className="skills__line__info__exp">4 months</div>
              </div>
              <div className="skills__line__progress js"></div>
            </div>
          </div>

          <div className="skills__line">
            <div className="skills__line__icon">
              <IoLogoHtml5 style={iconStyle} />
            </div>
            <div className="skills__line__inner">
              <div className="skills__line__info">
                <div className="skills__line__info__name">HTML</div>
                <div className="skills__line__info__exp">5 months</div>
              </div>
              <div className="skills__line__progress html"></div>
            </div>
          </div>

          <div className="skills__line">
            <div className="skills__line__icon">
              <FaReact style={iconStyle} />
            </div>
            <div className="skills__line__inner">
              <div className="skills__line__info">
                <div className="skills__line__info__name">React</div>
                <div className="skills__line__info__exp">3 months</div>
              </div>
              <div className="skills__line__progress react"></div>
            </div>
          </div>
        </div>

        <div className="skills__column">
          <div className="skills__line">
            <div className="skills__line__icon">
              <IoLogoCss3 style={iconStyle} />
            </div>
            <div className="skills__line__inner">
              <div className="skills__line__info">
                <div className="skills__line__info__name">CSS</div>
                <div className="skills__line__info__exp">5 months</div>
              </div>
              <div className="skills__line__progress css"></div>
            </div>
          </div>

          <div className="skills__line">
            <div className="skills__line__icon">
              <IoLogoSass style={iconStyle} />
            </div>
            <div className="skills__line__inner">
              <div className="skills__line__info">
                <div className="skills__line__info__name">Sass</div>
                <div className="skills__line__info__exp">3 months</div>
              </div>
              <div className="skills__line__progress sass"></div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="skills__row"></div> */}
    </div>
  );
};
